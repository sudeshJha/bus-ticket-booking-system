import React from "react";
import useScroll from "../../../../hooks/useScroll";

const FooterList = ({ content }) => {
  const { scrollToSection } = useScroll();
  const { title, links } = content;
  return (
    <div>
      <h3 className="text-2xl font-semibold text-text-primary mb-8">{title}</h3>

      <ul className="text-text-secondary text-xl flex flex-col gap-5">
        {links.map(({ name, link, comms }, i) => (
          <li
            key={i}
            className="w-fit  border-b border-transparent tracking-wider cursor-pointer hover:text-primary hover:border-b hover:border-primary"
          >
            <a href={comms} onClick={() => scrollToSection(link)}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
