import React from "react";
import Image from "next/image";
import MedscanDrawerScreen from "../public/Medscan test history screen shot.png"
import MobileImage from "../public/mlab screen shot.png"
import HighlightOff from "@mui/icons-material/HighlightOff";


function MedscanAppModal({ modalOpen, setModalOpen }) {
    if (!modalOpen) return null;
  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center shadow-xl rounded-xl  bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-3/4 h-3/4 max-w-full max-h-full overflow-auto p-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <HighlightOff className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold text-center py-2">
              Medscan Mobile App
            </h2>
            <div className="flex justify-center">
              <Image
                src={MedscanDrawerScreen}
                alt="Medscan Mobile App"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
            <p className="py-2">
              Developed a mobile app for iOS and Android to support healthcare
              workers in Kenya. Enabled point-of-care specimen collection and
              diagnostic test analysis for schistosomiasis. Integrated
              interactive maps and barcode scanning for streamlined data
              collection and analysis. Facilitated real-time data sharing with
              public health stakeholders.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MedscanAppModal;