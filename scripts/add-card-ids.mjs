import { writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { games } from "@/data/categories";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const GAMES_DIR = join(__dirname, "../src/data/games");

for (const game of games) {
  const path = join(GAMES_DIR, category, `${game.id}.json`);
  writeFileSync(path, JSON.stringify(game, null, 2) + "\n");
  console.log(`${game.id}: ${game.cardCount} cards`);
}
