import React, {useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { NavigationBar } from '../components/NavigationBar';
import styles from '../styles/Home.module.css';

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  // Set the worker URL for PDF rendering (adjust the path as needed)
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (

    <div className={styles.container}>
      <NavigationBar selected='resume'/>
      <div className={styles.main}>
        
        <Document
                file={'Resume.pdf'}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                {Array.apply(null, Array(numPages))
                    .map((x, i) => i + 1)
                    .map(page =>
                        <Page
                            key={page}
                            pageNumber={page}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />)}
            </Document>
      </div>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
      
    </div>
  );
}