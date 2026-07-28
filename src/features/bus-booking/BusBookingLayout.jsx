import React, { useState } from "react";
import BookingProgress from "./BookingProgress";
import BusLayoutSection from "./BusLayoutSection";
import PassengerDetailSection from "./PassengerDetailSection";
import PaymentSection from "./PaymentSection";
import BookingSummary from "./BookingSummary";

const BusBookingLayout = () => {
  const [progress, setProgress] = useState(1);

  const nextProgress = () => {
    if (progress < 3) {
      setProgress((p) => p + 1);
    }
  };

  const prevProgress = () => {
    if (progress > 1) {
      setProgress((p) => p - 1);
    }
  };

  const jumpProgress = (progressCount) => {
    if (progressCount < progress) {
      setProgress(progressCount);
    }
  };

  const progressInfo = {
    progress,
    nextProgress,
    prevProgress,
    jumpProgress,
  };

  return (
    <div>
      <BookingProgress progressInfo={progressInfo} />
      <div className="my-10 mx-15  grid grid-cols-[2fr_3fr] gap-15">
        <div className="p-10 border-2 border-border rounded-2xl bg-background">
          {progress === 1 && <BusLayoutSection />}
          {progress === 2 && <PassengerDetailSection />}
          {progress === 3 && <PaymentSection />}
        </div>
        <div className="p-10 border-2 border-border rounded-2xl h-100 bg-background">
          <BookingSummary />
        </div>
      </div>
    </div>
  );
};

export default BusBookingLayout;
