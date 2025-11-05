import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { GameCard } from "@/components/GameCard";
import { categories, games } from "@/data/categories";
import { motion } from "framer-motion";

const CategoryGames = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  const categoryGames = games.filter(g => g.categoryId === categoryId);

  if (!category) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 text-foreground hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{category.emoji}</span>
            <h1 className="text-3xl font-bold text-foreground">{category.name}</h1>
          </div>
          <p className="text-muted-foreground">{category.description}</p>
        </motion.div>

        <div className="space-y-3">
          {categoryGames.map((game, index) => (
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

export default CategoryGames;
