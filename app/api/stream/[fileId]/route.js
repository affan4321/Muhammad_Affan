import { NextResponse } from 'next/server';
const { getAccessToken } = require('../../../../lib/drive');

const DRIVE_API = "https://www.googleapis.com/drive/v3";

export async function GET(request, { params }) {
  try {
    const fileId = params.fileId;
    const range = request.headers.get('range');
    
    const accessToken = await getAccessToken();
    
    // For Google Drive API, we need to use alt=media to get the file content
    const url = `${DRIVE_API}/files/${encodeURIComponent(fileId)}?alt=media&acknowledgeAbuse=true`;
    
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    
    if (range) {
      options.headers.Range = range;
    }
    
    const upstream = await fetch(url, options);

    if (!upstream.ok && upstream.status !== 206) {
      const body = await upstream.text();
      console.error(`Drive media failed [${upstream.status}]: ${body}`);
      return new Response(`Drive media failed [${upstream.status}]: ${body}`, {
        status: upstream.status,
      });
    }

    const responseHeaders = new Headers();
    for (const h of ["content-type", "content-length", "content-range", "accept-ranges", "etag"]) {
      const v = upstream.headers.get(h);
      if (v) responseHeaders.set(h, v);
    }
    if (!responseHeaders.has("content-type")) responseHeaders.set("content-type", "video/mp4");
    if (!responseHeaders.has("accept-ranges")) responseHeaders.set("accept-ranges", "bytes");
    responseHeaders.set("cache-control", "public, max-age=3600");

    return new Response(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error(`Drive media failed for file ${params.fileId}:`, error);
    return new Response(`Drive media failed: ${error}`, {
      status: 500,
    });
  }
}
