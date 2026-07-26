import React from "react";
import AboutItem2 from "./AboutItem2";
import { MdOutlineSecurity } from "react-icons/md";

const AboutSection2 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-28">
      <AboutItem2 item={1} />
      <AboutItem2 item={2} />
      <AboutItem2 item={3} />
    </div>
  );
};

export default AboutSection2;
