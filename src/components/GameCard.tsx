import { Card } from "@/components/ui/card";
import { Game } from "@/data/categories";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <div className="flex items-center gap-4 p-5">
          <span className="text-3xl">{game.emoji}</span>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{game.name}</h3>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <HelpCircle className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" className="max-w-xs">
                <p className="text-sm">{game.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{game.cardCount} cards</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
    </motion.div>
  );
};
