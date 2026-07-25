import React from "react";
import Icon from "../../util/Icon";
import { IoBus } from "react-icons/io5";
import FooterList from "./FooterList";

const content = [
  {
    title: "Company",
    links: [
      { name: "About us", link: "about" },
      { name: "Careers", link: "#" },
      { name: "Login", link: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", link: "faq" },
      { name: "Cancellation Policy", link: "about" },
      { name: "Booking Policy", link: "about" },
    ],
  },
  {
    title: "Service",
    links: [
      { name: "Search Bus", link: "search-bus" },
      { name: "Bookings", link: "#" },
      { name: "Theme Switch", link: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "+91 9244249441", comms: "tel:+9244249441" },
      { name: "rajjhaa333@gmail.com", comms: "mailto:rajjhaa333@gmail.com" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="border-t border-text-primary/30 py-16 px-20 bg-background grid grid-cols-[1fr_3fr] items-center justify-center gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex  items-center gap-6">
          <Icon
            icon={<IoBus />}
            color="primary-anti"
            bgColor="bg-primary"
            size="small"
            custom="rounded-xl"
          />
          <h3 className="font-extrabold text-text-primary text-4xl">NimBus</h3>
        </div>
        <div>
          <p className="text-text-secondary tracking-wide text-xl">
            Making city travel simpler, safer, and more sustainable for
            everyone.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 justify-center items-start">
        {content.map((c, i) => (
          <FooterList key={i} content={c} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
