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
    <div className="bg-surface-dark px-20 py-25 -mb-15">
      <SectionHeader heading="why choose nimbus">
        <Icon
          icon={<RiPlantLine />}
          bgColor="bg-surface"
          color="text-primary"
          size="small"
        />
      </SectionHeader>
      <div className="mt-20 flex">
        <ChooseItem
          icon={<MdAirlineSeatReclineExtra />}
          heading="Confortable Travel"
          content="Well-maintained buses for a confortable journey"
        />
        <ChooseItem
          icon={<IoWallet />}
          heading="Secure Payments"
          content="Well-maintained buses for a confortable journey"
        />
        <ChooseItem
          icon={<RiSecurePaymentFill />}
          heading="Secure Payments"
          content="Well-maintained buses for a confortable journey"
        />
        <ChooseItem
          icon={<GoClockFill />}
          heading="On Time Guarantee"
          content="Well-maintained buses for a confortable journey"
        />
        <ChooseItem
          icon={<FaMapLocationDot />}
          heading="Wide Area Network"
          content="Well-maintained buses for a confortable journey"
          lastChild={true}
        />
      </div>
    </div>
  );
};

export default ChooseSection;
