import express from "express";
import { getTranscript } from "./utils/getTranscript"; // adjust path if needed

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/transcript", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "Missing YouTube URL" });
  }

  try {
    const transcript = await getTranscript(url);
    res.json({ transcript });
  } catch (error: any) {
    res.status(500).json({ error: "Failed to fetch transcript", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`MCP server listening on port ${port}`);
});
