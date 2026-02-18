import express from "express";
import cors from "cors";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const GAMES_DIR = join(ROOT, "src", "data", "games");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/vote", (req, res) => {
  const { category, id: cardId, vote } = req.body;
  if (
    typeof category !== "string" ||
    typeof cardId !== "number" ||
    typeof vote !== "boolean"
  ) {
    return res
      .status(400)
      .json({ error: "Need category (string), id (number), vote (boolean)" });
  }
  const filePath = join(GAMES_DIR, category, `${category}.json`);
  try {
    const data = JSON.parse(readFileSync(filePath, "utf-8"));
    const card = data.cards?.find((c) => c.id === cardId);
    if (!card) return res.status(404).json({ error: "Card not found" });
    if (vote) card.yesVotes = (card.yesVotes ?? 0) + 1;
    else card.noVotes = (card.noVotes ?? 0) + 1;
    writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`Feedback API http://localhost:${PORT}`));
