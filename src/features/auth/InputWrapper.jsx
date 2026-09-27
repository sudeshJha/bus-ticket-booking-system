import React from "react";
import Icon from "../../components/util/Icon";

const InputWrapper = ({ icon, children, password, disabled }) => {
  return (
    <div
      className={`border border-border w-full flex items-center gap-2 justify-start py-1 rounded-xl text-2xl ${disabled ? "bg-text-secondary/10" : ""}`}
    >
      {icon && <Icon icon={icon} size="small" color="text-text-secondary" />}
      {React.cloneElement(children, {
        className: `${disabled ? "cursor-not-allowed text-text-primary/80" : "text-text-primary"} outline-none w-full mr-4`,
      })}
      {password}
    </div>
  );
};

export default InputWrapper;
