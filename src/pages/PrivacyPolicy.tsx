import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p className="text-foreground leading-relaxed">
                  At NewsHub, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Information We Collect</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                  <p className="text-foreground leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-foreground space-y-2">
                    <li>Name and contact information</li>
                    <li>Email address for newsletter subscriptions</li>
                    <li>Account preferences and settings</li>
                    <li>Comments and feedback</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Automatically Collected Information</h3>
                  <p className="text-foreground leading-relaxed">
                    When you visit our website, we automatically collect certain information:
                  </p>
                  <ul className="list-disc list-inside text-foreground space-y-2">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address and location data</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring websites</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                <p className="text-foreground leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Personalizing your experience</li>
                  <li>Sending newsletters and updates (with your consent)</li>
                  <li>Analyzing usage patterns to improve our website</li>
                  <li>Responding to your inquiries and customer support needs</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Information Sharing and Disclosure</h2>
                <p className="text-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>In connection with a business transaction</li>
                  <li>With trusted service providers who assist in operating our website</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Data Security</h2>
                <p className="text-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Cookies and Tracking Technologies</h2>
                <p className="text-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. 
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Your Rights</h2>
                <p className="text-foreground leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Changes to This Policy</h2>
                <p className="text-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page 
                  and updating the "Last updated" date at the top of this policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="text-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="text-foreground space-y-2">
                  <p>Email: privacy@newshub.com</p>
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

export default PrivacyPolicy;