import React from "react";
import FormError from "../../components/util/FormError";

const FormRow = ({ children, error, label }) => {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <label className="font-bold text-text-primary ml-2">{label}</label>
      {children}
      <FormError message={error} />
    </div>
  );
};

export default FormRow;
