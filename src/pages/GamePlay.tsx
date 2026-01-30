import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { PlayingCard } from "@/components/PlayingCard";
import { games } from "@/data/categories";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Import all card data
import brandystormData from "@/data/games/brandystorm/brandystorm.json";
import loveOnTheRocksData from "@/data/games/love-on-the-rocks/love-on-the-rocks.json";
import rumAndReflectionData from "@/data/games/rum-and-reflection/rum-and-reflection.json";
import tequilaAndTaboosData from "@/data/games/tequila-and-taboos/tequila-and-taboos.json";
import shotsFiredData from "@/data/games/shots-fired/shots-fired.json";
import champagneAndPlotTwistsData from "@/data/games/champagne-and-plot-twists/champagne-and-plot-twists.json";
import boozeRouletteData from "@/data/games/booze-roulette/booze-roulette.json";
import tipsyDoodlesData from "@/data/games/tipsy-doodles/tipsy-doodles.json";
import truthAndTonicData from "@/data/games/truth-and-tonic/truth-and-tonic.json";
import beerOrBourbonData from "@/data/games/beer-or-bourbon/beer-or-bourbon.json";

interface Card {
  text: string;
  difficulty: number;
}

// Map game IDs to their card data
const gameCardData: Record<string, { cards: Card[] }> = {
  "brandystorm": brandystormData,
  "love-on-the-rocks": loveOnTheRocksData,
  "rum-and-reflection": rumAndReflectionData,
  "tequila-and-taboos": tequilaAndTaboosData,
  "shots-fired": shotsFiredData,
  "champagne-and-plot-twists": champagneAndPlotTwistsData,
  "booze-roulette": boozeRouletteData,
  "tipsy-doodles": tipsyDoodlesData,
  "truth-and-tonic": truthAndTonicData,
  "beer-or-bourbon": beerOrBourbonData,
};

const difficultyLabels: Record<number, string> = {
  1: "Level 1",
  2: "Level 2",
  3: "Level 3",
};

const GamePlay = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedLevels, setSelectedLevels] = useState<Set<number>>(new Set([1, 2, 3]));

  const game = games.find((g) => g.id === gameId);

  const filteredCards = useMemo(() => {
    return allCards.filter((card) => selectedLevels.has(card.difficulty));
  }, [allCards, selectedLevels]);

  useEffect(() => {
    const loadCards = () => {
      if (!game || !gameId) return;

      try {
        const cardData = gameCardData[gameId];
        if (!cardData)
          throw new Error(`No card data found for game: ${gameId}`);

        const shuffled = [...cardData.cards].sort(() => Math.random() - 0.5);
        setAllCards(shuffled);
      } catch (error) {
        console.error("Error loading cards:", error);
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

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(0);
      setCurrentIndex(0);
    }
  }, [selectedLevels, carouselApi]);

  const toggleLevel = (level: number) => {
    setSelectedLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) {
        if (next.size > 1) {
          next.delete(level);
        }
      } else {
        next.add(level);
      }
      return next;
    });
  };

  if (!game) {
    navigate("/");
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
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-foreground hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  Level
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {[1, 2, 3].map((level) => (
                  <DropdownMenuCheckboxItem
                    key={level}
                    checked={selectedLevels.has(level)}
                    onCheckedChange={() => toggleLevel(level)}
                  >
                    {difficultyLabels[level]}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-1">
              {game.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              Card {filteredCards.length > 0 ? currentIndex + 1 : 0} of {filteredCards.length}
            </p>
          </div>
        </motion.div>

        {!isLoading && filteredCards.length > 0 && (
          <Carousel
            setApi={setCarouselApi}
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {gameId === "booze-roulette"
                ? // Show pairs of options on single card for Booze Roulette
                  filteredCards.reduce((acc, card, index) => {
                    if (index % 2 === 0) {
                      acc.push(
                        <CarouselItem key={index}>
                          <PlayingCard
                            content={card.text}
                            secondContent={filteredCards[index + 1]?.text}
                            color={game.color}
                          />
                        </CarouselItem>
                      );
                    }
                    return acc;
                  }, [] as JSX.Element[])
                : // Show single cards for other games
                  filteredCards.map((card, index) => (
                    <CarouselItem key={index}>
                      <PlayingCard content={card.text} color={game.color} />
                    </CarouselItem>
                  ))}
            </CarouselContent>
          </Carousel>
        )}

        {!isLoading && filteredCards.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No cards match the selected levels
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePlay;
