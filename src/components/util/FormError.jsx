import React from "react";

const FormError = ({ message }) => {
  return (
    <p
      className={`text-error text-[1.2rem] ${!message && "opacity-0"} text-left`}
    >
      *{message}
    </p>
  );
};

export default FormError;
