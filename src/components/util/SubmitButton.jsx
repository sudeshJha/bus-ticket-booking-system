import React from "react";
import Button from "./Button";

const sizes = {
  s: "text-xl py-3",
  m: "text-[1.8rem] py-3",
  l: "text-3xl py-4",
};

const SubmitButton = ({ onClick, children, size }) => {
  return (
    <Button
      custom={`${sizes[size]} mx-auto text-primary-anti bg-primary w-full rounded-xl tracking-wide hover:bg-primary-hover hover:-translate-y-1`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
