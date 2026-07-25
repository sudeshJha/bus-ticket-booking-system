import React from "react";
import Icon from "../../util/Icon";
import { MdOutlineSecurity } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";

const itemNo = [
  {
    icon: <MdOutlineSecurity />,
    heading: "Safe & Reliable",
    content:
      "Your safety is our top priority. We partner with verified operators and follow strict standards.",
  },
  {
    icon: <IoTicketOutline />,
    heading: "Easy Booking",
    content:
      "Search, compare and book your bus tickets in just few  clicks. Quick, simple and hassle-free.",
  },
  {
    icon: <RiCustomerServiceLine />,
    heading: "24/7 Support",
    content:
      "Our dedicated support team is always here to help you before, during and after your journey.",
  },
];

const AboutItem2 = ({ item }) => {
  return (
    <div className="flex items-center justify-center gap-14">
      <Icon
        icon={itemNo[item - 1].icon}
        color="primary"
        bgColor="bg-surface-dark"
        size="large"
      />
      <div>
        <h3 className="text-text-primary font-bold text-4xl mb-4">
          {itemNo[item - 1].heading}
        </h3>
        <p className="tracking-wide text-text-primary/70">
          {itemNo[item - 1].content}
        </p>
      </div>
    </div>
  );
};

export default AboutItem2;
