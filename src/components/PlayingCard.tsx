import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PlayingCardProps {
  content: string;
  color: string;
}

export const PlayingCard = ({ content, color }: PlayingCardProps) => {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full max-w-sm mx-auto"
    >
      <Card 
        className="relative overflow-hidden border-0 shadow-elevated"
        style={{ background: color, minHeight: '400px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="relative h-full flex items-center justify-center p-8">
          <p className="text-xl md:text-2xl font-medium text-white text-center leading-relaxed">
            {content}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};
