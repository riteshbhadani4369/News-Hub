import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-news-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Agreement to Terms</h2>
                <p className="text-foreground leading-relaxed">
                  By accessing and using NewsHub's website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Use License</h2>
                <p className="text-foreground leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on NewsHub's website for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Content and Accuracy</h2>
                <p className="text-foreground leading-relaxed">
                  NewsHub strives to provide accurate and up-to-date information. However, we make no warranties about the completeness, reliability, 
                  and accuracy of this information. Any action you take based on the information found on this website is strictly at your own risk.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">User-Generated Content</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Comments and Contributions</h3>
                  <p className="text-foreground leading-relaxed">
                    By posting comments or other content on our website, you grant NewsHub a non-exclusive, royalty-free, perpetual license to use, 
                    modify, and distribute your content. You are responsible for ensuring your content:
                  </p>
                  <ul className="list-disc list-inside text-foreground space-y-2">
                    <li>Does not violate any laws or regulations</li>
                    <li>Is not defamatory, obscene, or offensive</li>
                    <li>Does not infringe on intellectual property rights</li>
                    <li>Is factually accurate to the best of your knowledge</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Prohibited Uses</h2>
                <p className="text-foreground leading-relaxed">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
                <p className="text-foreground leading-relaxed">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, 
                  trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such content or any part of the Site is prohibited.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Privacy Policy</h2>
                <p className="text-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Site, to understand our practices.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Disclaimer</h2>
                <p className="text-foreground leading-relaxed">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, NewsHub excludes all representations, 
                  warranties, conditions, and terms whether express, implied, statutory, or otherwise.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Limitations of Liability</h2>
                <p className="text-foreground leading-relaxed">
                  In no event shall NewsHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                  or due to business interruption) arising out of the use or inability to use the materials on NewsHub's website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Governing Law</h2>
                <p className="text-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which NewsHub operates, 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Changes to Terms</h2>
                <p className="text-foreground leading-relaxed">
                  NewsHub reserves the right to revise these terms of service at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="text-foreground space-y-2">
                  <p>Email: legal@newshub.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 News Street, Media City, MC 12345</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;