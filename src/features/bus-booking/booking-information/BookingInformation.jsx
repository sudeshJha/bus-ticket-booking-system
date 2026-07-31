import React, { useState } from "react";
import BookingNavigation from "./BookingNavigation";
import BookingSummary from "./BookingSummary";
import BookingRoute from "./BookingRoute";
import BookingBusInfo from "./BookingBusInfo";
import BookingBusImages from "./BookingBusImages";

const BookingInformation = ({ children }) => {
  const [active, setActive] = useState(0);

  const selectTab = (id) => {
    if (id === active) return;

    setActive(id);
  };

  return (
    <div className="p-10 border-2 border-border rounded-2xl h-fit bg-background">
      <BookingNavigation active={active} selectTab={selectTab} />
      <div className="mt-20">
        {active === 0 && <BookingSummary />}
        {active === 1 && <BookingRoute />}
        {active === 2 && <BookingBusInfo />}
        {active === 3 && <BookingBusImages />}
      </div>
    </div>
  );
};

export default BookingInformation;
