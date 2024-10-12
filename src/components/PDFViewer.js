import React, { useState, useEffect, useRef } from 'react';
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { searchPlugin } from "@react-pdf-viewer/search";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { printPlugin } from "@react-pdf-viewer/print";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';
import { Download, Printer, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const PDFViewer = ({ pdfURL }) => {
  const [pageNumber, setPageNumber] = useState(1);
//   const [searchKeyword, setSearchKeyword] = useState('');
  const viewerRef = useRef(null); // Reference to the viewer container

  const zoomPluginInstance = zoomPlugin();
  const searchPluginInstance = searchPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const fullScreenPluginInstance = fullScreenPlugin();
  const printPluginInstance = printPlugin();

  const { ZoomIn: ZoomInButton, ZoomOut: ZoomOutButton } = zoomPluginInstance;
//   const { Search: SearchComponent } = searchPluginInstance;
  const { GoToNextPage, GoToPreviousPage, CurrentPageInput, NumberOfPages } = pageNavigationPluginInstance;
  const { EnterFullScreen } = fullScreenPluginInstance;
  const { Print: PrintButton } = printPluginInstance;

  useEffect(() => {
    const onFullScreenChange = () => {
      const isFullScreen = document.fullscreenElement !== null;
      if (isFullScreen) {
        viewerRef.current.classList.add('fullscreen'); // Add fullscreen class to style
      } else {
        viewerRef.current.classList.remove('fullscreen'); // Remove fullscreen class
      }
    };

    document.addEventListener("fullscreenchange", onFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
    };
  }, []);

  const handlePageChange = (e) => {
    setPageNumber(e.target.value);
  };

//   const handleGoToPage = () => {
//     if (pageNumber) {
//       jumpToPage(parseInt(pageNumber, 10) - 1);
//     }
//   };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'document.pdf';
    link.click();
  };

  return (
    <div className="pdf-viewer-container relative" ref={viewerRef}>
      {/* Controls */}
      <div className="controls flex flex-wrap justify-between items-center mb-4 p-2 bg-gray-100 rounded">
        <div className="flex items-center space-x-2">
          <ZoomOutButton>
            {(props) => (
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" {...props}>
                <ZoomOut size={16} />
              </button>
            )}
          </ZoomOutButton>
          <ZoomInButton>
            {(props) => (
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" {...props}>
                <ZoomIn size={16} />
              </button>
            )}
          </ZoomInButton>
        </div>

        <div className="flex items-center space-x-2">
          <GoToPreviousPage>
            {(props) => (
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" {...props}>
                <ChevronLeft size={16} />
              </button>
            )}
          </GoToPreviousPage>
          <CurrentPageInput
            value={pageNumber}
            onChange={handlePageChange}
            className="w-16 px-2 py-1 border rounded"
          />
          <span>/</span>
          <NumberOfPages />
          <GoToNextPage>
            {(props) => (
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" {...props}>
                <ChevronRight size={16} />
              </button>
            )}
          </GoToNextPage>
        </div>

        {/* <SearchComponent>
          {(props) => (
            <div className="flex items-center">
              <input
                placeholder="Search"
                className="px-2 py-1 border rounded-l"
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button
                className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
                onClick={() => {
                  if (searchKeyword) {
                    props.setKeyword(searchKeyword); // Ensure this sets the keyword correctly
                  }
                }}
              >
                <Search size={16} />
              </button>
            </div>
          )}
        </SearchComponent> */}

        <div className="flex items-center space-x-2">
          <PrintButton>
            {(props) => (
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" {...props}>
                <Printer size={16} />
              </button>
            )}
          </PrintButton>
          <button onClick={handleDownload} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <Download size={16} />
          </button>
          <EnterFullScreen>
            {(props) => (
              <button
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                {...props}
              >
                <Maximize2 size={16} />
              </button>
            )}
          </EnterFullScreen>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="pdf-viewer" style={{ height: 'calc(100vh - 80px)' }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <Viewer
            fileUrl={pdfURL}
            plugins={[
              zoomPluginInstance,
              searchPluginInstance,
              pageNavigationPluginInstance,
              fullScreenPluginInstance,
              printPluginInstance,
            ]}
            defaultScale={SpecialZoomLevel.PageFit}
            onPageChange={({ currentPage }) => setPageNumber(currentPage)}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PDFViewer;
