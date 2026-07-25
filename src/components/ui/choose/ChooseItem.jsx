import React from "react";
import Icon from "../../util/Icon";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
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

const ChooseItem = ({ item, lastChild }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${!lastChild && "border-r border-r-border"} gap-5 px-3 py-4`}
    >
      <Icon
        icon={items[item - 1].icon}
        size="medium"
        color="primary-anti"
        bgColor="bg-primary"
      />
      <h3 className="text-text-primary font-bold">{items[item - 1].heading}</h3>
      <p className="text-text-secondary text-center">
        {items[item - 1].content}
      </p>
    </div>
  );
};

export default ChooseItem;
