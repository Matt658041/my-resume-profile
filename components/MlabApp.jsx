import React from "react";
import Image from "next/image";
import { XIcon } from "@heroicons/react/solid";
import Mlab from "../public/mlab screen shot.png"

function MlabApp({ modalOpen, setModalOpen }) {
  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-3/4 h-3/4 max-w-full max-h-full overflow-auto p-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold text-center py-2">
              Mlab Plus mobile app
            </h2>
            <div className="flex justify-center">
              <Image
                src={Mlab}
                alt="Mlab Mobile App"
                width={900}
                height={600}
                className="rounded-lg"
              />
            </div>
            <p className="py-2">
              Collaborated with Columbia University on a mobile health
              application for HIV/Syphilis tracking. Designed user-friendly
              interfaces for self-diagnostic tests with step-by-step guidance.
              Implemented photo capture and cloud-based analysis for automated
              test interpretation. Developed features for participant
              enrollment, test status tracking, and messaging.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MlabApp;