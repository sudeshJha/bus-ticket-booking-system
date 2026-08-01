import React, { createContext, useContext, useState } from "react";

const PassengerDetailContext = createContext();

const PassengerDetailProvider = ({ children }) => {
  const [passengers, setPassengers] = useState([]);

  const addPassenger = (passenger) => {
    setPassengers((passengers) => [...passengers, passenger]);
  };

  const removeAllPassengers = () => {
    setPassengers([]);
  };

  const updatePassenger = (passenger) => {
    setPassengers([
      ...passengers.map((ps) => (ps.id === passenger.id ? passenger : ps)),
    ]);
  };

  return (
    <PassengerDetailContext.Provider
      value={{ passengers, addPassenger, removeAllPassengers, updatePassenger }}
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
  return context;
};

export { usePassengerDetail, PassengerDetailProvider };
