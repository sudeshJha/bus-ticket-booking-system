import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = ({ faqs }) => {
  const [show, setShow] = useState(-1);

  const toggleShow = (id) => {
    setShow((show) => (show === id ? -1 : id));
    console.log(show);
  };

  return (
    <div className="border-y border-border" id="faq">
      {faqs.map((faq) => (
        <AccordianItem
          key={faq.id}
          faq={faq}
          show={show}
          toggleShow={toggleShow}
        />
      ))}
    </div>
  );
};

export default Accordian;
