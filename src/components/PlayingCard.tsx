import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PlayingCardProps {
  content?: string;
  color: string;
  prompt?: string;
  options?: string[];
  /** Points (e.g. sips) corresponding to difficulty level */
  points?: number;
}

export const PlayingCard = ({
  content,
  color,
  prompt,
  options,
  points,
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
        {points != null && (
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-sm font-medium text-white/80">
              Points: {points}
            </span>
          </div>
        )}
      </Card>
    </motion.div>
  );
};
