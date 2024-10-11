import React, { useState,useEffect,useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Links from "./components/Links";

// PDFViewer Compone
const PDFViewer = ({ pdfURL }) => {
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const sendMessage = (message) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(message, '*');
    }
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => {
      const newZoom = Math.min(prevZoom + 25, 200);
      sendMessage({ type: 'zoom', value: newZoom });
      return newZoom;
    });
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => {
      const newZoom = Math.max(prevZoom - 25, 50);
      sendMessage({ type: 'zoom', value: newZoom });
      return newZoom;
    });
  };

  const handleDownload = () => {
    sendMessage({ type: 'download' });
  };

  const handlePrint = () => {
    sendMessage({ type: 'print' });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleLoad = () => {
    console.log('PDF loaded in iframe');
  };

  return (
    <div className={`pdf-container ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="controls mb-4 flex justify-between items-center">
        <button onClick={handleZoomIn} className="px-4 py-2 bg-blue-500 text-white rounded">Zoom In</button>
        <button onClick={handleZoomOut} className="px-4 py-2 bg-blue-500 text-white rounded">Zoom Out</button>
        <span>{zoom}%</span>
        <button onClick={handleDownload} className="px-4 py-2 bg-purple-500 text-white rounded">Download</button>
        <button onClick={handlePrint} className="px-4 py-2 bg-purple-500 text-white rounded">Print</button>
        <button onClick={toggleFullscreen} className="px-4 py-2 bg-green-500 text-white rounded">
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
      <div className="pdf-preview" style={{ overflow: 'hidden', height: '600px' }}>
        <iframe
          ref={iframeRef}
          src={`${pdfURL}#zoom=${zoom}`}
          width="100%"
          height="100%"
          style={{
            border: 'none',
          }}
          title="PDF Preview"
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
};

// App Component
const App = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume((prev) => !prev);
  };

  // Use the embed link for viewing the PDF
  const pdfURL = "https://drive.google.com/file/d/1g27HxGObAYo2-x8D8MwTgxojNsgh5PCI/preview";

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <main className="flex flex-wrap gap-4">
        <div className={`flex-1 ${showResume ? "w-2/3" : "w-full"}`}>
          <Profile showResume={showResume} toggleResume={toggleResume} />
          <Projects />
          <Experience />
          <Contact />
          <Links />
        </div>
        {showResume && (
          <div className="flex-1 w-1/3">
            <PDFViewer pdfURL={pdfURL} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
