
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download, Upload } from 'lucide-react';
import { toast } from 'sonner';

const PreviewActions = () => {
  const handleDownload = () => {
    toast.success("Resume download started");
    // In a real app, this would generate and download a PDF
  };

  return (
    <div className="flex flex-col sm:flex-row mt-4 gap-2">
      <Button 
        variant="outline" 
        className="flex-1 smooth-transition"
        onClick={() => {
          toast.success("Resume saved to your account");
        }}
      >
        <FileText className="mr-2 h-4 w-4" />
        Save as Draft
      </Button>
      <Button 
        variant="outline" 
        className="flex-1 smooth-transition"
        onClick={handleDownload}
      >
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button 
        variant="outline" 
        className="flex-1 smooth-transition"
        onClick={() => {
          toast.success("Upload option coming soon!");
        }}
      >
        <Upload className="mr-2 h-4 w-4" />
        Upload
      </Button>
    </div>
  );
};

export default PreviewActions;
