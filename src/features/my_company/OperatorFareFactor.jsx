import React from "react";
import { useFareFactor } from "./useFareFactor";
import Spinner from "../../components/ui/Spinner";
import Button from "../../components/util/Button";

const OperatorFareFactor = () => {
  const { gettingFareFactors, fareFactors } = useFareFactor();

  if (gettingFareFactors) return <Spinner />;

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface">
      <h2 className="bg-surface-dark px-5 py-3 text-2xl text-center text-text-primary/90 font-semibold">
        Fare Factors
      </h2>

      <div className="min-h-screen bg-surface p-6 text-text-primary">
        <div className="my-6 grid grid-cols-[5fr_2fr_1.25fr] items-center gap-8">
          <select className="min-w-0 flex-1 rounded-xl border border-border bg-surface-dark px-4 text-2xl py-3 text-text-secondary outline-none">
            <option className="bg-surface-dark">Select a Fare Factor</option>
            {fareFactors.map((fareFactor) => (
              <option key={fareFactor.code} className="bg-surface">
                {fareFactor.label}
              </option>
            ))}
          </select>

          <input
            type="number"
            step="0.1"
            min="0"
            placeholder="Price per km per person"
            className="text-2xl py-3  rounded-2xl border border-border bg-surface-dark px-4 text-gray-200 outline-none"
          />

          <Button type="primary" size="small">
            + Add Fare Factor
          </Button>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-surface mt-16">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-surface-dark text-text-secondary text-center text-2xl">
                <th className="p-3 border-r border-b border-border text-center w-1/2">
                  Feature
                </th>
                <th className="border-b border-border p-3 text-center w-1/2">
                  Charge (₹ /km /person)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-r border-border p-3">AC</td>
                <td className="border-b border-border p-3">₹ 0.05</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OperatorFareFactor;
