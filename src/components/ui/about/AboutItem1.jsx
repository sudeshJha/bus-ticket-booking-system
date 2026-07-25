import React from "react";
import Icon from "../../util/Icon";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaRoute } from "react-icons/fa";

const items = [
  {
    icon: <MdOutlineFreeCancellation />,
    heading: "100%",
    content: "Free Cancellation",
  },
  {
    icon: <FaRoute />,
    heading: "120+",
    content: "Routes",
  },
  {
    icon: <IoIosPeople />,
    heading: "1k+",
    content: "Happy Trips",
  },
];

const AboutItem1 = ({ item, middleChild = false }) => {
  return (
    <div
      className={`${middleChild && "border-x border-border "} flex flex-col items-center justify-center`}
    >
      <Icon icon={items[item - 1].icon} size="medium" color="primary" />

      <h3 className="text-primary-hover text-5xl font-bold">
        {items[item - 1].heading}
      </h3>

      <p className="text-center text-text-primary/70 tracking-wider text-2xl mt-3 font-medium">
        {items[item - 1].content}
      </p>
    </div>
  );
};

export default AboutItem1;
