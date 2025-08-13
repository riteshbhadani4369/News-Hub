import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-news.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-background to-secondary">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Badge variant="destructive" className="bg-news-primary hover:bg-news-primary/90">
                BREAKING
              </Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="h-4 w-4 mr-1" />
                2 hours ago
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Revolutionary AI Technology Transforms{" "}
              <span className="bg-gradient-to-r from-news-primary to-news-accent bg-clip-text text-transparent">
                Global Communications
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Industry experts predict unprecedented changes in how businesses and individuals 
              communicate as new artificial intelligence systems demonstrate remarkable capabilities 
              in understanding and generating human-like responses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Video
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                By <span className="font-medium">Sarah Johnson</span> • Technology Reporter
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Breaking news about AI technology"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};