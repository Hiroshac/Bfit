import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Define the type for the 'pdf' prop
interface PDFViewerProps {
  pdf: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer: React.FC<PDFViewerProps> = ({ pdf }) => {
  return (
    <div>
      <Document file={`/docs/${pdf}`}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
