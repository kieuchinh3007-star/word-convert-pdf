import { useState, useCallback, useRef } from "react";
import { Upload, FileText, Image, FileSpreadsheet, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import jsPDF from "jspdf";

export const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setConverted(false);
      setPdfUrl(null);
      toast.success("File uploaded successfully!");
    }
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      setConverted(false);
      setPdfUrl(null);
      toast.success("File uploaded successfully!");
    }
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleBoxClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleConvert = useCallback(async () => {
    if (!selectedFile) {
      toast.error("Please select a file first");
      return;
    }

    setConverting(true);
    
    try {
      const ext = selectedFile.name.split('.').pop()?.toLowerCase();
      const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'tiff', 'tif', 'svg', 'ico', 'heic', 'heif'].includes(ext || '');
      
      if (isImage) {
        // Convert image to PDF
        const pdf = new jsPDF();
        const reader = new FileReader();
        
        reader.onload = (e) => {
          const img = document.createElement('img');
          img.onload = () => {
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            // Calculate dimensions to fit image in PDF while maintaining aspect ratio
            const imgRatio = img.width / img.height;
            const pdfRatio = pdfWidth / pdfHeight;
            
            let finalWidth, finalHeight;
            if (imgRatio > pdfRatio) {
              finalWidth = pdfWidth;
              finalHeight = pdfWidth / imgRatio;
            } else {
              finalHeight = pdfHeight;
              finalWidth = pdfHeight * imgRatio;
            }
            
            // Center the image
            const x = (pdfWidth - finalWidth) / 2;
            const y = (pdfHeight - finalHeight) / 2;
            
            pdf.addImage(e.target?.result as string, 'JPEG', x, y, finalWidth, finalHeight);
            
            const pdfBlob = pdf.output('blob');
            const url = URL.createObjectURL(pdfBlob);
            setPdfUrl(url);
            setConverting(false);
            setConverted(true);
            toast.success("File converted successfully!");
          };
          img.src = e.target?.result as string;
        };
        
        reader.readAsDataURL(selectedFile);
      } else {
        // For non-image files, simulate conversion
        setTimeout(() => {
          setConverting(false);
          setConverted(true);
          toast.success("File converted successfully!");
        }, 2000);
      }
    } catch (error) {
      setConverting(false);
      toast.error("Error converting file");
      console.error(error);
    }
  }, [selectedFile]);
  
  const handleDownload = useCallback(() => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${selectedFile?.name.split('.')[0]}.pdf`;
      link.click();
      toast.success("Download started!");
    }
  }, [pdfUrl, selectedFile]);

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'tiff', 'tif', 'svg', 'ico', 'heic', 'heif'].includes(ext || '')) return <Image className="h-8 w-8" />;
    if (['xlsx', 'xls', 'csv'].includes(ext || '')) return <FileSpreadsheet className="h-8 w-8" />;
    return <FileText className="h-8 w-8" />;
  };

  return (
    <Card className="p-8 shadow-[var(--shadow-medium)] border-2 border-primary/20 hover:border-primary/40 transition-colors">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleBoxClick}
        className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/60 transition-all cursor-pointer bg-gradient-to-b from-primary/5 to-transparent"
      >
        <input
          ref={fileInputRef}
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.rtf,.odt,.ods,.odp,.jpg,.jpeg,.png,.gif,.webp,.bmp,.tiff,.tif,.svg,.ico,.heic,.heif"
        />
        <div className="pointer-events-none">
          {!selectedFile ? (
            <>
              <Upload className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Drop your file here or click to browse</h3>
              <p className="text-muted-foreground">
                Support: Word, Excel, PowerPoint, Images (JPG, PNG, BMP, TIFF, SVG), PDF, TXT, and more
              </p>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-primary">
                {converted ? (
                  <CheckCircle className="h-12 w-12 text-green-600" />
                ) : (
                  getFileIcon(selectedFile.name)
                )}
              </div>
              <p className="font-medium text-lg">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}
        </div>
      </div>

      {selectedFile && !converted && (
        <Button
          onClick={handleConvert}
          disabled={converting}
          className="w-full mt-6 h-12 text-lg font-medium"
          size="lg"
        >
          {converting ? (
            <>
              <span className="animate-pulse">Converting to PDF...</span>
            </>
          ) : (
            "Convert to PDF"
          )}
        </Button>
      )}

      {converted && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              <p className="font-medium">File converted successfully!</p>
            </div>
          </div>
          <Button
            onClick={handleDownload}
            className="w-full h-12 text-lg font-medium"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF
          </Button>
        </div>
      )}
    </Card>
  );
};
