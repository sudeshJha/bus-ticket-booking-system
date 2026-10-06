import React from "react";

const RouteSummary = () => {
  return (
    <div className="w-[400px]">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sticky top-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span>🗺️</span> Route Summary
        </h3>

        <div className="flex justify-between items-center mb-8 bg-gray-50 p-4 rounded-xl border border-gray-200">
          <span className="text-lg font-bold text-gray-800">
            Jabalpur → Indore
          </span>
          <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-md font-medium">
            Available
          </span>
        </div>

        <div className="mb-8">
          <p className="text-base font-semibold text-gray-700 mb-5">
            Selected Route
          </p>
          <div className="pl-2">
            <ul className="space-y-5 text-base relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-100 before:via-blue-300 before:to-blue-100">
              <li className="relative flex items-center gap-5">
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 z-10 relative ring-4 ring-white"></div>
                <span className="text-gray-900 font-bold text-lg">
                  Jabalpur{" "}
                  <span className="text-gray-500 font-normal text-base">
                    (Source)
                  </span>
                </span>
              </li>
              <li className="relative flex items-center gap-5">
                <div className="w-3 h-3 rounded-full bg-blue-500 z-10 relative ring-4 ring-white"></div>
                <span className="text-gray-700 font-medium text-lg">
                  Narsinghpur
                </span>
              </li>
              <li className="relative flex items-center gap-5">
                <div className="w-3 h-3 rounded-full bg-blue-500 z-10 relative ring-4 ring-white"></div>
                <span className="text-gray-700 font-medium text-lg">
                  Sehore
                </span>
              </li>
              <li className="relative flex items-center gap-5">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-600 z-10 relative ring-4 ring-white"></div>
                <span className="text-gray-900 font-bold text-lg">
                  Indore{" "}
                  <span className="text-gray-500 font-normal text-base">
                    (Destination)
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-5 border-t border-gray-200 pt-6">
          <div className="flex gap-4 items-center">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-0.5">
                Total Distance
              </p>
              <p className="text-xl font-bold text-gray-900">350 km</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-0.5">
                Estimated Duration
              </p>
              <p className="text-xl font-bold text-gray-900">8 hr 0 min</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-2xl">🛑</span>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-0.5">
                Total Stops
              </p>
              <p className="text-xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>

        <button className="w-full mt-8 bg-blue-600 text-white text-lg py-3.5 rounded-xl hover:bg-blue-700 transition font-medium shadow-sm">
          Confirm Configuration
        </button>
      </div>
    </div>
  );
};

export default RouteSummary;
