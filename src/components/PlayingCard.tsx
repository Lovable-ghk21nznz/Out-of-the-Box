import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PlayingCardProps {
  content: string;
  color: string;
  secondContent?: string;
}

export const PlayingCard = ({ content, color, secondContent }: PlayingCardProps) => {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full max-w-sm mx-auto"
    >
      <Card 
        className="relative overflow-hidden border-0 shadow-elevated flex items-center justify-center"
        style={{ background: color, minHeight: '400px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="relative flex items-center justify-center p-8 w-full">
          {secondContent ? (
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              <p className="text-lg md:text-xl font-medium text-white text-center leading-relaxed">
                {content}
              </p>
              <div className="text-2xl md:text-3xl font-bold text-white/90">VS</div>
              <p className="text-lg md:text-xl font-medium text-white text-center leading-relaxed">
                {secondContent}
              </p>
            </div>
          ) : (
            <p className="text-xl md:text-2xl font-medium text-white text-center leading-relaxed">
              {content}
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
