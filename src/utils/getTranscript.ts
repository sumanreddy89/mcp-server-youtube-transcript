import { YouTubeTranscript } from 'youtube-transcript-downloader';

export async function getTranscript(url: string): Promise<string> {
  try {
    const transcript = await YouTubeTranscript.fetchTranscript(url);
    return transcript.map((entry: { text: string }) => entry.text).join(' ');
  } catch (err: any) {
    throw new Error(`Transcript fetch failed: ${err.message}`);
  }
}
