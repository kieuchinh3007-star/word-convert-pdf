export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">PDF Converter</h3>
            <p className="text-sm text-muted-foreground">
              The best free online PDF converter tool for all your document needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Converter Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Image to PDF</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Word to PDF</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Excel to PDF</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">PPT to PDF</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">PDF Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Merge PDF</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Split PDF</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Compress PDF</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Protect PDF</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 PDF Converter. All rights reserved. Free online PDF converter tool.</p>
        </div>
      </div>
    </footer>
  );
};
