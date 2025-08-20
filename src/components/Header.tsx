import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-news-primary to-news-accent bg-clip-text text-transparent">
                NewsHub
              </h1>
            </Link>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-news-primary transition-colors">
              Home
            </Link>
            <Link to="/section/technology" className="text-sm font-medium hover:text-news-primary transition-colors">
              Technology
            </Link>
            <Link to="/section/business" className="text-sm font-medium hover:text-news-primary transition-colors">
              Business
            </Link>
            <Link to="/section/health" className="text-sm font-medium hover:text-news-primary transition-colors">
              Health
            </Link>
            <Link to="/section/sports" className="text-sm font-medium hover:text-news-primary transition-colors">
              Sports
            </Link>
            <Link to="/section/entertainment" className="text-sm font-medium hover:text-news-primary transition-colors">
              Entertainment
            </Link>
            <Link to="/section/politics" className="text-sm font-medium hover:text-news-primary transition-colors">
              Politics
            </Link>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search news..."
                className="w-[200px] lg:w-[300px] pl-10"
              />
            </div>
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