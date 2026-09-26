import React from "react";
import FormError from "../../components/util/FormError";

const FormRow = ({ children, error, label, info, htmlFor }) => {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div>
        <label className="font-bold text-text-primary ml-2" htmlFor={htmlFor}>
          {label}
        </label>
        {info && <span> ({info})</span>}
      </div>
      {children}
      <FormError message={error} />
    </div>
  );
};

export default FormRow;
