import React from "react";
import { useOperatorFareFactors } from "../my-company/useOperatorFareFactors";
import Spinner from "../../components/ui/Spinner";
import FormRow from "../auth/FormRow";
import InputWrapper from "../auth/InputWrapper";

const BusFeaturesForm = ({ register, errors }) => {
  const { gettingOperatorFareFactors, operatorFareFactors } =
    useOperatorFareFactors();

  if (gettingOperatorFareFactors) return <Spinner />;

  return (
    <div className="bg-surface border-2 border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-center text-center bg-background">
        <h1 className="text-text-secondary font-semibold text-2xl pt-5 pb-3">
          Bus Features
        </h1>
      </div>

      <div className="grid grid-cols-3 items-center justify-center gap-y-8 px-16 py-12">
        {operatorFareFactors.map((operatorFareFactor, i) => (
          <label
            className="flex items-center gap-2 text-text-secondary"
            key={i}
          >
            <input
              className="mr-4"
              type="checkbox"
              value={operatorFareFactor.fareFactor.code}
              {...register("busFeatures", {
                required: "This field is required",
              })}
            />
            {operatorFareFactor.fareFactor.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default BusFeaturesForm;
