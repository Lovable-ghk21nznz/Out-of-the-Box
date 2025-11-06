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
    cardCount: 50,
    gradient: 'var(--gradient-warm)',
    color: 'linear-gradient(135deg, hsl(340 75% 65%), hsl(350 80% 70%))',
  },
  {
    id: 'never-have-i-dating',
    name: 'Never Have I Ever',
    description: 'Discover secrets and shared experiences',
    emoji: '🙈',
    cardCount: 40,
    gradient: 'var(--gradient-warm)',
    color: 'linear-gradient(135deg, hsl(280 65% 60%), hsl(290 70% 65%))',
  },
  {
    id: 'buzzed',
    name: 'Buzzed',
    description: 'Classic drinking game fun',
    emoji: '🍻',
    cardCount: 60,
    gradient: 'var(--gradient-sunshine)',
    color: 'linear-gradient(135deg, hsl(45 95% 60%), hsl(38 92% 58%))',
  },
  {
    id: 'truth-or-drink',
    name: 'Truth or Drink',
    description: 'Answer honestly or take a sip',
    emoji: '🍹',
    cardCount: 45,
    gradient: 'var(--gradient-sunshine)',
    color: 'linear-gradient(135deg, hsl(175 65% 55%), hsl(185 70% 60%))',
  },
  {
    id: 'would-you-rather',
    name: 'Would You Rather',
    description: 'Impossible choices and fun dilemmas',
    emoji: '🤔',
    cardCount: 55,
    gradient: 'var(--gradient-cool)',
    color: 'linear-gradient(135deg, hsl(210 75% 60%), hsl(220 70% 65%))',
  },
  {
    id: 'deep-talk',
    name: 'Deep Talk',
    description: 'Meaningful conversations starter',
    emoji: '✨',
    cardCount: 50,
    gradient: 'var(--gradient-cool)',
    color: 'linear-gradient(135deg, hsl(250 65% 55%), hsl(260 70% 60%))',
  },
];
