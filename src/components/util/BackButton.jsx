import React from "react";
import { PiLessThanBold } from "react-icons/pi";
import useMoveBack from "../../hooks/useMoveBack";
import Icon from "./Icon";

const BackButton = () => {
  const { moveBack } = useMoveBack();
  return (
    <button
      onClick={moveBack}
      className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 text-xl font-medium text-text-secondary shadow-sm transition-all duration-200 hover:-translate-x-1 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-md active:scale-95 cursor-pointer"
    >
      <Icon
        icon={<PiLessThanBold />}
        custom="transition-transform duration-200 group-hover:-translate-x-0.5"
      />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
