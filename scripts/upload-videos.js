#!/usr/bin/env node

/**
 * Cloudflare R2 Video Sync Script
 * This script syncs video projects from the video-projects folder to Cloudflare R2
 * It handles uploads, updates, and deletions to keep R2 in sync with local folder
 * Usage: node scripts/upload-videos.js
 * 
 * Environment variables required:
 * - CLOUDFLARE_R2_ACCOUNT_ID: Your Cloudflare account ID
 * - CLOUDFLARE_R2_ACCESS_KEY_ID: R2 access key ID
 * - CLOUDFLARE_R2_SECRET_ACCESS_KEY: R2 secret access key
 * - CLOUDFLARE_R2_BUCKET: Bucket name (default: muhammad-affan-video-editing)
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { getVideoDuration } = require('get-video-duration');
const { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand, DeleteObjectsCommand } = require('@aws-sdk/client-s3');

// Configuration
const BUCKET_NAME = process.env.CLOUDFLARE_R2_BUCKET || 'muhammad-affan-video-editing';
const VIDEO_PROJECTS_DIR = path.join(__dirname, '../video-projects');
const METADATA_FILE = 'metadata.json';

// Initialize S3 client for Cloudflare R2
const s3Client = new S3Client({
  region: 'auto',
  endpoint: 'https://f80ab5850311ec5bb7df99128daea526.r2.cloudflarestorage.com',
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  },
});

/**
 * Get MD5 hash of a file
 */
function getFileHash(filePath) {
  const fileContent = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(fileContent).digest('hex');
}

/**
 * Upload a file to R2
 */
async function uploadFile(key, filePath, contentType) {
  const fileContent = fs.readFileSync(filePath);
  
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ContentType: contentType,
  });

  try {
    await s3Client.send(command);
    console.log(`✓ Uploaded: ${key}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to upload ${key}:`, error.message);
    return false;
  }
}

/**
 * Delete a file from R2
 */
async function deleteFile(key) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  try {
    await s3Client.send(command);
    console.log(`✓ Deleted: ${key}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to delete ${key}:`, error.message);
    return false;
  }
}

/**
 * Delete multiple files from R2
 */
async function deleteFiles(keys) {
  if (keys.length === 0) return true;
  
  const command = new DeleteObjectsCommand({
    Bucket: BUCKET_NAME,
    Delete: {
      Objects: keys.map(key => ({ Key: key })),
      Quiet: false,
    },
  });

  try {
    await s3Client.send(command);
    console.log(`✓ Deleted ${keys.length} file(s)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to delete files:`, error.message);
    return false;
  }
}

/**
 * List all objects in R2 bucket
 */
async function listR2Objects() {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
  });

  try {
    const response = await s3Client.send(command);
    return response.Contents || [];
  } catch (error) {
    console.error('✗ Failed to list R2 objects:', error.message);
    return [];
  }
}

/**
 * Get content type based on file extension
 */
function getContentType(filename) {
  const ext = path.extname(filename).toLowerCase();
  const contentTypes = {
    '.mp4': 'video/mp4',
    '.mov': 'video/quicktime',
    '.webm': 'video/webm',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.json': 'application/json',
  };
  return contentTypes[ext] || 'application/octet-stream';
}

/**
 * Convert folder name to title case
 */
