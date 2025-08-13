import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ArticleCard } from "@/components/ArticleCard";
import { TrendingSidebar } from "@/components/TrendingSidebar";
import { Footer } from "@/components/Footer";
import techImage from "@/assets/tech-news.jpg";
import businessImage from "@/assets/business-news.jpg";
import healthImage from "@/assets/health-news.jpg";

const featuredArticles = [
  {
    title: "Quantum Computing Breakthrough Could Revolutionize Cryptography",
    excerpt: "Scientists at leading research institutions have achieved a significant milestone in quantum computing, potentially changing how we approach data security and encryption in the digital age.",
    category: "Technology",
    author: "Dr. Michael Chen",
    publishedAt: "4 hours ago",
    imageUrl: techImage,
    featured: true
  },
  {
    title: "Global Markets Rally on Positive Economic Indicators",
    excerpt: "Stock markets worldwide showed strong performance following the release of encouraging economic data, signaling potential recovery in key sectors.",
    category: "Business",
    author: "Amanda Rodriguez",
    publishedAt: "6 hours ago",
    imageUrl: businessImage
  },
  {
    title: "New Treatment Shows Promise for Rare Genetic Disorders",
    excerpt: "Clinical trials reveal encouraging results for a novel gene therapy approach that could help patients with previously untreatable conditions.",
    category: "Health",
    author: "Dr. Sarah Thompson",
    publishedAt: "8 hours ago",
    imageUrl: healthImage
  },
  {
    title: "Sustainable Energy Initiative Launches in Major Cities",
    excerpt: "A comprehensive renewable energy program begins implementation across metropolitan areas, aiming to reduce carbon emissions by 40% within five years.",
    category: "Environment",
    author: "James Wilson",
    publishedAt: "10 hours ago",
    imageUrl: techImage
  },
  {
    title: "Archaeological Discovery Sheds Light on Ancient Civilization",
    excerpt: "Recent excavations have uncovered artifacts that provide new insights into a previously unknown culture that flourished thousands of years ago.",
    category: "Science",
    author: "Prof. Elena Vasquez",
    publishedAt: "12 hours ago",
    imageUrl: healthImage
  },
  {
    title: "International Space Station Welcomes New Research Module",
    excerpt: "The latest addition to the ISS will enable groundbreaking experiments in microgravity, opening new possibilities for scientific research.",
    category: "Space",
    author: "Captain Alex Foster",
    publishedAt: "1 day ago",
    imageUrl: businessImage
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        {/* Category Navigation */}
        <div className="mb-12">
          <CategoryTabs />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TrendingSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
