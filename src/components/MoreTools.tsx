import { FileText, Combine, Lock, Scissors } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MoreTools = () => {
  const tools = [
    {
      icon: <Combine className="h-8 w-8" />,
      title: "Merge PDF",
      description: "Combine multiple PDF files into one document"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Split PDF",
      description: "Extract pages from your PDF files"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Protect PDF",
      description: "Add password protection to your PDFs"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "PDF to Word",
      description: "Convert PDF files back to editable Word documents"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          More Tools Like This
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Explore our complete suite of PDF tools to manage your documents
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 border-primary/20 group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary mb-4 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground transition-all">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
              <Button variant="outline" size="sm" className="w-full">
                Try Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
