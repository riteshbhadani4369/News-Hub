import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-news-primary to-news-accent bg-clip-text text-transparent">
              NewsHub
            </h3>
            <p className="text-muted-foreground">
              Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of global events.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <div className="space-y-2">
              {["Technology", "Business", "Health", "Sports", "Entertainment", "Politics"].map((category) => (
                <Link to={`/section/${category?.toLowerCase()}`} className="block text-muted-foreground hover:text-news-primary transition-colors">
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2">
              <Link
                to="/privacy"
                className="block text-muted-foreground hover:text-news-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block text-muted-foreground hover:text-news-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Email: news@newshub.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 News Street, Media City, MC 12345</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 NewsHub. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-news-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-news-primary transition-colors">
              Terms
            </Link>
            <a href="#" className="text-muted-foreground hover:text-news-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};