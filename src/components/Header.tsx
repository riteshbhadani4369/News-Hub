import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-news-primary to-news-accent bg-clip-text text-transparent">
                NewsHub
              </h1>
            </Link>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <Link to="/" className="text-xs lg:text-sm font-medium hover:text-news-primary transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link to="/section/technology" className="text-xs lg:text-sm font-medium hover:text-news-primary transition-colors whitespace-nowrap">
              Technology
            </Link>
            <Link to="/section/business" className="text-xs lg:text-sm font-medium hover:text-news-primary transition-colors whitespace-nowrap">
              Business
            </Link>
            <Link to="/section/health" className="text-xs lg:text-sm font-medium hover:text-news-primary transition-colors whitespace-nowrap">
              Health
            </Link>
            <Link to="/section/sports" className="text-xs lg:text-sm font-medium hover:text-news-primary transition-colors whitespace-nowrap">
              Sports
            </Link>
            <Link to="/section/entertainment" className="text-xs lg:text-sm font-medium hover:text-news-primary transition-colors whitespace-nowrap">
              Entertainment
            </Link>
            <Link to="/section/politics" className="text-xs lg:text-sm font-medium hover:text-news-primary transition-colors whitespace-nowrap">
              Politics
            </Link>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2 lg:left-3 top-1/2 h-3 w-3 lg:h-4 lg:w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search news..."
                className="w-[140px] md:w-[180px] lg:w-[240px] xl:w-[300px] pl-7 lg:pl-10 h-8 lg:h-10 text-xs lg:text-sm"
              />
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="sm:hidden h-8 w-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-news-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/section/technology" 
                className="text-sm font-medium hover:text-news-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                to="/section/business" 
                className="text-sm font-medium hover:text-news-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Business
              </Link>
              <Link 
                to="/section/health" 
                className="text-sm font-medium hover:text-news-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Health
              </Link>
              <Link 
                to="/section/sports" 
                className="text-sm font-medium hover:text-news-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sports
              </Link>
              <Link 
                to="/section/entertainment"
                className="text-sm font-medium hover:text-news-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Entertainment
              </Link>
              <Link 
                to="/section/politics" 
                className="text-sm font-medium hover:text-news-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Politics
              </Link>
              <div className="relative sm:hidden pt-2">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search news..."
                  className="w-full pl-10"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};