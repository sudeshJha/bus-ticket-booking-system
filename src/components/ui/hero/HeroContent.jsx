import React from "react";

const HeroContent = () => {
  return (
    <div className="pl-20 pt-60 flex flex-col w-5xl items-end justify-end gap-24">
      <h1 className="text-text-primary text-[8rem] font-bold ">
        Your Journey
        <br />
        <span className="inline-block bg-text-primary text-surface px-4 py-0 mr-10 text-[6.5rem] -skew-x-12">
          Begins
        </span>
        Here
      </h1>

      <button className="bg-text-primary text-surface-dark px-10 py-8 rounded-md border-2 border-text-primary hover:bg-transparent hover:text-text-primary font-bold tracking-wider w-fit text-3xl">
        Get Started
      </button>
    </div>
  );
};

export default HeroContent;
