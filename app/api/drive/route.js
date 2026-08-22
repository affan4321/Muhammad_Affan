import { NextResponse } from 'next/server';
const { fetchDriveWork } = require('../../../lib/drive');

export async function GET() {
  try {
    const videos = await fetchDriveWork();
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching drive videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos from Google Drive' },
      { status: 500 }
    );
  }
}
