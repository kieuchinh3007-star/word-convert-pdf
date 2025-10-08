import { useState, useCallback, useRef } from "react";
import { Upload, FileText, Image, FileSpreadsheet, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setConverted(false);
      toast.success("File uploaded successfully!");
    }
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      setConverted(false);
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
    
    // Simulate conversion process
    setTimeout(() => {
      setConverting(false);
      setConverted(true);
      toast.success("File converted successfully!");
      
      // Simulate download
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '#';
        link.download = `${selectedFile.name.split('.')[0]}.pdf`;
        toast.info("Download started!");
      }, 500);
    }, 2000);
  }, [selectedFile]);

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
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            <p className="font-medium">File converted successfully! Download started.</p>
          </div>
        </div>
      )}
    </Card>
  );
};
