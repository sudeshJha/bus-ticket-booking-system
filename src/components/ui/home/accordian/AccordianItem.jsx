import React from "react";
import ButtonIcon from "../../../util/ButtonIcon";
import { CiCirclePlus } from "react-icons/ci";
import { AiFillMinusCircle } from "react-icons/ai";

const AccordianItem = ({ faq, show, toggleShow }) => {
  const accordionAnimationClass = `overflow-hidden transition-all duration-500 ease-in-out
${
  show === faq.id
    ? "max-h-60 opacity-100 translate-y-0"
    : "max-h-0 opacity-0 -translate-y-4"
}`;
  return (
    <div
      className={`border-y border-border py-10 px-8 ${show === faq.id && "bg-surface-dark/70"}`}
    >
      <div className="flex items-center justify-start gap-10 ">
        <ButtonIcon
          icon={show === faq.id ? <AiFillMinusCircle /> : <CiCirclePlus />}
          onClick={() => toggleShow(faq.id)}
          color="text-secondary"
        />

        <h4
          className={`${show === faq.id ? "text-primary" : "text-text-primary"} text-3xl font-semibold`}
        >
          {faq.question}
        </h4>
      </div>

      {/* {show === faq.id && ( */}
      <div className={"ml-26 mt-6 " + accordionAnimationClass}>
        <p className="text-text-primary tracking-wider text-[1.6rem] ">
          {faq.answer}
        </p>
      </div>
      {/* )} */}
    </div>
  );
};

export default AccordianItem;
