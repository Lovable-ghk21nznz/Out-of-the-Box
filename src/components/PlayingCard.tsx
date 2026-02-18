import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
interface PlayingCardProps {
  content?: string;
  color: string;
  prompt?: string;
  options?: string[];
  /** Points (e.g. sips) corresponding to difficulty level */
  points?: number;
  /** Callback when user votes (true = yes, false = no) */
  onVote?: (vote: boolean) => void;
  /** If user already voted this session */
  voted?: boolean | null;
}

export const PlayingCard = ({
  content,
  color,
  prompt,
  options,
  points,
  onVote,
  voted = null,
}: PlayingCardProps) => {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full max-w-sm mx-auto"
    >
      <Card
        className="relative overflow-hidden border-0 shadow-elevated flex flex-col items-center justify-center"
        style={{ background: color, minHeight: "400px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="relative flex flex-col items-center justify-center p-8 w-full flex-1">
          <div className="flex flex-col items-center gap-4 w-full flex-1">
            {prompt && (
              <p className="text-lg md:text-xl font-semibold text-white/95 text-center">
                {prompt}
              </p>
            )}
            {options && (
              <ul className="flex flex-col gap-2 w-full list-none text-left">
                {options!.map((opt, i) => (
                  <li
                    key={i}
                    className="text-base md:text-lg font-medium text-white text-center leading-relaxed py-1 px-2 rounded bg-white/10"
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
            {content && (
              <p className="text-xl md:text-2xl font-medium text-white text-center leading-relaxed">
                {content}
              </p>
            )}
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2">
          {points != null && (
            <span className="text-sm font-medium text-white/80">
              Points: {points}
            </span>
          )}
          {onVote && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/70 mr-1">Good card?</span>
              <Button
                type="button"
                size="icon"
                variant={voted === true ? "default" : "secondary"}
                className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 border-0"
                onClick={() => onVote(true)}
                aria-label="Vote yes"
              >
                <ThumbsUp className="h-4 w-4 text-white" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant={voted === false ? "default" : "secondary"}
                className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 border-0"
                onClick={() => onVote(false)}
                aria-label="Vote no"
              >
                <ThumbsDown className="h-4 w-4 text-white" />
              </Button>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
