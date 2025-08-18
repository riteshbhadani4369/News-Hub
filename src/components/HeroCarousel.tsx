import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-news.jpg";
import techImage from "@/assets/tech-news.jpg";
import businessImage from "@/assets/business-news.jpg";
import healthImage from "@/assets/health-news.jpg";

const carouselItems = [
  {
    id: "1",
    title: "Quantum Computing Breakthrough Could Revolutionize Cryptography",
    excerpt: "Scientists at leading research institutions have achieved a significant milestone in quantum computing, potentially changing how we approach data security.",
    category: "Technology",
    imageUrl: heroImage,
    isBreaking: true
  },
  {
    id: "2", 
    title: "Global Markets Rally on Positive Economic Indicators",
    excerpt: "Stock markets worldwide showed strong performance following the release of encouraging economic data, signaling potential recovery.",
    category: "Business",
    imageUrl: businessImage,
    isBreaking: false
  },
  {
    id: "3",
    title: "New Treatment Shows Promise for Rare Genetic Disorders", 
    excerpt: "Clinical trials reveal encouraging results for a novel gene therapy approach that could help patients with previously untreatable conditions.",
    category: "Health",
    imageUrl: healthImage,
    isBreaking: false
  },
  {
    id: "4",
    title: "Sustainable Energy Initiative Launches in Major Cities",
    excerpt: "A comprehensive renewable energy program begins implementation across metropolitan areas, aiming to reduce carbon emissions.",
    category: "Technology", 
    imageUrl: techImage,
    isBreaking: false
  }
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-gradient-to-br from-news-dark to-news-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl animate-fade-in">
          {currentItem.isBreaking && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-news-accent text-white text-sm font-semibold mb-4 animate-pulse">
              🔴 BREAKING NEWS
            </div>
          )}
          <span className="inline-block px-3 py-1 bg-news-primary/80 text-white text-sm font-medium rounded-full mb-4">
            {currentItem.category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {currentItem.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in">
            {currentItem.excerpt}
          </p>
          <Link to={`/article/${currentItem.id}`}>
            <Button 
              size="lg" 
              className="bg-white text-news-primary hover:bg-gray-100 hover-scale animate-fade-in font-semibold"
            >
              Read Full Story
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 hover-scale"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 hover-scale"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};