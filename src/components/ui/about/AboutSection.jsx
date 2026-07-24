import React from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../../util/Icon";
import { RiTeamLine } from "react-icons/ri";

const AboutSection = () => {
  return (
    <div className="bg-surface px-20 py-30">
      <SectionHeader heading="about us">
        <Icon
          icon={<RiTeamLine />}
          bgColor="bg-surface-dark"
          color="text-primary"
          size="small"
        />
      </SectionHeader>

      <div className="grid grid-cols-2 items-center justify-center gap-20 py-15">
        <div>
          <h2 className="text-6xl/20 font-semibold text-text-primary mb-12">
            More Than a Ride <br />
            <span className="border-b-2 border-primary-hover pb-4 mr-5">
              It&apos;s
            </span>
            <span className="text-primary-hover tracking-wide">
              Your Journey
            </span>
          </h2>

          <p className="text-text-secondary">
            We are on a mission to make bus travel simple, safe and reliable for
            everyone. Whether you are travelling across the city or across the
            country, we&apos;re here take you there with conform and peace of
            mind
          </p>
        </div>
        <div className="bg-green-300 h-32"></div>
      </div>
    </div>
  );
};

export default AboutSection;
