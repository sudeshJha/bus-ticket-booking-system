import React from "react";

const OperatorFareFactor = () => {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface">
      <h2 className="bg-background px-5 py-3 text-lg font-semibold">
        Fare Factors
      </h2>
      <div className="overflow-x-auto p-5">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-background text-gray-500">
              <th className="px-4 py-3 font-medium">Feature</th>
              <th className="px-4 py-3 font-medium">Charge (₹/km)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-border">
              <td className="px-4 py-3">AC</td>
              <td className="border-l border-border px-4 py-3">0.05</td>
            </tr>
            <tr className="border border-border">
              <td className="px-4 py-3">Blanket and Pillow</td>
              <td className="border-l border-border px-4 py-3">0.10</td>
            </tr>
            <tr className="border border-border">
              <td className="px-4 py-3">Meal</td>
              <td className="border-l border-border px-4 py-3">0.05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OperatorFareFactor;
