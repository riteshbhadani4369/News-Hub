import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  { id: "all", label: "All News" },
  { id: "technology", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "health", label: "Health" },
  { id: "sports", label: "Sports" },
  { id: "entertainment", label: "Entertainment" },
];

export const CategoryTabs = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleClick = (id) => {
    setActiveCategory(id);
    onCategoryChange?.(id); // send value to parent
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-1 min-w-max px-4 md:px-0 md:justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "ghost"}
            onClick={() => handleClick(category.id)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap hover-scale ${
              activeCategory === category.id
                ? "bg-news-primary text-white shadow-lg"
                : "text-news-text hover:text-news-primary hover:bg-news-primary/10"
            }`}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
