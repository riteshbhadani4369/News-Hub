import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import techImage from "@/assets/tech-news.jpg";
import businessImage from "@/assets/business-news.jpg";
import healthImage from "@/assets/health-news.jpg";

// Mock data - in a real app this would come from an API
const articles = {
  "1": {
    id: "1",
    title: "Quantum Computing Breakthrough Could Revolutionize Cryptography",
    excerpt: "Scientists at leading research institutions have achieved a significant milestone in quantum computing, potentially changing how we approach data security and encryption in the digital age.",
    content: `
      <p>In a groundbreaking development that could reshape the future of digital security, researchers at MIT and Stanford University have announced a major breakthrough in quantum computing technology. This advancement brings us significantly closer to practical quantum computers capable of breaking current encryption methods while simultaneously offering new, more secure alternatives.</p>

      <h2>The Breakthrough</h2>
      <p>The research team, led by Dr. Michael Chen, has successfully demonstrated a 100-qubit quantum processor that maintains quantum coherence for over 10 minutes - a dramatic improvement from previous records of just seconds. This stability is crucial for performing complex calculations that could render current cryptographic systems obsolete.</p>

      <p>"What we've achieved here represents a quantum leap in our ability to harness the power of quantum mechanics for computational purposes," explained Dr. Chen during a press conference at MIT. "This isn't just an incremental improvement; it's a fundamental breakthrough that brings practical quantum computing within reach."</p>

      <h2>Implications for Cybersecurity</h2>
      <p>The implications of this breakthrough extend far beyond academic research. Current encryption methods, including the RSA algorithm that secures everything from online banking to government communications, rely on the mathematical difficulty of factoring large numbers. Quantum computers could potentially solve these problems in minutes rather than the millions of years required by classical computers.</p>

      <p>However, the same quantum principles that threaten current encryption also offer solutions. Quantum cryptography, which relies on the fundamental laws of physics rather than mathematical complexity, could provide unprecedented security for future communications.</p>

      <h2>Industry Response</h2>
      <p>Major technology companies and government agencies are already responding to this development. The National Institute of Standards and Technology (NIST) has accelerated its timeline for post-quantum cryptography standards, while companies like IBM, Google, and Microsoft are increasing their investments in quantum-resistant security measures.</p>

      <p>"This breakthrough validates our long-term investment in quantum research," said a spokesperson from IBM Quantum. "We're now entering a new era where the quantum advantage becomes a reality rather than a theoretical possibility."</p>

      <h2>Looking Forward</h2>
      <p>While this breakthrough is significant, researchers caution that practical quantum computers are still years away from widespread deployment. The current system requires extremely controlled conditions, including temperatures colder than outer space and isolation from electromagnetic interference.</p>

      <p>Nevertheless, the progress represents a crucial step toward a future where quantum computing transforms not just cryptography, but fields ranging from drug discovery to artificial intelligence. As Dr. Chen noted, "We're not just changing how we compute; we're changing what's possible to compute."</p>
    `,
    category: "Technology",
    author: "Dr. Michael Chen",
    publishedAt: "4 hours ago",
    readTime: "8 min read",
    imageUrl: techImage,
    tags: ["Quantum Computing", "Cryptography", "Technology", "Security", "Research"]
  },
  "2": {
    id: "2",
    title: "Global Markets Rally on Positive Economic Indicators",
    excerpt: "Stock markets worldwide showed strong performance following the release of encouraging economic data, signaling potential recovery in key sectors.",
    content: `
      <p>Global financial markets experienced a significant upswing yesterday as a series of positive economic indicators painted an optimistic picture of worldwide economic recovery. The rally, which began in Asian markets and spread across Europe and the Americas, saw major indices posting their largest single-day gains in months.</p>

      <h2>Key Economic Data</h2>
      <p>The market surge was triggered by several encouraging economic reports released simultaneously across major economies. In the United States, unemployment figures dropped to 3.7%, the lowest level seen in over two years. Meanwhile, the European Union reported a 2.3% increase in industrial production, exceeding economists' expectations by a significant margin.</p>

      <p>China's manufacturing PMI also beat forecasts, reaching 52.1 and indicating continued expansion in the world's second-largest economy. These data points collectively suggest that the global economy is gaining momentum after a period of uncertainty.</p>

      <h2>Market Performance</h2>
      <p>The positive sentiment translated into substantial gains across major stock indices. The S&P 500 closed up 2.8%, while the Dow Jones Industrial Average gained 3.1%. European markets were equally buoyant, with the FTSE 100 rising 2.5% and the DAX increasing by 3.2%.</p>

      <p>Technology stocks led the rally, with major companies like Apple, Microsoft, and Google parent Alphabet seeing gains of 4-6%. Financial sector stocks also performed strongly as investors anticipated potential interest rate changes that could benefit banks' lending margins.</p>

      <h2>Analyst Perspectives</h2>
      <p>"What we're seeing is a confluence of positive factors that suggest the global economy is entering a more stable growth phase," commented Amanda Rodriguez, chief economist at Global Financial Insights. "The combination of employment growth, industrial expansion, and controlled inflation creates an ideal environment for sustained market growth."</p>

      <p>However, some analysts urge caution, noting that market volatility remains a concern amid ongoing geopolitical tensions and supply chain challenges that continue to affect various industries.</p>

      <h2>Looking Ahead</h2>
      <p>Investors will be closely watching upcoming Federal Reserve communications and earnings reports from major corporations to gauge whether this positive momentum can be sustained. The next few weeks will be crucial in determining whether this rally represents the beginning of a sustained bull market or merely a temporary correction.</p>

      <p>Currency markets also responded positively, with the dollar strengthening against most major currencies. Commodity prices showed mixed results, with gold declining slightly as investors moved toward riskier assets, while oil prices rose on expectations of increased economic activity.</p>
    `,
    category: "Business",
    author: "Amanda Rodriguez",
    publishedAt: "6 hours ago",
    readTime: "6 min read",
    imageUrl: businessImage,
    tags: ["Stock Market", "Economy", "Finance", "Investment", "Global Markets"]
  },
  "3": {
    id: "3",
    title: "New Treatment Shows Promise for Rare Genetic Disorders",
    excerpt: "Clinical trials reveal encouraging results for a novel gene therapy approach that could help patients with previously untreatable conditions.",
    content: `
      <p>A revolutionary gene therapy treatment has shown remarkable promise in treating rare genetic disorders that have long been considered untreatable. The breakthrough, published in the New England Journal of Medicine, represents a significant advancement in precision medicine and offers hope to millions of patients worldwide.</p>

      <h2>The Clinical Trial</h2>
      <p>The phase III clinical trial, conducted across 15 medical centers in North America and Europe, involved 180 patients with various rare genetic conditions. The treatment uses a novel CRISPR-Cas9 gene editing approach to correct defective genes directly within patients' cells.</p>

      <p>Dr. Sarah Thompson, the study's lead investigator, reported that 85% of patients showed significant improvement in their symptoms within six months of treatment. "These results exceed our most optimistic projections," Dr. Thompson stated. "We're seeing functional improvements that translate to real quality-of-life benefits for our patients."</p>

      <h2>How the Treatment Works</h2>
      <p>The therapy involves extracting specific cells from patients, editing their genetic code in the laboratory to correct mutations, and then reintroducing the corrected cells back into the patient. Unlike traditional treatments that manage symptoms, this approach addresses the root cause of genetic disorders.</p>

      <p>The process utilizes advanced delivery mechanisms to ensure the edited genes reach their target tissues effectively. Researchers have developed specialized viral vectors that can navigate to specific organs while avoiding immune system detection.</p>

      <h2>Patient Success Stories</h2>
      <p>Among the trial participants, 12-year-old Emma Rodriguez from Phoenix has experienced dramatic improvements. Born with a rare metabolic disorder that caused severe developmental delays, Emma has shown remarkable progress in cognitive function and physical development following the treatment.</p>

      <p>"Six months ago, Emma could barely speak in full sentences," her mother explained. "Today, she's reading at grade level and participating in activities we never thought would be possible. It's like we have our daughter back."</p>

      <h2>Safety and Side Effects</h2>
      <p>Safety monitoring revealed minimal adverse effects, with most patients experiencing only mild, temporary side effects similar to those seen with conventional therapies. The treatment's safety profile represents a significant advantage over previous gene therapy attempts that were associated with serious complications.</p>

      <p>Long-term follow-up studies are ongoing to ensure the therapy's continued safety and effectiveness. Initial data suggests that the genetic corrections remain stable over time, indicating potentially permanent therapeutic benefits.</p>

      <h2>Regulatory Pathway</h2>
      <p>The research team is preparing to submit their findings to the FDA for accelerated approval consideration. Given the urgent medical need for these rare disease treatments and the strong clinical results, regulatory approval could come within the next 12-18 months.</p>

      <p>If approved, this therapy could become the first broadly applicable gene editing treatment for rare genetic disorders, potentially helping thousands of patients who currently have no treatment options.</p>
    `,
    category: "Health",
    author: "Dr. Sarah Thompson",
    publishedAt: "8 hours ago",
    readTime: "7 min read",
    imageUrl: healthImage,
    tags: ["Gene Therapy", "Medical Research", "Healthcare", "CRISPR", "Rare Diseases"]
  }
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? articles[id as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-news-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Article Header */}
          <article className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-news-primary text-white hover:bg-news-primary/90">
                {article.category}
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between py-4 border-y border-border">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{article.author}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.publishedAt}
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>

            {/* Article Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="text-foreground leading-relaxed space-y-6"
              />
            </div>

            {/* Tags */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;