import React from "react";
import Image from "next/image";
import MedscanTest from "../public/Medscan test history screen shot.png"
import HighlightOff from "@mui/icons-material/HighlightOff";

function MedscanDashModal({ modalOpen, setModalOpen }) {
    if (!modalOpen) return null;
  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-3/4 h-3/4 max-w-full max-h-full overflow-auto p-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <HighlightOff className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold text-center py-2">
              Medscan Dash Test History Page
            </h2>
            <div className="flex justify-center">
              <Image
                src={MedscanTest}
                alt="Medscan Mobile App"
                width={950}
                height={600}
                className="rounded-lg"
              />
            </div>
            <p className="py-2">
              Designed and developed an interactive web dashboard for real-time
              visualization and sorting of study results. Enhanced project so
              that when the user clicked on the map it navigated to and selected
              the corresponding card. Incorporated multiple filtering items to
              sort and select information. Also, connected to a database to
              store and retrieve information.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MedscanDashModal;