import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Links from "./components/Links";
import PDFViewer from "./components/PDFViewer";

const App = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume((prev) => !prev);
  };

  const pdfURL = "/pdf/resume_sarishrv.pdf"; // Ensure your PDF path is correct

  return (
    <div className="container mx-auto px-4 py-8">
    <Header />
    <main className="flex flex-wrap gap-4">
      <div
        className={`flex-1 transition-transform duration-500 ease-in-out transform ${
          showResume ? "w-2/3" : "w-full"
        }`}
      >
        <Profile showResume={showResume} toggleResume={toggleResume} />
        <Projects />
        <Experience />
        <Contact />
        <Links />
      </div>
      <div
        className={`flex-1 w-full md:w-1/3 transition-opacity duration-500 ease-in-out ${
          showResume ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <PDFViewer pdfURL={pdfURL} />
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default App;








// import React, { useState, useEffect, useRef } from "react";
// import { Document, Page, pdfjs } from 'react-pdf';
// import { DownloadCloud, Printer, Maximize, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Search } from 'lucide-react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Links from "./components/Links";

// // Set up the worker for react-pdf
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const PDFViewer = ({ pdfURL }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [scale, setScale] = useState(1);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     document.addEventListener('fullscreenchange', handleFullscreenChange);

//     return () => {
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//     };
//   }, []);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const handleZoomIn = () => setScale(prevScale => Math.min(prevScale + 0.2, 3));
//   const handleZoomOut = () => setScale(prevScale => Math.max(prevScale - 0.2, 0.5));

//   const handlePrevPage = () => setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
//   const handleNextPage = () => setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = pdfURL;
//     link.download = 'resume_sarishrv.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handlePrint = () => {
//     const printWindow = window.open(pdfURL);
//     printWindow.onload = () => {
//       printWindow.print();
//     };
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       containerRef.current.requestFullscreen();
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement PDF search functionality here
//     console.log('Searching for:', searchText);
//   };

//   return (
//     <div ref={containerRef} className={`pdf-container ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
//       <div className="controls mb-4 flex flex-wrap justify-between items-center gap-2">
//         <div className="flex items-center gap-2">
//           <button onClick={handleZoomIn} className="p-2 bg-blue-500 text-white rounded"><ZoomIn size={16} /></button>
//           <button onClick={handleZoomOut} className="p-2 bg-blue-500 text-white rounded"><ZoomOut size={16} /></button>
//           <span>{Math.round(scale * 100)}%</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <button onClick={handlePrevPage} disabled={pageNumber <= 1} className="p-2 bg-gray-300 text-gray-700 rounded"><ChevronLeft size={16} /></button>
//           <span>{pageNumber} / {numPages}</span>
//           <button onClick={handleNextPage} disabled={pageNumber >= numPages} className="p-2 bg-gray-300 text-gray-700 rounded"><ChevronRight size={16} /></button>
//         </div>
//         <form onSubmit={handleSearch} className="flex items-center gap-2">
//           <input
//             type="text"
//             value={searchText}
//             onChange={handleSearchChange}
//             placeholder="Search..."
//             className="p-2 border rounded"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded"><Search size={16} /></button>
//         </form>
//         <div className="flex items-center gap-2">
//           <button onClick={handleDownload} className="p-2 bg-purple-500 text-white rounded"><DownloadCloud size={16} /></button>
//           <button onClick={handlePrint} className="p-2 bg-purple-500 text-white rounded"><Printer size={16} /></button>
//           <button onClick={toggleFullscreen} className="p-2 bg-green-500 text-white rounded">
//             <Maximize size={16} />
//           </button>
//         </div>
//       </div>
//       <div className="pdf-preview" style={{ height: isFullscreen ? '90vh' : '600px', overflow: 'auto' }}>
//         <Document
//           file={pdfURL}
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading={<p>Loading PDF...</p>}
//         >
//           <Page
//             pageNumber={pageNumber}
//             scale={scale}
//             renderTextLayer={true}
//             renderAnnotationLayer={true}
//           />
//         </Document>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [showResume, setShowResume] = useState(false);

//   const toggleResume = () => {
//     setShowResume((prev) => !prev);
//   };

//   // Update the pdfURL to point to the local file
//   const pdfURL = "/pdf/resume_sarishrv.pdf";

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Header />
//       <main className="flex flex-wrap gap-4">
//         <div className={`flex-1 ${showResume ? "w-2/3" : "w-full"}`}>
//           <Profile showResume={showResume} toggleResume={toggleResume} />
//           <Projects />
//           <Experience />
//           <Contact />
//           <Links />
//         </div>
//         {showResume && (
//           <div className="flex-1 w-1/3">
//             <PDFViewer pdfURL={pdfURL} />
//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;