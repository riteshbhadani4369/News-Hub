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
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
          {/* Content Side */}
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
            <div className="flex gap-4 items-center">
              {currentItem.isBreaking && (
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-news-accent text-white text-sm font-semibold animate-pulse shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  BREAKING NEWS
                </div>
              )}
              <span className="inline-block px-4 py-2 bg-news-primary text-white text-sm font-medium rounded-full shadow-sm">
                {currentItem.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight line-clamp-2">
              {currentItem.title}
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl line-clamp-4">
              {currentItem.excerpt}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={`/article/${currentItem.id}`}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-news-primary hover:bg-news-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Read Full Story
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-2 border-news-primary text-news-primary hover:bg-news-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Share Article
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative lg:aspect-[4/3] aspect-[4/2] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                  {currentItem.category}
                </span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-news-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-news-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-foreground hover:bg-white/20 transition-all duration-300"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-foreground hover:bg-white/20 transition-all duration-300"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button> */}

      {/* Mobile Navigation Arrows */}
      {/* <div className="lg:hidden absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-2"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-2"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div> */}

      {/* Enhanced Dots Navigation */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-news-primary rounded-full' 
                  : 'w-3 h-3 bg-muted-foreground/50 hover:bg-muted-foreground/70 rounded-full hover:scale-110'
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-news-primary rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-muted/20">
        <div 
          className="h-full bg-news-primary transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentIndex + 1) / carouselItems.length) * 100}%`,
          }}
        ></div>
      </div> */}
    </section>
  );
};