import React from "react";

const SectionHeader = ({ children, heading }) => {
  return (
    <h2 className=" flex items-center gap-8 ">
      {children}
      <span className="text-2xl text-primary font-semibold tracking-wide uppercase">
        {heading}
      </span>
    </h2>
  );
};

export default SectionHeader;
