import truthOrDareDatingData from './games/truth-or-dare-dating/truth-or-dare-dating.json';
import neverHaveIDatingData from './games/never-have-i-dating/never-have-i-dating.json';
import buzzedData from './games/buzzed/buzzed.json';
import truthOrDrinkData from './games/truth-or-drink/truth-or-drink.json';
import wouldYouRatherData from './games/would-you-rather/would-you-rather.json';
import deepTalkData from './games/deep-talk/deep-talk.json';
import pictionaryAdultData from './games/pictionary-adult/pictionary-adult.json';
import pickYourPoisonData from './games/pick-your-poison/pick-your-poison.json';

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
    id: 'truth-or-dare-dating',
    name: 'First Date',
    description: 'Romantic truths and daring challenges for couples',
    emoji: '💕',
    cardCount: truthOrDareDatingData.cards.length,
    gradient: 'var(--gradient-warm)',
    color: 'linear-gradient(135deg, hsl(340 75% 65%), hsl(350 80% 70%))',
  },
  {
    id: 'never-have-i-dating',
    name: 'Never Have I Ever',
    description: 'Discover secrets and shared experiences',
    emoji: '🙈',
    cardCount: neverHaveIDatingData.cards.length,
    gradient: 'var(--gradient-warm)',
    color: 'linear-gradient(135deg, hsl(280 65% 60%), hsl(290 70% 65%))',
  },
  {
    id: 'buzzed',
    name: 'Buzzed',
    description: 'Classic drinking game fun',
    emoji: '🍻',
    cardCount: buzzedData.cards.length,
    gradient: 'var(--gradient-sunshine)',
    color: 'linear-gradient(135deg, hsl(45 95% 60%), hsl(38 92% 58%))',
  },
  {
    id: 'truth-or-drink',
    name: 'Truth or Drink',
    description: 'Answer honestly or take a sip',
    emoji: '🍹',
    cardCount: truthOrDrinkData.cards.length,
    gradient: 'var(--gradient-sunshine)',
    color: 'linear-gradient(135deg, hsl(175 65% 55%), hsl(185 70% 60%))',
  },
  {
    id: 'would-you-rather',
    name: 'Would You Rather',
    description: 'Impossible choices and fun dilemmas',
    emoji: '🤔',
    cardCount: wouldYouRatherData.cards.length,
    gradient: 'var(--gradient-cool)',
    color: 'linear-gradient(135deg, hsl(210 75% 60%), hsl(220 70% 65%))',
  },
  {
    id: 'deep-talk',
    name: 'Deep Talk',
    description: 'Meaningful conversations starter',
    emoji: '✨',
    cardCount: deepTalkData.cards.length,
    gradient: 'var(--gradient-cool)',
    color: 'linear-gradient(135deg, hsl(250 65% 55%), hsl(260 70% 60%))',
  },
  {
    id: 'pictionary-adult',
    name: 'Pictionary Adult',
    description: 'Draw challenging and funny scenarios',
    emoji: '🎨',
    cardCount: pictionaryAdultData.cards.length,
    gradient: 'var(--gradient-warm)',
    color: 'linear-gradient(135deg, hsl(15 85% 60%), hsl(25 90% 65%))',
  },
  {
    id: 'pick-your-poison',
    name: 'Pick Your Poison',
    description: 'Choose between two terrible options',
    emoji: '☠️',
    cardCount: pickYourPoisonData.cards.length,
    gradient: 'var(--gradient-cool)',
    color: 'linear-gradient(135deg, hsl(140 60% 45%), hsl(150 65% 50%))',
  },
];
