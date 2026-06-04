import React, { useEffect } from "react";
import Image from "next/image";
import Mlab from "../public/mlab screen shot.png";

function MlabApp({ modalOpen, setModalOpen }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!modalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-6"
      onClick={() => setModalOpen(false)}
    >
      <div
        className="relative bg-white rounded-[2rem] shadow-2xl border-2 border-emerald-600 w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">mLab+</h2>
              <p className="text-xs text-emerald-600 font-medium mt-0.5">
                Lead Front-End Developer
              </p>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors ml-4 mt-1"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="rounded-xl overflow-hidden bg-gray-100 mb-4">
            <Image
              src={Mlab}
              alt="mLab+ Mobile App"
              width={900}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Collaborated with Columbia University on a mobile health application
            for HIV/Syphilis tracking. Designed user-friendly interfaces for
            self-diagnostic tests with step-by-step guidance. Implemented photo
            capture and cloud-based analysis for automated test interpretation.
            Developed features for participant enrollment, test status tracking,
            and messaging.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MlabApp;
