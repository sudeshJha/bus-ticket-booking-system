import React from "react";
import { RiTeamLine } from "react-icons/ri";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import SectionHeader from "../../SectionHeader";
import Icon from "../../../util/Icon";

const AboutSection = () => {
  return (
    <div className="bg-surface px-20 py-30" id="about">
      <SectionHeader heading="about us">
        <Icon
          icon={<RiTeamLine />}
          bgColor="bg-surface-dark"
          color="text-primary"
          size="small"
        />
      </SectionHeader>

      <div className="grid grid-cols-2 items-center justify-center gap-40 py-15">
        <AboutSection1 />
        <AboutSection2 />
      </div>
    </div>
  );
};

export default AboutSection;
