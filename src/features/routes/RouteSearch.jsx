import React from "react";

const RouteSearch = ({ handleSearch }) => {
  return (
    <div className="flex items-end gap-6">
      <div className="flex-1">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Source City
        </label>
        <select className="w-full text-base border border-gray-300 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-blue-500 bg-white">
          <option>Jabalpur</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Destination City *
        </label>
        <select className="w-full text-base border border-gray-300 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-blue-500 bg-white">
          <option>Indore</option>
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white text-base font-medium px-8 py-3.5 rounded-xl hover:bg-blue-700 transition shadow-sm"
      >
        Search Routes
      </button>
    </div>
  );
};

export default RouteSearch;
