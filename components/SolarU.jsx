import React from "react";
import Image from "next/image";
import MedscanDrawerScreen from "../public/Medscan test history screen shot.png";
import SolarUphones from "../public/Slide2.jpeg";
import HighlightOff from "@mui/icons-material/HighlightOff";

function SolarU({ modalOpen, setModalOpen }) {
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
          SolarU Mobile App
        </h2>
        <div className="flex justify-center">
          <Image
            src={SolarUphones}
            alt="Solar U Mobile App"
            width={900}
            height={800}
            className="rounded-lg"
          />
        </div>
        <p className="py-2  text-white">
          Developed a mobile app that uses Nasa's api to retrieve temporal daily
          data to measure the Solar Insolation levels within the users location
          and incorporate it with temperature values to store and display the
          data in a graph format. The app also uses AppleHealthKit to retrieve
          the users heart rate, blood pressure, and other health data. This app
          is designed to help measure the users mood and well being based on
          very specific Solar Insolation data.
        </p>
      </div>
    </div>
  );
}

export default SolarU;
