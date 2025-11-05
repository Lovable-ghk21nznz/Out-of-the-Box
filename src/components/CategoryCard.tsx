import { Card } from "@/components/ui/card";
import { Category } from "@/data/categories";
import { motion } from "framer-motion";

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  index: number;
}

export const CategoryCard = ({ category, onClick, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card 
        className="relative overflow-hidden cursor-pointer border-0 h-32 transition-shadow hover:shadow-elevated"
        onClick={onClick}
        style={{ background: category.gradient }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="relative h-full flex flex-col justify-between p-6 text-white">
          <div className="text-4xl">{category.emoji}</div>
          <div>
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm text-white/90">{category.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
