/**
 * Submit a vote for a card. On Vercel, uses serverless /api/vote + Upstash Redis.
 * Defaults to /api/vote (same origin). For local dev with Express: set VITE_FEEDBACK_API_URL=http://localhost:3001/vote
 */
const API_URL =
  (import.meta.env.VITE_FEEDBACK_API_URL as string | undefined) ?? "/api/vote";

export function submitVote(
  categoryId: string,
  cardId: number,
  vote: boolean,
): void {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category: categoryId, id: cardId, vote }),
  }).catch(() => {});
}
