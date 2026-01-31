import { Card } from "@/components/ui/card";
import { Game } from "@/data/categories";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface GameCardProps {
  game: Game;
  onClick: () => void;
  index: number;
}

export const GameCard = ({ game, onClick, index }: GameCardProps) => {
  const hasNoCards = game.cardCount === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={hasNoCards ? undefined : { scale: 1.01 }}
      whileTap={hasNoCards ? undefined : { scale: 0.99 }}
    >
      <Card
        className={
          hasNoCards
            ? "cursor-not-allowed border border-border opacity-60 bg-card"
            : "cursor-pointer border border-border hover:shadow-card transition-all bg-card"
        }
        onClick={hasNoCards ? undefined : onClick}
      >
        <div className="flex items-center gap-4 p-5">
          <span className="text-3xl">{game.emoji}</span>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{game.name}</h3>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <HelpCircle className="w-5 h-5" />
              </button>
            </PopoverTrigger>
            <PopoverContent side="left" className="max-w-xs">
              <p className="text-sm">{game.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{game.cardCount} cards</p>
            </PopoverContent>
          </Popover>
        </div>
      </Card>
    </motion.div>
  );
};
