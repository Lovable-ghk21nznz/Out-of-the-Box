import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { PlayingCard } from "@/components/PlayingCard";
import { games } from "@/data/categories";
import { motion } from "framer-motion";

// Import all card data
import truthOrDareData from "@/data/games/dating/truth-or-dare.json";
import neverHaveIData from "@/data/games/dating/never-have-i.json";
import buzzedData from "@/data/games/drinking/buzzed.json";
import truthOrDrinkData from "@/data/games/drinking/truth-or-drink.json";
import wouldYouRatherData from "@/data/games/get-to-know/would-you-rather.json";
import deepTalkData from "@/data/games/get-to-know/deep-talk.json";

// Map game IDs to their card data
const gameCardData: Record<string, { cards: string[] }> = {
  'truth-or-dare-dating': truthOrDareData,
  'never-have-i-dating': neverHaveIData,
  'buzzed': buzzedData,
  'truth-or-drink': truthOrDrinkData,
  'would-you-rather': wouldYouRatherData,
  'deep-talk': deepTalkData,
};

const GamePlay = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [cards, setCards] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const game = games.find(g => g.id === gameId);

  useEffect(() => {
    const loadCards = () => {
      if (!game || !gameId) return;
      
      try {
        const cardData = gameCardData[gameId];
        if (!cardData) {
          throw new Error(`No card data found for game: ${gameId}`);
        }
        
        const shuffled = [...cardData.cards].sort(() => Math.random() - 0.5);
        setCards(shuffled);
      } catch (error) {
        console.error('Error loading cards:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCards();
  }, [game, gameId]);

  if (!game) {
    navigate('/');
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
  };

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
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">{game.name}</h1>
              <p className="text-sm text-muted-foreground">Card {currentIndex + 1} of {cards.length}</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleShuffle}
              className="border-border hover:bg-muted"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {!isLoading && cards.length > 0 && (
          <>
            <div className="mb-6">
              <PlayingCard 
                content={cards[currentIndex]}
                gradient={game.gradient}
              />
            </div>

            <Button
              onClick={handleNext}
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Next Card
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default GamePlay;
