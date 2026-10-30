import React from "react";

const BusInformationForm = () => {
  const flag = false;
  return (
    <div className="bg-surface border-2 border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-center text-center bg-background">
        <h1 className="text-text-secondary font-semibold text-2xl pt-5 pb-3">
          Bus Information
        </h1>
      </div>

      <div className="flex flex-col gap-12 px-8 py-20">
        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Vehicle Identification Number
          </label>
          <input
            type="text"
            maxLength={17}
            minLength={17}
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${flag ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="VIN Number"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">RTO Number</label>
          <input
            type="text"
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${flag ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="RTO Number"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Manufacturer Company
          </label>
          <input
            type="text"
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${flag ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Manufacturing company name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-secondary text-xl ml-1">
            Manufacturer Company
          </label>
          <input
            type="file"
            multiple
            className={`file:bg-surface file:mr-8 border border-border bg-surface-dark outline-none file:px-4 file:py-2 w-fit rounded-lg ${flag ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Manufacturing company name"
          />
        </div>
      </div>
    </div>
  );
};

export default BusInformationForm;
