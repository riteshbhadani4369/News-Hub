import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ArticleCard } from "@/components/ArticleCard";
import { TrendingSidebar } from "@/components/TrendingSidebar";
import { Footer } from "@/components/Footer";
import { fetchLatestNews, fetchNewsByCategory, type NewsArticle } from "@/lib/newsService";
import techImage from "@/assets/tech-news.jpg";
import businessImage from "@/assets/business-news.jpg";
import healthImage from "@/assets/health-news.jpg";

const fallbackImage = techImage; // Default image if API doesn't provide one

const placeholderArticles = [
  {
    id: "1",
    title: "Quantum Computing Breakthrough Could Revolutionize Cryptography",
    excerpt: "Scientists at leading research institutions have achieved a significant milestone in quantum computing, potentially changing how we approach data security and encryption in the digital age.",
    category: "Technology",
    author: "Dr. Michael Chen",
    publishedAt: "4 hours ago",
    imageUrl: techImage,
    featured: true
  },
  {
    id: "2",
    title: "Global Markets Rally on Positive Economic Indicators",
    excerpt: "Stock markets worldwide showed strong performance following the release of encouraging economic data, signaling potential recovery in key sectors.",
    category: "Business",
    author: "Amanda Rodriguez",
    publishedAt: "6 hours ago",
    imageUrl: businessImage
  },
  {
    id: "3",
    title: "New Treatment Shows Promise for Rare Genetic Disorders",
    excerpt: "Clinical trials reveal encouraging results for a novel gene therapy approach that could help patients with previously untreatable conditions.",
    category: "Health",
    author: "Dr. Sarah Thompson",
    publishedAt: "8 hours ago",
    imageUrl: healthImage
  },
  {
    id: "4",
    title: "Sustainable Energy Initiative Launches in Major Cities",
    excerpt: "A comprehensive renewable energy program begins implementation across metropolitan areas, aiming to reduce carbon emissions by 40% within five years.",
    category: "Environment",
    author: "James Wilson",
    publishedAt: "10 hours ago",
    imageUrl: techImage
  },
  {
    id: "5",
    title: "Archaeological Discovery Sheds Light on Ancient Civilization",
    excerpt: "Recent excavations have uncovered artifacts that provide new insights into a previously unknown culture that flourished thousands of years ago.",
    category: "Science",
    author: "Prof. Elena Vasquez",
    publishedAt: "12 hours ago",
    imageUrl: healthImage
  },
  {
    id: "6",
    title: "International Space Station Welcomes New Research Module",
    excerpt: "The latest addition to the ISS will enable groundbreaking experiments in microgravity, opening new possibilities for scientific research.",
    category: "Space",
    author: "Captain Alex Foster",
    publishedAt: "1 day ago",
    imageUrl: businessImage
  }
];

const Index = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        let newsData;
        if (!category) {
          newsData = await fetchLatestNews();
        } else {
          newsData = await fetchNewsByCategory(category);
        }
        setArticles(newsData.results);
        setError(null);
      } catch (err) {
        setError('Failed to load news articles');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [category]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-news-text animate-fade-in">
              Latest News
            </h2>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 text-center p-4">{error}</div>
            ) : (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {articles.map((article, index) => (
                  <div 
                    key={article.article_id} 
                    className="animate-fade-in" 
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ArticleCard
                      id={article.article_id}
                      title={article.title}
                      excerpt={article.description || article.content}
                      category={article.category?.[0] || "News"}
                      author={article.source_name}
                      publishedAt={new Date(article.pubDate).toLocaleString()}
                      imageUrl={article.image_url || fallbackImage}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <TrendingSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
