export async function getTranscript(url: string): Promise<string> {
  try {
    const ytTranscriptModule = await import('youtube-transcript');
    const getTranscript = ytTranscriptModule.default.getTranscript;

    const transcript = await getTranscript(url);
    return transcript.map((entry: { text: string }) => entry.text).join(' ');
  } catch (err: any) {
    throw new Error(`Transcript fetch failed: ${err.message}`);
  }
}
