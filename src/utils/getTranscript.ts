import { getTranscript as getTranscriptFromYouTube } from 'youtube-transcript';

export async function getTranscript(url: string): Promise<string> {
  try {
    const transcript = await getTranscriptFromYouTube(url);
    return transcript.map((entry) => entry.text).join(' ');
  } catch (err: any) {
    throw new Error(`Transcript fetch failed: ${err.message}`);
  }
}
