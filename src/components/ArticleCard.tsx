import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  featured?: boolean;
}

export const ArticleCard = ({ 
  title, 
  excerpt, 
  category, 
  author, 
  publishedAt, 
  imageUrl, 
  featured = false 
}: ArticleCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-[250px]' : 'h-[200px]'
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge 
            variant="secondary" 
            className="bg-background/90 text-foreground hover:bg-background"
          >
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className={`font-bold leading-tight group-hover:text-news-primary transition-colors ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span className="font-medium">{author}</span>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {publishedAt}
            </div>
          </div>
          
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-news-primary group-hover:translate-x-1 transition-all" />
        </div>
      </CardContent>
    </Card>
  );
};