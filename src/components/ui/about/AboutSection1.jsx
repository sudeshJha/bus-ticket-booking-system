import React from "react";
import Icon from "../../util/Icon";
import { MdOutlineFreeCancellation } from "react-icons/md";
import AboutItem1 from "./AboutItem1";
import { FaRoute } from "react-icons/fa";

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

      <p className="text-text-secondary tracking-wide">
        We are on a mission to make bus travel simple, safe and reliable for
        everyone. Whether you are travelling across the city or across the
        country, we&apos;re here take you there with conform and peace of mind
      </p>

      <div className="mt-12 grid grid-cols-3 items-center justify-evenly bg-surface-dark rounded-3xl py-6">
        <AboutItem1
          icon={<MdOutlineFreeCancellation />}
          heading="100%"
          content="Free Cancellation"
        />
        <AboutItem1
          icon={<FaRoute />}
          heading="120+"
          content="Routes"
          middleChild={true}
        />
        <AboutItem1
          icon={<MdOutlineFreeCancellation />}
          heading="100%"
          content="Free Cancellation"
        />
      </div>
    </div>
  );
};

export default AboutSection1;
