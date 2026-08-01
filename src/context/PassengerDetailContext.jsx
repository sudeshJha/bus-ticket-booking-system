import React, { useContext, useState } from "react";

const PassengerDetailContext = useContext();

const PassengerDetailProvider = ({ children }) => {
  const [passengers, setPassengers] = useState([]);

  const addPassenger = (passenger) => {
    setPassengers((passengers) => [...passengers, passenger]);
  };

  const removeAllPassengers = () => {
    setPassengers([]);
  };

  return (
    <PassengerDetailContext.Provider
      value={{ passengers, addPassenger, removeAllPassengers }}
    >
      {children}
    </PassengerDetailContext.Provider>
  );
};

const usePassengerDetail = () => {
  const context = useContext(PassengerDetailContext);

  if (!context)
    throw new Error(
      "Passenger Detail context was used outside of PassengerDetailProvider",
    );
};

export { usePassengerDetail, PassengerDetailProvider };
