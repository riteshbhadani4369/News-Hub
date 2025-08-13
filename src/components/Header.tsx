import { Search, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-news-primary to-news-accent bg-clip-text text-transparent">
              NewsHub
            </h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors">
              Technology
            </a>
            <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors">
              Business
            </a>
            <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors">
              Health
            </a>
            <a href="#" className="text-sm font-medium hover:text-news-primary transition-colors">
              Sports
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search news..."
                className="w-[200px] lg:w-[300px] pl-10"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button size="sm" className="hidden sm:inline-flex">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};