import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";

const trendingArticles = [
  {
    title: "Climate Summit Reaches Historic Agreement",
    category: "Environment",
    readTime: "3 min read",
    rank: 1
  },
  {
    title: "Cryptocurrency Market Sees Major Shift",
    category: "Finance",
    readTime: "5 min read",
    rank: 2
  },
  {
    title: "Space Mission Discovers New Exoplanet",
    category: "Science",
    readTime: "4 min read",
    rank: 3
  },
  {
    title: "Tech Giants Announce New Partnership",
    category: "Technology",
    readTime: "2 min read",
    rank: 4
  },
  {
    title: "Olympic Games Set New Viewership Records",
    category: "Sports",
    readTime: "3 min read",
    rank: 5
  }
];

export const TrendingSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Trending Articles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <TrendingUp className="h-5 w-5 mr-2 text-news-primary" />
            Trending Now
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trendingArticles.map((article) => (
            <div
              key={article.rank}
              className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-news-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                {article.rank}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium leading-tight group-hover:text-news-primary transition-colors">
                  {article.title}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-news-primary transition-colors" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};