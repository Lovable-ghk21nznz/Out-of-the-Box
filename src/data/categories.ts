export interface Category {
  id: string;
  name: string;
  description: string;
  emoji: string;
  gradient: string;
}

export const categories: Category[] = [
  {
    id: 'dating',
    name: 'Dating',
    description: 'Romantic questions and playful prompts for couples',
    emoji: '💕',
    gradient: 'var(--gradient-warm)',
  },
  {
    id: 'drinking',
    name: 'Drinking',
    description: 'Fun party games to spice up the night',
    emoji: '🍻',
    gradient: 'var(--gradient-sunshine)',
  },
  {
    id: 'get-to-know',
    name: 'Get to Know',
    description: 'Deep questions to connect with friends',
    emoji: '✨',
    gradient: 'var(--gradient-cool)',
  },
];

export interface Game {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  cardCount: number;
}

export const games: Game[] = [
  {
    id: 'truth-or-dare-dating',
    name: 'Truth or Dare',
    description: 'Romantic truths and daring challenges',
    categoryId: 'dating',
    cardCount: 50,
  },
  {
    id: 'never-have-i-dating',
    name: 'Never Have I Ever',
    description: 'Discover secrets and shared experiences',
    categoryId: 'dating',
    cardCount: 40,
  },
  {
    id: 'buzzed',
    name: 'Buzzed',
    description: 'Classic drinking game fun',
    categoryId: 'drinking',
    cardCount: 60,
  },
  {
    id: 'truth-or-drink',
    name: 'Truth or Drink',
    description: 'Answer honestly or take a sip',
    categoryId: 'drinking',
    cardCount: 45,
  },
  {
    id: 'deep-talk',
    name: 'Deep Talk',
    description: 'Meaningful conversations starter',
    categoryId: 'get-to-know',
    cardCount: 50,
  },
  {
    id: 'would-you-rather',
    name: 'Would You Rather',
    description: 'Impossible choices and fun dilemmas',
    categoryId: 'get-to-know',
    cardCount: 55,
  },
];