function toTitleCase(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\//g, ' - ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Auto-generate metadata.json if it doesn't exist
 */
async function generateMetadata(projectName, files, projectPath) {
  const videoFile = files.find(f => 
    f.endsWith('.mp4') || f.endsWith('.mov') || f.endsWith('.webm')
  );
  const thumbnailFile = files.find(f => 
    f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
  );

  if (!videoFile || !thumbnailFile) {
    return null;
  }

  // Fetch actual video duration
  let duration = '00:00';
  try {
    const videoPath = path.join(projectPath, videoFile);
    const durationInSeconds = await getVideoDuration(videoPath);
    
    // Convert seconds to MM:SS format
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    duration = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    console.log(`  ✓ Fetched video duration: ${duration}`);
  } catch (error) {
    console.log(`  ⚠️  Could not fetch video duration, using default: ${error.message}`);
  }

  const metadata = {
    title: toTitleCase(projectName),
    description: `Video project: ${toTitleCase(projectName)}`,
    tags: ['video', 'production'],
    duration: duration,
    category: 'Creative'
  };

  return metadata;
}

/**
 * Save metadata.json to local folder
 */
function saveMetadata(projectPath, metadata) {
  const metadataPath = path.join(projectPath, METADATA_FILE);
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  console.log(`✓ Generated ${METADATA_FILE} for ${path.basename(projectPath)}`);
}

/**
 * Recursively find all video files in a directory
 */
function findVideoFilesRecursively(dir, basePath = '') {
  const videoProjects = [];
  
  if (!fs.existsSync(dir)) {
    return videoProjects;
  }

  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    if (item.startsWith('.')) continue;
    
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      // Recursively search subdirectories
      const subProjects = findVideoFilesRecursively(itemPath, path.join(basePath, item));
      videoProjects.push(...subProjects);
    } else if (stats.isFile()) {
      // Check if this is a video file
      if (item.endsWith('.mp4') || item.endsWith('.mov') || item.endsWith('.webm')) {
        videoProjects.push({
          folder: basePath,
          file: item,
          fullPath: itemPath,
        });
      }
    }
  }

  return videoProjects;
}

/**
 * Get all local files in projects folder (recursive)
 */
function getLocalFiles() {
  const localFiles = new Map();
  
  if (!fs.existsSync(VIDEO_PROJECTS_DIR)) {
    return localFiles;
  }

  // Find all video files recursively
  const videoProjects = findVideoFilesRecursively(VIDEO_PROJECTS_DIR);
  
  console.log(`Found ${videoProjects.length} video project(s) in nested structure.\n`);

  for (const project of videoProjects) {
    const projectDir = path.join(VIDEO_PROJECTS_DIR, project.folder);
    const files = fs.readdirSync(projectDir);
    
    for (const file of files) {
      // Skip system files
      if (file === '.DS_Store' || file.startsWith('.')) {
        continue;
      }
      
      const filePath = path.join(projectDir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        const key = project.folder ? `${project.folder}/${file}` : file;
        localFiles.set(key, {
          path: filePath,
          hash: getFileHash(filePath),
          size: stats.size,
        });
      }
    }
  }

  return localFiles;
}

/**
 * Process a single video project folder
 */
async function processProject(projectName) {
  console.log(`\nProcessing project: ${projectName}`);
  
  const projectPath = path.join(VIDEO_PROJECTS_DIR, projectName);
  
  if (!fs.existsSync(projectPath)) {
    console.error(`✗ Project folder not found: ${projectPath}`);
    return null;
  }

  const files = fs.readdirSync(projectPath);
  const metadataPath = path.join(projectPath, METADATA_FILE);
  
  // Check for metadata.json, auto-generate if missing
  if (!files.includes(METADATA_FILE)) {
    console.log(`⚠️  Missing ${METADATA_FILE} in ${projectName}, auto-generating...`);
    const autoMetadata = await generateMetadata(projectName, files, projectPath);
    
    if (!autoMetadata) {
      console.error(`✗ Cannot auto-generate metadata: missing video or thumbnail file`);
      return null;
    }
    
    saveMetadata(projectPath, autoMetadata);
    files.push(METADATA_FILE);
    
    // Upload the newly generated metadata.json
    const contentType = getContentType(METADATA_FILE);
    await uploadFile(`${projectName}/${METADATA_FILE}`, metadataPath, contentType);
  }

  // Read metadata
  let metadata;
  try {
    metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
  } catch (error) {
    console.error(`✗ Failed to parse ${METADATA_FILE}:`, error.message);
    return null;
  }

  // Return project data with URLs (files already uploaded in main sync)
  return {
    ...metadata,
    videoUrl: `https://videoassets.smaffan.com/${projectName}/${files.find(f => f.endsWith('.mp4') || f.endsWith('.mov') || f.endsWith('.webm'))}`,
    thumbnail: `https://videoassets.smaffan.com/${projectName}/${files.find(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'))}`,
  };
}

