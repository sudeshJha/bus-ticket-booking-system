import React from "react";
import Icon from "../../components/util/Icon";

const InputWrapper = ({ icon, children, password }) => {
  return (
    <div className="border border-border w-full flex items-center gap-2 justify-start py-1 pr-8 rounded-xl text-2xl">
      {icon && <Icon icon={icon} size="small" color="text-text-secondary" />}
      {React.cloneElement(children, {
        className: "outline-none text-text-primary w-full",
      })}
      {password}
    </div>
  );
};

export default InputWrapper;
