import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Documents?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Start converting your files to PDF now with our free online converter tool
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-8 py-6 h-auto font-medium hover:scale-105 transition-transform"
          onClick={scrollToTop}
        >
          Convert File to PDF Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="mt-6 text-sm opacity-75">
          No registration required • Completely free • Instant conversion
        </p>
      </div>
    </section>
  );
};
