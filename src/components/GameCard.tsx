import { Card } from "@/components/ui/card";
import { Game } from "@/data/categories";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface GameCardProps {
  game: Game;
  onClick: () => void;
  index: number;
}

export const GameCard = ({ game, onClick, index }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Card 
        className="cursor-pointer border border-border hover:shadow-card transition-all bg-card"
        onClick={onClick}
      >
        <div className="flex items-center justify-between p-5">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">{game.name}</h3>
            <p className="text-sm text-muted-foreground">{game.description}</p>
            <p className="text-xs text-muted-foreground mt-2">{game.cardCount} cards</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground ml-4" />
        </div>
      </Card>
    </motion.div>
  );
};
