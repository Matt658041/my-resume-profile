import React from "react";
import Image from "next/image";
import MedscanDrawerScreen from "../public/Medscan test history screen shot.png";
import SolarUhomepage from "../public/IMG_749489934D7D-1.jpeg"
import HighlightOff from "@mui/icons-material/HighlightOff";

function SolarU ({ modalOpen, setModalOpen }) {
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
                SolarU Mobile App
            </h2>
            <div className="flex justify-center">
              <Image
                src={SolarUhomepage}
                alt="Solar U Mobile App"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
            <p className="py-2">
             Solar U stuff goes here. 
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SolarU;
