import React from "react";
import BusRoute from "../../../components/ui/route/BusRoute";

const BookingRoute = () => {
  const route = {
    id: 1,
    title: "Jabalpur to Bhopal",
    totalDistance: 470,
    isActive: true,

    sourceCity: {
      id: 17,
      name: "Jabalpur",
      state: { name: "Madhya Pradesh" },
    },

    destinationCity: {
      id: 10,
      name: "Bhopal",
      state: { name: "Madhya Pradesh" },
    },

    midCities: [
      {
        id: 13,
        stopSequence: 1,
        distanceFromSource: 90,
        timeFromSource: 80,
        haltTime: 20,
        city: { name: "Kareli", state: { name: "Madhya Pradesh" } },
      },
      {
        id: 46,
        stopSequence: 2,
        timeFromSource: 115,
        distanceFromSource: 125,
        haltTime: 15,
        city: { name: "Gadarwara", state: { name: "Madhya Pradesh" } },
      },
      {
        id: 33,
        stopSequence: 3,
        distanceFromSource: 145,
        timeFromSource: 150,
        haltTime: 15,
        city: { name: "Narsinghpur", state: { name: "Madhya Pradesh" } },
      },
      {
        id: 14,
        stopSequence: 4,
        distanceFromSource: 200,
        timeFromSource: 175,
        haltTime: 10,
        city: { name: "Tendukeda", state: { name: "Madhya Pradesh" } },
      },
      {
        id: 23,
        stopSequence: 5,
        distanceFromSource: 295,
        timeFromSource: 260,
        haltTime: 20,
        city: { name: "Sagar", state: { name: "Madhya Pradesh" } },
      },
      {
        id: 29,
        stopSequence: 6,
        distanceFromSource: 340,
        timeFromSource: 300,
        haltTime: 10,
        city: { name: "Rahatgarh", state: { name: "Madhya Pradesh" } },
      },
      {
        id: 5,
        stopSequence: 7,
        distanceFromSource: 385,
        timeFromSource: 335,
        haltTime: 10,
        city: { name: "Begumganj", state: { name: "Madhya Pradesh" } },
      },
      {
        id: 26,
        stopSequence: 8,
        distanceFromSource: 445,
        timeFromSource: 400,
        haltTime: 15,
        city: { name: "Raisen", state: { name: "Madhya Pradesh" } },
      },
    ],
  };

  return (
    <div>
      <BusRoute route={route} />
    </div>
  );
};

export default BookingRoute;
