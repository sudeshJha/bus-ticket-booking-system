import React from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../../../util/Icon";
import { RiQuestionAnswerLine } from "react-icons/ri";
import Accordian from "./Accordian";

const faqs = [
  {
    id: 1,
    question: "How do I book a bus ticket?",
    answer:
      "Search for your route, choose your preferred bus and seat, enter passenger details, complete the payment, and your e-ticket will be sent instantly.",
  },
  {
    id: 2,
    question: "Can I cancel my booking?",
    answer:
      "Yes. You can cancel your booking for free before the departure time. Refund will be returned to you.",
  },
  {
    id: 3,
    question: "How can I check my booking status?",
    answer:
      "Log in to your account and visit My Bookings to view your booking details, ticket status, and travel information.",
  },
  {
    id: 4,
    question:
      "What should I do if my payment succeeds but the ticket isn't generated?",
    answer:
      "Wait a few minutes and refresh your booking history. If the ticket still doesn't appear, contact our support team with your transaction details.",
  },
  {
    id: 5,
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team through live chat, email, or our customer care helpline, available 24/7.",
  },
  {
    id: 6,
    question: "Can I modify passenger details after booking?",
    answer:
      "Minor changes may be allowed depending on the bus operator. Please check the booking details or contact customer support.",
  },
];

const AccordianSection = () => {
  return (
    <div className="bg-surface px-20 py-25 pb-40">
      <SectionHeader heading="Frequently Asked Questions">
        <Icon
          icon={<RiQuestionAnswerLine />}
          bgColor="bg-surface-dark"
          color="text-primary"
          size="small"
        />
      </SectionHeader>

      <div className="mt-20 mx-auto w-[70vw]">
        <Accordian faqs={faqs} />
      </div>
    </div>
  );
};

export default AccordianSection;
