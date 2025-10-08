import { FileUploader } from "@/components/FileUploader";
import { HowToUse } from "@/components/HowToUse";
import { WhyUse } from "@/components/WhyUse";
import { FAQ } from "@/components/FAQ";
import { MoreTools } from "@/components/MoreTools";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-secondary/50 to-background">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Free Online PDF Converter
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Transform any document to PDF instantly with our free image to PDF converter
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Convert Word, Excel, PowerPoint, images and more to PDF format. 
              The best online PDF converter tool - 100% free and secure.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FileUploader />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Supported formats: DOC, DOCX, XLS, XLSX, PPT, PPTX, JPG, PNG, GIF, WEBP and more
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <HowToUse />

      {/* Why Use Section */}
      <WhyUse />

      {/* More Tools Section */}
      <MoreTools />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
