/**
 * Vercel serverless: POST { category, id, vote } to increment yes/no in Upstash Redis.
 * Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in Vercel (or .env for vercel dev).
 */
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  const { category, id: cardId, vote } = req.body ?? {};
  if (
    typeof category !== "string" ||
    typeof cardId !== "number" ||
    typeof vote !== "boolean"
  ) {
    return res
      .status(400)
      .json({ error: "Need category (string), id (number), vote (boolean)" });
  }

  try {
    const key = `v:${category}:${cardId}:${vote ? "y" : "n"}`;
    await redis.incr(key);
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
