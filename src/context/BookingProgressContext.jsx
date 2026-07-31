import React, { createContext, useContext, useState } from "react";

const BookingProgressContext = createContext();

const MAX_PROGRESS = 3;
const MIN_PROGRESS = 1;

function BookingProgressProvider({ children }) {
  const [progress, setProgress] = useState(1);

  const nextProgress = () => {
    if (progress < MAX_PROGRESS) {
      setProgress((p) => p + 1);
    }
  };

  const prevProgress = () => {
    if (progress > MIN_PROGRESS) {
      setProgress((p) => p - 1);
    }
  };

  const jumpProgress = (progressCount) => {
    if (progressCount < progress) {
      setProgress(progressCount);
    }
  };
  return (
    <BookingProgressContext.Provider
      value={{ progress, nextProgress, prevProgress, jumpProgress }}
    >
      {children}
    </BookingProgressContext.Provider>
  );
}

const useBookingProgress = () => {
  const context = useContext(BookingProgressContext);
  return context;
};

export { BookingProgressProvider, useBookingProgress };
