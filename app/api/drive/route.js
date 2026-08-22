import { NextResponse } from 'next/server';
const { fetchDriveWork } = require('../../../lib/drive');

export async function GET() {
  try {
    console.log('Environment check:', {
      hasCredentials: !!process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS,
      hasFolderId: !!process.env.GOOGLE_DRIVE_FOLDER_ID,
      folderId: process.env.GOOGLE_DRIVE_FOLDER_ID
    });
    
    const videos = await fetchDriveWork();
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching drive videos:', error.message);
    console.error('Full error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos from Google Drive', details: error.message },
      { status: 500 }
    );
  }
}
