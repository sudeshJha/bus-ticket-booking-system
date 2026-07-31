import React from "react";

const navs = [
  { id: 0, name: "Summary" },
  { id: 1, name: "Route" },
  { id: 2, name: "Bus Information" },
  { id: 3, name: "Bus Images" },
];

const BookingNavigation = ({ active, selectTab }) => {
  const activeClass = "border-primary text-primary";
  const nonActiveClass = "border-transparent text-text-primary";
  return (
    <ul className="flex items-center justify-evenly">
      {navs.map((nav, i) => (
        <li
          key={i}
          onClick={() => selectTab(i)}
          className={`${active === i ? activeClass : nonActiveClass} text-2xl border-b-3 border-primary cursor-pointer pb-2 font-bold`}
        >
          {nav.name}
        </li>
      ))}
    </ul>
  );
};

export default BookingNavigation;
