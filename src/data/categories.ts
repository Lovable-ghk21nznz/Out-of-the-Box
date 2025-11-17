import buzzedData from "./games/buzzed/buzzed.json";
import datingData from "./games/dating/dating.json";
import deepTalkData from "./games/deep-talk/deep-talk.json";
import mostLikelyData from "./games/most-likely/most-likely.json";
import neverHaveIData from "./games/never-have-i-ever/never-have-i-ever.json";
import pickYourPoisonData from "./games/pick-your-poison/pick-your-poison.json";
import pictionaryAdultData from "./games/pictionary-adult/pictionary-adult.json";
import truthOrDrinkData from "./games/truth-or-drink/truth-or-drink.json";
import wouldYouRatherData from "./games/would-you-rather/would-you-rather.json";

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
    id: "buzzed",
    name: "Buzzed",
    description: "Classic drinking game fun",
    emoji: "🍻",
    cardCount: buzzedData.cards.length,
    gradient: "var(--gradient-sunshine)",
    color: "linear-gradient(135deg, hsl(45 95% 60%), hsl(38 92% 58%))",
  },
  {
    id: "dating",
    name: "Dating",
    description: "Dating game fun",
    emoji: "💑",
    cardCount: datingData.cards.length,
    gradient: "var(--gradient-sunshine)",
    color: "linear-gradient(135deg, hsl(45 95% 60%), hsl(38 92% 58%))",
  },
  {
    id: "deep-talk",
    name: "Deep Talk",
    description: "Meaningful conversations starter",
    emoji: "✨",
    cardCount: deepTalkData.cards.length,
    gradient: "var(--gradient-cool)",
    color: "linear-gradient(135deg, hsl(250 65% 55%), hsl(260 70% 60%))",
  },
  {
    id: "most-likely",
    name: "Most Likely",
    description: "Guess the most likely outcome",
    emoji: "🤔",
    cardCount: mostLikelyData.cards.length,
    gradient: "var(--gradient-cool)",
    color: "linear-gradient(135deg, hsl(210 75% 60%), hsl(220 70% 65%))",
  },
  {
    id: "never-have-i-ever",
    name: "Never Have I Ever",
    description: "Discover secrets and shared experiences",
    emoji: "🙈",
    cardCount: neverHaveIData.cards.length,
    gradient: "var(--gradient-warm)",
    color: "linear-gradient(135deg, hsl(280 65% 60%), hsl(290 70% 65%))",
  },
  {
    id: "pick-your-poison",
    name: "Pick Your Poison",
    description: "Choose between two terrible options",
    emoji: "☠️",
    cardCount: pickYourPoisonData.cards.length,
    gradient: "var(--gradient-cool)",
    color: "linear-gradient(135deg, hsl(140 60% 45%), hsl(150 65% 50%))",
  },
  {
    id: "pictionary-adult",
    name: "Pictionary Adult",
    description: "Draw challenging and funny scenarios",
    emoji: "🎨",
    cardCount: pictionaryAdultData.cards.length,
    gradient: "var(--gradient-warm)",
    color: "linear-gradient(135deg, hsl(15 85% 60%), hsl(25 90% 65%))",
  },
  {
    id: "truth-or-drink",
    name: "Truth or Drink",
    description: "Answer honestly or take a sip",
    emoji: "🍹",
    cardCount: truthOrDrinkData.cards.length,
    gradient: "var(--gradient-sunshine)",
    color: "linear-gradient(135deg, hsl(175 65% 55%), hsl(185 70% 60%))",
  },
  {
    id: "would-you-rather",
    name: "Would You Rather",
    description: "Impossible choices and fun dilemmas",
    emoji: "🤔",
    cardCount: wouldYouRatherData.cards.length,
    gradient: "var(--gradient-cool)",
    color: "linear-gradient(135deg, hsl(210 75% 60%), hsl(220 70% 65%))",
  },
];
