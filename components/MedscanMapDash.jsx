import React from "react";
import Image from "next/image";
import {HighlightOff} from "@mui/icons-material";
import MedscanMap from "../public/Medscan Map screen shot.png"

function MedscanMapDash({ modalOpen, setModalOpen }) {
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
              Medscan Interactive Study Map
            </h2>
            <div className="flex justify-center">
              <Image
                src={MedscanMap}
                alt="Medscan Mobile App"
                width={950}
                height={600}
                className="rounded-lg"
              />
            </div>
            <p className="py-2">
              Designed and developed an interactive map for real-time
              visualization of study results. Enhanced project oversight with
              features tailored for administrators, project managers, and
              sponsors. Incorporated a dynamic map to track disease prevalence
              in Kenyan schools, complete with search, filters, editable
              pop-ups, and carousels. Streamlined user experience with dedicated
              pages for detailed school information and testing history.
              Implemented full resource and staff audit histories to improve
              data interaction and accessibility.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MedscanMapDash;