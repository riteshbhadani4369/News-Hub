import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

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
                <a
                  key={category}
                  href="#"
                  className="block text-muted-foreground hover:text-news-primary transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2">
              {["About Us", "Contact", "Careers", "Privacy Policy", "Terms of Service", "Advertise"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-muted-foreground hover:text-news-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for daily news updates.
            </p>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Input placeholder="Your email" type="email" />
                <Button size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 NewsHub. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-news-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-news-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-news-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};