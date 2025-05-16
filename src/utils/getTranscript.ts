// CommonJS-compatible import
const ytTranscript = require('youtube-transcript');

export async function getTranscript(url: string): Promise<string> {
  try {
    const transcript = await ytTranscript.getTranscript(url);
    return transcript.map((entry: { text: string }) => entry.text).join(' ');
  } catch (err: any) {
    throw new Error(`Transcript fetch failed: ${err.message}`);
  }
}
