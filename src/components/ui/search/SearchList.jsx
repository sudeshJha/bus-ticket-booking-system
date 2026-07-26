import React from "react";
import Button from "../../util/Button";
import SearchItem from "./SearchItem";

const buses = [
  {
    id: 1,
    operator: "Royal Travels",
    busName: "Volvo Multi Axle AC Sleeper",
    departure: {
      time: "22:30",
      city: "Delhi",
    },
    arrival: {
      time: "05:15",
      city: "Jaipur",
    },
    duration: "6h 45m",
    fare: {
      price: 799,
    },
    seats: {
      available: 8,
      sleeper: 14,
      seater: 20,
    },
    amenities: ["WiFi", "Charging", "Blanket", "Water Bottle"],
    bookedToday: 235,
    image: "/assets/buses/royal-travels.png",
  },
  {
    id: 2,
    operator: "ZingBus",
    busName: "Bharat Benz AC Sleeper",
    departure: {
      time: "23:45",
      city: "Delhi",
    },
    arrival: {
      time: "07:15",
      city: "Jaipur",
    },
    duration: "7h 30m",
    fare: {
      price: 649,
    },
    seats: {
      available: 12,
      sleeper: 18,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Blanket"],
    bookedToday: 198,
    image: "/assets/buses/zingbus.png",
  },
  {
    id: 3,
    operator: "IntrCity SmartBus",
    busName: "AC Seater Sleeper",
    departure: {
      time: "21:30",
      city: "Delhi",
    },
    arrival: {
      time: "04:45",
      city: "Jaipur",
    },
    duration: "7h 15m",
    fare: {
      price: 599,
    },
    seats: {
      available: 16,
      sleeper: 10,
      seater: 24,
    },
    amenities: ["WiFi", "Charging", "Reading Light"],
    bookedToday: 142,
    image: "/assets/buses/intrcity.png",
  },
  {
    id: 4,
    operator: "RSRTC",
    busName: "Non AC Express",
    departure: {
      time: "18:30",
      city: "Delhi",
    },
    arrival: {
      time: "01:20",
      city: "Jaipur",
    },
    duration: "6h 50m",
    fare: {
      price: 450,
    },
    seats: {
      available: 22,
      sleeper: 0,
      seater: 40,
    },
    amenities: ["Charging"],
    bookedToday: 94,
    image: "/assets/buses/rsrtc.png",
  },
  {
    id: 5,
    operator: "FlixBus",
    busName: "Volvo AC Sleeper",
    departure: {
      time: "20:15",
      city: "Delhi",
    },
    arrival: {
      time: "03:45",
      city: "Jaipur",
    },
    duration: "7h 30m",
    fare: {
      price: 999,
    },
    seats: {
      available: 5,
      sleeper: 16,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Blanket", "Water Bottle", "Entertainment"],
    bookedToday: 318,
    image: "/assets/buses/flixbus.png",
  },
  {
    id: 6,
    operator: "Mahadev Travels",
    busName: "Ashok Leyland AC Sleeper",
    departure: {
      time: "19:45",
      city: "Delhi",
    },
    arrival: {
      time: "02:30",
      city: "Jaipur",
    },
    duration: "6h 45m",
    fare: {
      price: 699,
    },
    seats: {
      available: 14,
      sleeper: 20,
      seater: 0,
    },
    amenities: ["Charging", "Blanket", "Reading Light"],
    bookedToday: 117,
    image: "/assets/buses/mahadev.png",
  },
  {
    id: 7,
    operator: "Laxmi Holidays",
    busName: "Mercedes AC Sleeper",
    departure: {
      time: "22:00",
      city: "Delhi",
    },
    arrival: {
      time: "05:40",
      city: "Jaipur",
    },
    duration: "7h 40m",
    fare: {
      price: 849,
    },
    seats: {
      available: 9,
      sleeper: 18,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Blanket", "USB Charging", "Water Bottle"],
    bookedToday: 201,
    image: "/assets/buses/laxmi.png",
  },
  {
    id: 8,
    operator: "Shree Ganesh Travels",
    busName: "AC Semi Sleeper",
    departure: {
      time: "17:45",
      city: "Delhi",
    },
    arrival: {
      time: "00:15",
      city: "Jaipur",
    },
    duration: "6h 30m",
    fare: {
      price: 549,
    },
    seats: {
      available: 18,
      sleeper: 8,
      seater: 28,
    },
    amenities: ["Charging", "Water Bottle"],
    bookedToday: 83,
    image: "/assets/buses/shree-ganesh.png",
  },
];

const SearchList = () => {
  return (
    <div className="bg-background flex flex-col gap-10 p-10">
      {buses.map((bus) => {
        return <SearchItem key={bus.id} bus={bus} />;
      })}
    </div>
  );
};

export default SearchList;
