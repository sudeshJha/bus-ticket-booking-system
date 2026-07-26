import React from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../../../util/Icon";
import { RiPlantLine, RiSecurePaymentFill } from "react-icons/ri";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import ChooseItem from "./ChooseItem";
import { IoWallet } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import { FaMapLocationDot } from "react-icons/fa6";

const items = [
  {
    icon: <MdAirlineSeatReclineExtra />,
    heading: "Comfortable Travel",
    content: "Well-maintained buses for a confortable journey",
  },
  {
    icon: <IoWallet />,
    heading: "Best Prices",
    content: "Competitive fares and exclusive offers.",
  },
  {
    icon: <RiSecurePaymentFill />,
    heading: "Secure Payments",
    content: "Safe, fast and excrypted payment options.",
  },
  {
    icon: <GoClockFill />,
    heading: "On Time Guarantee",
    content: "Punctual departures you can rely on",
  },
  {
    icon: <FaMapLocationDot />,
    heading: "Wide Area Network",
    content: "Extensive routes across cities and states.",
  },
];

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
        {items.map((item, i) => (
          <ChooseItem key={i} item={item} lastChild={i === items.length} />
        ))}
      </div>
    </div>
  );
};

export default ChooseSection;
