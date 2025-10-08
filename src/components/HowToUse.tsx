import { Upload, Settings, Download } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HowToUse = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10" />,
      title: "Upload Your File",
      description: "Select or drag and drop your document, image, or spreadsheet file"
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Automatic Conversion",
      description: "Our online PDF converter will process your file instantly"
    },
    {
      icon: <Download className="h-10 w-10" />,
      title: "Download PDF",
      description: "Get your converted PDF file ready to use immediately"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How to Use Our Free PDF Converter
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transform any document to PDF in three simple steps with our free online converter
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 border-primary/20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground mb-6">
                {step.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-3">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
