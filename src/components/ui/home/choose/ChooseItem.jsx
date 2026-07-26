import React from "react";
import Icon from "../../../util/Icon";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GoClockFill } from "react-icons/go";
import { FaMapLocationDot } from "react-icons/fa6";

const ChooseItem = ({ item, lastChild }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${!lastChild && "border-r border-r-border"} gap-5 px-3 py-4`}
    >
      <Icon
        icon={item.icon}
        size="medium"
        color="primary-anti"
        bgColor="bg-primary"
      />
      <h3 className="text-text-primary font-bold">{item.heading}</h3>
      <p className="text-text-secondary text-center">{item.content}</p>
    </div>
  );
};

export default ChooseItem;
