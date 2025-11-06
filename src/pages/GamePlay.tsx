import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PlayingCard } from "@/components/PlayingCard";
import { games } from "@/data/categories";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

// Import all card data
import truthOrDareData from "@/data/games/dating/truth-or-dare.json";
import neverHaveIData from "@/data/games/dating/never-have-i.json";
import buzzedData from "@/data/games/drinking/buzzed.json";
import truthOrDrinkData from "@/data/games/drinking/truth-or-drink.json";
import wouldYouRatherData from "@/data/games/get-to-know/would-you-rather.json";
import deepTalkData from "@/data/games/get-to-know/deep-talk.json";
import pictionaryAdultData from "@/data/games/drawing/pictionary-adult.json";
import pickYourPoisonData from "@/data/games/choice/pick-your-poison.json";

// Map game IDs to their card data
const gameCardData: Record<string, { cards: string[] }> = {
  'truth-or-dare-dating': truthOrDareData,
  'never-have-i-dating': neverHaveIData,
  'buzzed': buzzedData,
  'truth-or-drink': truthOrDrinkData,
  'would-you-rather': wouldYouRatherData,
  'deep-talk': deepTalkData,
  'pictionary-adult': pictionaryAdultData,
  'pick-your-poison': pickYourPoisonData,
};

const GamePlay = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [cards, setCards] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

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

  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  if (!game) {
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
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-1">{game.name}</h1>
            <p className="text-sm text-muted-foreground">Card {currentIndex + 1} of {cards.length}</p>
          </div>
        </motion.div>

        {!isLoading && cards.length > 0 && (
          <Carousel
            setApi={setCarouselApi}
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {gameId === 'pick-your-poison' ? (
                // Show pairs of cards for Pick Your Poison
                cards.reduce((acc, card, index) => {
                  if (index % 2 === 0) {
                    acc.push(
                      <CarouselItem key={index}>
                        <div className="grid grid-cols-2 gap-3">
                          <PlayingCard 
                            content={card}
                            color={game.color}
                          />
                          {cards[index + 1] && (
                            <PlayingCard 
                              content={cards[index + 1]}
                              color={game.color}
                            />
                          )}
                        </div>
                      </CarouselItem>
                    );
                  }
                  return acc;
                }, [] as JSX.Element[])
              ) : (
                // Show single cards for other games
                cards.map((card, index) => (
                  <CarouselItem key={index}>
                    <PlayingCard 
                      content={card}
                      color={game.color}
                    />
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default GamePlay;
