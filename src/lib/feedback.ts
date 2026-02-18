/**
 * Submit a vote for a card. Backend updates the game JSON (increments yesVotes or noVotes).
 * Set VITE_FEEDBACK_API_URL to your backend vote endpoint (e.g. http://localhost:3001/vote).
 */
const API_URL = import.meta.env.VITE_FEEDBACK_API_URL as string | undefined;

export function submitVote(
  categoryId: string,
  cardId: number,
  vote: boolean,
): void {
  if (!API_URL) return;
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category: categoryId, id: cardId, vote }),
  }).catch(() => {});
}
