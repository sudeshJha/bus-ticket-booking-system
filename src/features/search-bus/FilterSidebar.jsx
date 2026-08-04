import React from "react";
import Button from "../../components/util/Button";

const Sidebar = () => {
  return (
    <div className=" bg-surface shadow-xl rounded-2xl">
      <div className="flex items-center justify-between px-8 py-6 border-b border-border">
        <h2 className="text-text-primary font-semibold">Filters</h2>
        <Button custom="hover:text-text-primary hover:bg-secondary/60 tracking-wide font-semibold text-secondary text-[1.4rem]  px-2 py-1 rounded-xl ">
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
