import React from "react";
import HeroHeading from "./HeroHeading";
import Button from "../../../util/Button";

const HeroContent = () => {
  return (
    <div className="pl-20 pt-60 flex flex-col w-5xl items-end justify-end gap-24">
      <HeroHeading />
      <Button custom="bg-text-primary text-surface-dark px-10 py-8 rounded-md border-2 border-text-primary hover:bg-surface/20 hover:text-text-primary  font-bold tracking-wider w-fit text-3xl ">
        Get Started
      </Button>
    </div>
  );
};

export default HeroContent;