/**
 * Update the main metadata.json file in R2
 */
async function updateMetadata(allProjects) {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: METADATA_FILE,
    Body: JSON.stringify(allProjects, null, 2),
    ContentType: 'application/json',
  });

  try {
    await s3Client.send(command);
    console.log(`\n✓ Updated ${METADATA_FILE} in R2`);
  } catch (error) {
    console.error(`✗ Failed to update ${METADATA_FILE}:`, error.message);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting video sync to Cloudflare R2...\n');

  // Check environment variables
  if (!process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || !process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY) {
    console.error('✗ Missing required environment variables:');
    console.error('  - CLOUDFLARE_R2_ACCESS_KEY_ID');
    console.error('  - CLOUDFLARE_R2_SECRET_ACCESS_KEY');
    console.error('\nSet these variables in your .env file or environment.');
    process.exit(1);
  }

  // Check if video-projects directory exists
  if (!fs.existsSync(VIDEO_PROJECTS_DIR)) {
    console.error(`✗ Video projects directory not found: ${VIDEO_PROJECTS_DIR}`);
    process.exit(1);
  }

  // Get local files
  console.log('Scanning local files...');
  const localFiles = getLocalFiles();
  console.log(`Found ${localFiles.size} local file(s).\n`);

  // Get R2 files
  console.log('Scanning R2 bucket...');
  const r2Objects = await listR2Objects();
  const r2Files = new Map();
  r2Objects.forEach(obj => {
    r2Files.set(obj.Key, {
      etag: obj.ETag,
      size: obj.Size,
    });
  });
  console.log(`Found ${r2Files.size} file(s) in R2.\n`);

  // Determine files to upload (new or changed)
  const filesToUpload = [];
  for (const [key, localFile] of localFiles) {
    const r2File = r2Files.get(key);
    
    if (!r2File) {
      // New file
      filesToUpload.push({ key, localFile, reason: 'new' });
    } else if (r2File.size !== localFile.size) {
      // File size changed
      filesToUpload.push({ key, localFile, reason: 'size changed' });
    }
  }

  // Determine files to delete (exist in R2 but not locally)
  const filesToDelete = [];
  for (const key of r2Files.keys()) {
    if (!localFiles.has(key)) {
      filesToDelete.push(key);
    }
  }

  // Perform deletions
  if (filesToDelete.length > 0) {
    console.log(`\n🗑️  Deleting ${filesToDelete.length} file(s) from R2:`);
    filesToDelete.forEach(key => console.log(`  - ${key}`));
    await deleteFiles(filesToDelete);
  } else {
    console.log('\n✓ No files to delete.');
  }

  // Perform uploads
  if (filesToUpload.length > 0) {
    console.log(`\n📤 Uploading ${filesToUpload.length} file(s) to R2:`);
    for (const { key, localFile, reason } of filesToUpload) {
      const contentType = getContentType(path.basename(key));
      await uploadFile(key, localFile.path, contentType);
    }
  } else {
    console.log('\n✓ No files to upload.');
  }

  // Get all project folders (recursive search for video files)
  const videoProjects = findVideoFilesRecursively(VIDEO_PROJECTS_DIR);
  
  // Extract unique folder paths from video projects
  const projectFolders = [...new Set(videoProjects.map(p => p.folder))];

  if (projectFolders.length === 0) {
    console.log('\nNo project folders found in video-projects directory.');
    process.exit(0);
  }

  console.log(`\n📋 Processing ${projectFolders.length} project(s) for metadata...\n`);

  // Process each project for metadata
  const allProjects = [];
  for (const projectFolder of projectFolders) {
    const projectData = await processProject(projectFolder);
    if (projectData) {
      allProjects.push(projectData);
    }
  }

  // Update metadata.json in R2
  if (allProjects.length > 0) {
    await updateMetadata(allProjects);
    console.log(`\n✅ Successfully synced ${allProjects.length} project(s) to R2!`);
  } else {
    console.log('\n⚠️ No projects were synced.');
  }
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
