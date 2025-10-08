import { Shield, Zap, Globe, HardDrive } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhyUse = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Conversion",
      description: "Convert your files to PDF in seconds with our optimized conversion engine"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Secure & Private",
      description: "Your files are encrypted and automatically deleted after conversion"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Works Everywhere",
      description: "Access our free PDF converter from any device - desktop, tablet, or mobile"
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "No Installation Required",
      description: "Convert documents to PDF online without downloading any software"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Use Our Word to PDF Converter for Free?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The best free word to pdf converter tool with professional features
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-primary/20">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
