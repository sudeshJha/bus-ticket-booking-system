import React from "react";

const RouteResult = (setSelectedRoute, selectedRoute) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Available Routes
        </h3>
        <p className="text-base text-gray-600 mb-6">
          We found{" "}
          <span className="font-semibold text-gray-900">2 route(s)</span> from
          Jabalpur to Indore. Select one to continue.
        </p>

        <div className="space-y-4">
          {/* Route 1 */}
          <div
            className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${selectedRoute === 1 ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 hover:border-blue-300 hover:shadow-sm"}`}
            onClick={() => setSelectedRoute(1)}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg font-bold text-blue-700">Route 1</span>
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                Recommended
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Jabalpur → Narsinghpur → Hoshangabad → Sehore → Indore
            </p>
            <div className="flex gap-8 text-base text-gray-600 font-medium">
              <span className="flex items-center gap-2">🛣️ 350 km</span>
              <span className="flex items-center gap-2">⏱️ 8 hr 0 min</span>
              <span className="flex items-center gap-2">📍 4 stops</span>
            </div>
          </div>

          {/* Route 2 */}
          <div
            className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${selectedRoute === 2 ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 hover:border-blue-300 hover:shadow-sm"}`}
            onClick={() => setSelectedRoute(2)}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg font-bold text-gray-700">Route 2</span>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Jabalpur → Sagar → Bhopal → Sehore → Indore
            </p>
            <div className="flex gap-8 text-base text-gray-600 font-medium">
              <span className="flex items-center gap-2">🛣️ 370 km</span>
              <span className="flex items-center gap-2">⏱️ 8 hr 45 min</span>
              <span className="flex items-center gap-2">📍 4 stops</span>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Stops Selection (Only shows if a route is selected) */}
      {selectedRoute && (
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">
            Choose Mid Cities / Stops
          </h4>
          <table className="w-full text-left text-base">
            <thead>
              <tr className="text-gray-500 border-b border-gray-200">
                <th className="pb-4 w-14"></th>
                <th className="pb-4 font-medium">City</th>
                <th className="pb-4 font-medium">Distance from Source</th>
                <th className="pb-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="w-5 h-5 rounded text-blue-600 border-gray-300"
                  />
                </td>
                <td className="py-4">
                  <span className="font-bold text-gray-900 text-lg">
                    Jabalpur
                  </span>{" "}
                  <span className="text-sm bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md ml-2 font-medium">
                    Source
                  </span>
                </td>
                <td className="py-4 text-gray-600">0 km</td>
                <td className="py-4 text-gray-400">-</td>
              </tr>
              <tr>
                <td className="py-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 rounded text-blue-600 border-gray-300"
                  />
                </td>
                <td className="py-4 font-medium text-gray-800 text-lg">
                  Narsinghpur
                </td>
                <td className="py-4 text-gray-600">120 km</td>
                <td className="py-4 text-blue-600 font-medium">Stop</td>
              </tr>
              <tr>
                <td className="py-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded text-blue-600 border-gray-300"
                  />
                </td>
                <td className="py-4 font-medium text-gray-800 text-lg">
                  Hoshangabad
                </td>
                <td className="py-4 text-gray-600">220 km</td>
                <td className="py-4 text-gray-500">Skip</td>
              </tr>
              <tr>
                <td className="py-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 rounded text-blue-600 border-gray-300"
                  />
                </td>
                <td className="py-4 font-medium text-gray-800 text-lg">
                  Sehore
                </td>
                <td className="py-4 text-gray-600">310 km</td>
                <td className="py-4 text-blue-600 font-medium">Stop</td>
              </tr>
              <tr>
                <td className="py-4">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="w-5 h-5 rounded text-blue-600 border-gray-300"
                  />
                </td>
                <td className="py-4">
                  <span className="font-bold text-gray-900 text-lg">
                    Indore
                  </span>{" "}
                  <span className="text-sm bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md ml-2 font-medium">
                    Destination
                  </span>
                </td>
                <td className="py-4 text-gray-600">350 km</td>
                <td className="py-4 text-gray-400">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RouteResult;
