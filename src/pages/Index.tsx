import { useNavigate } from "react-router-dom";
import { GameCard } from "@/components/GameCard";
import { games } from "@/data/categories";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Sip Happens 🎉
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose your game and let the fun begin
          </p>
        </motion.div>

        <div className="space-y-3 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
          {games.map((game, index) => (
            <GameCard
              key={game.id}
              game={game}
              index={index}
              onClick={() => navigate(`/game/${game.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
