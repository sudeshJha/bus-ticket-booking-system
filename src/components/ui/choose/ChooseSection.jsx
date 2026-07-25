import React from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../../util/Icon";
import { RiPlantLine, RiSecurePaymentFill } from "react-icons/ri";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import ChooseItem from "./ChooseItem";
import { IoWallet } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import { FaMapLocationDot } from "react-icons/fa6";

const ChooseSection = () => {
  return (
    <div className="bg-surface-dark px-20 py-25">
      <SectionHeader heading="why choose nimbus">
        <Icon
          icon={<RiPlantLine />}
          bgColor="bg-surface"
          color="text-primary"
          size="small"
        />
      </SectionHeader>
      <div className="mt-20 flex">
        <ChooseItem item={1} />
        <ChooseItem item={2} />
        <ChooseItem item={3} />
        <ChooseItem item={4} />
        <ChooseItem item={5} lastChild={true} />
      </div>
    </div>
  );
};

export default ChooseSection;
