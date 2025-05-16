export async function getTranscript(url: string): Promise<string> {
  try {
    const { default: YoutubeTranscript } = await import('youtube-transcript');

    const transcript = await YoutubeTranscript.fetchTranscript(url);

    return transcript.map((entry: { text: string }) => entry.text).join(' ');
  } catch (err: any) {
    throw new Error(`Transcript fetch failed: ${err.message}`);
  }
}
