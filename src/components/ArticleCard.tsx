import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  featured?: boolean;
}

export const ArticleCard = ({ 
  id,
  title, 
  excerpt, 
  category, 
  author, 
  publishedAt, 
  imageUrl, 
  featured = false 
}: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`} className="block">
      <Card className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-2xl transition-all duration-500 hover-scale animate-fade-in">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              featured ? 'h-[250px] md:h-[300px]' : 'h-[200px] md:h-[220px]'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <Badge 
              className="bg-news-primary/90 text-white backdrop-blur-sm hover-scale"
            >
              {category}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
          <h3 className={`font-bold leading-tight group-hover:text-news-primary transition-colors duration-300 ${
            featured ? 'text-lg md:text-xl' : 'text-base md:text-lg'
          }`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3 text-sm md:text-base">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
            <div className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
              <span className="font-medium">{author}</span>
              <span>•</span>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {publishedAt}
              </div>
            </div>
            
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-news-primary group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};