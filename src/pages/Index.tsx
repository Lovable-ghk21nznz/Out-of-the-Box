import { useNavigate } from "react-router-dom";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";
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
            Party Games 🎉
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose your vibe and let the fun begin
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-5">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              onClick={() => navigate(`/category/${category.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
