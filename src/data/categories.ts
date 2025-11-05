export interface Game {
  id: string;
  name: string;
  description: string;
  emoji: string;
  cardCount: number;
  gradient: string;
}

export const games: Game[] = [
  {
    id: 'truth-or-dare-dating',
    name: 'First Date',
    description: 'Romantic truths and daring challenges for couples',
    emoji: '💕',
    cardCount: 50,
    gradient: 'var(--gradient-warm)',
  },
  {
    id: 'never-have-i-dating',
    name: 'Never Have I Ever',
    description: 'Discover secrets and shared experiences',
    emoji: '🙈',
    cardCount: 40,
    gradient: 'var(--gradient-warm)',
  },
  {
    id: 'buzzed',
    name: 'Buzzed',
    description: 'Classic drinking game fun',
    emoji: '🍻',
    cardCount: 60,
    gradient: 'var(--gradient-sunshine)',
  },
  {
    id: 'truth-or-drink',
    name: 'Truth or Drink',
    description: 'Answer honestly or take a sip',
    emoji: '🍹',
    cardCount: 45,
    gradient: 'var(--gradient-sunshine)',
  },
  {
    id: 'would-you-rather',
    name: 'Would You Rather',
    description: 'Impossible choices and fun dilemmas',
    emoji: '🤔',
    cardCount: 55,
    gradient: 'var(--gradient-cool)',
  },
  {
    id: 'deep-talk',
    name: 'Deep Talk',
    description: 'Meaningful conversations starter',
    emoji: '✨',
    cardCount: 50,
    gradient: 'var(--gradient-cool)',
  },
];
