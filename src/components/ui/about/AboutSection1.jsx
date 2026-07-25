import React from "react";
import Icon from "../../util/Icon";

const AboutSection1 = () => {
  return (
    <div>
      <h2 className="text-6xl/20 font-semibold text-text-primary mb-12">
        More Than a Ride <br />
        <span className="border-b-2 border-primary-hover pb-4 mr-5">
          It&apos;s
        </span>
        <span className="text-primary-hover tracking-wide">Your Journey</span>
      </h2>

      <p className="text-text-secondary">
        We are on a mission to make bus travel simple, safe and reliable for
        everyone. Whether you are travelling across the city or across the
        country, we&apos;re here take you there with conform and peace of mind
      </p>

      <div className="bg-surface-dark mt-12 h-50">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutSection1;
