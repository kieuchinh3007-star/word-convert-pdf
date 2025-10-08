import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Is this PDF converter really free?",
      answer: "Yes! Our online PDF converter is completely free to use. You can convert unlimited files to PDF without any cost or registration."
    },
    {
      question: "What file formats can I convert to PDF?",
      answer: "Our document to PDF converter supports Word (DOC, DOCX), Excel (XLS, XLSX), PowerPoint (PPT, PPTX), images (JPG, PNG, GIF, WEBP), and many more formats."
    },
    {
      question: "Is my file secure when using this converter?",
      answer: "Absolutely! We use SSL encryption to protect your files during upload and conversion. All files are automatically deleted from our servers after conversion."
    },
    {
      question: "How long does it take to convert a file to PDF?",
      answer: "Most conversions complete within seconds. The exact time depends on your file size and format, but our free PDF converter is optimized for speed."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation needed! Our online PDF converter works directly in your browser. Just upload, convert, and download your PDF file."
    },
    {
      question: "Can I use this image to PDF converter on my phone?",
      answer: "Yes! Our converter is fully responsive and works perfectly on smartphones, tablets, and desktop computers."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Everything you need to know about our free online PDF converter
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
