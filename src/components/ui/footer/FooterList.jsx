import React from "react";

const FooterList = ({ content }) => {
  const { title, links } = content;
  return (
    <div className="">
      <h3>{title}</h3>

      <ul>
        {links.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
