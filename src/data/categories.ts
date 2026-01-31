import brandystormData from "./games/brandystorm/brandystorm.json";
import loveOnTheRocksData from "./games/love-on-the-rocks/love-on-the-rocks.json";
import rumAndReflectionData from "./games/rum-and-reflection/rum-and-reflection.json";
import tequilaAndTaboosData from "./games/tequila-and-taboos/tequila-and-taboos.json";
import shotsFiredData from "./games/shots-fired/shots-fired.json";
import tipsyDoodlesData from "./games/tipsy-doodles/tipsy-doodles.json";
import truthAndTonicData from "./games/truth-and-tonic/truth-and-tonic.json";
import boozeRouletteData from "./games/booze-roulette/booze-roulette.json";

export interface Game {
  id: string;
  name: string;
  description: string;
  emoji: string;
  cardCount: number;
  gradient: string;
  color: string;
}

export const games: Game[] = [
  {
    id: "brandystorm",
    name: "BrandyStorm",
    description: "Discover secrets and shared experiences",
    emoji: "🍻",
    cardCount: brandystormData.cards.length,
    gradient: "var(--gradient-sunshine)",
    color: "linear-gradient(135deg, hsl(45 95% 60%), hsl(38 92% 58%))",
  },
  {
    id: "love-on-the-rocks",
    name: "Love on the Rocks",
    description: "Dating game fun",
    emoji: "💑",
    cardCount: loveOnTheRocksData.cards.length,
    gradient: "var(--gradient-sunshine)",
    color: "linear-gradient(135deg, hsl(45 95% 60%), hsl(38 92% 58%))",
  },
  {
    id: "rum-and-reflection",
    name: "Rum & Reflection",
    description: "Meaningful conversations starter",
    emoji: "✨",
    cardCount: rumAndReflectionData.cards.length,
    gradient: "var(--gradient-cool)",
    color: "linear-gradient(135deg, hsl(250 65% 55%), hsl(260 70% 60%))",
  },
  {
    id: "tequila-and-taboos",
    name: "Tequila & Taboos",
    description: "Debate controversial topics",
    emoji: "🔥",
    cardCount: tequilaAndTaboosData.cards.length,
    gradient: "var(--gradient-warm)",
    color: "linear-gradient(135deg, hsl(0 75% 60%), hsl(15 80% 65%))",
  },
  {
    id: "shots-fired",
    name: "Shots Fired",
    description: "Guess the most likely outcome",
    emoji: "🤔",
    cardCount: shotsFiredData.cards.length,
    gradient: "var(--gradient-cool)",
    color: "linear-gradient(135deg, hsl(210 75% 60%), hsl(220 70% 65%))",
  },
  {
    id: "tipsy-doodles",
    name: "Tipsy Doodles",
    description: "Draw challenging and funny scenarios",
    emoji: "🎨",
    cardCount: tipsyDoodlesData.cards.length,
    gradient: "var(--gradient-warm)",
    color: "linear-gradient(135deg, hsl(15 85% 60%), hsl(25 90% 65%))",
  },
  {
    id: "truth-and-tonic",
    name: "Truth & Tonic",
    description: "Answer honestly or take a sip",
    emoji: "🍹",
    cardCount: truthAndTonicData.cards.length,
    gradient: "var(--gradient-sunshine)",
    color: "linear-gradient(135deg, hsl(175 65% 55%), hsl(185 70% 60%))",
  },
  {
    id: "booze-roulette",
    name: "Booze Roulette",
    description: "Pick the best (or least worst) from the options",
    emoji: "☠️",
    cardCount: boozeRouletteData.cards.length,
    gradient: "var(--gradient-cool)",
    color: "linear-gradient(135deg, hsl(140 60% 45%), hsl(150 65% 50%))",
  },
];
