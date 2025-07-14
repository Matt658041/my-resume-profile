import React from "react";
import Image from "next/image";
import MedscanAppImage from "../public/Slide1.jpeg";
import HighlightOff from "@mui/icons-material/HighlightOff";

function MedscanAppModal({ modalOpen, setModalOpen }) {
  if (!modalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-green bg-opacity-60"
      onClick={() => setModalOpen(false)}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-3/4 h-3/4 max-w-full max-h-full overflow-auto p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          style={{ right: "16px", top: "16px", position: "absolute" }}
        >
          <HighlightOff className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-center py-2">
          Medscan Mobile App
        </h2>
        <div className="flex justify-center">
          <Image
            src={MedscanAppImage}
            alt="Medscan Mobile App"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
        <p className="py-2  text-white">
          Developed a mobile app for iOS and Android to support healthcare
          workers in Kenya. Enabled point-of-care specimen collection and
          diagnostic test analysis for schistosomiasis. Facilitated real-time
          data sharing with public health stakeholders. Expanded usage to seven
          countries (US, Netherlands, England, Kenya, Brazil, Cotê d'Ivoiré,
          Uganda) with plans for Malawi and Madagascar. • Conducted 4,000 tests
          (2,500 surveillance, 1,500 lab tests) with an average of 500 new tests
          per week.
        </p>
      </div>
    </div>
  );
}

export default MedscanAppModal;
