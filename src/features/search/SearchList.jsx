import React from "react";
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
  },
  {
    id: 2,
    operator: "ZingBus",
    busName: "Bharat Benz AC Sleeper",
    departure: {
      time: "23:00",
      city: "Delhi",
    },
    arrival: {
      time: "06:30",
      city: "Jaipur",
    },
    duration: "7h 30m",
    fare: {
      price: 699,
    },
    seats: {
      available: 12,
      sleeper: 18,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Blanket"],
  },
  {
    id: 3,
    operator: "IntrCity SmartBus",
    busName: "AC Sleeper",
    departure: {
      time: "21:15",
      city: "Delhi",
    },
    arrival: {
      time: "04:45",
      city: "Jaipur",
    },
    duration: "7h 30m",
    fare: {
      price: 749,
    },
    seats: {
      available: 10,
      sleeper: 16,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Reading Light"],
  },
  {
    id: 4,
    operator: "Laxmi Holidays",
    busName: "Mercedes Benz AC Sleeper",
    departure: {
      time: "20:45",
      city: "Delhi",
    },
    arrival: {
      time: "04:15",
      city: "Jaipur",
    },
    duration: "7h 30m",
    fare: {
      price: 899,
    },
    seats: {
      available: 6,
      sleeper: 12,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Blanket", "USB Charging", "Water Bottle"],
  },
  {
    id: 5,
    operator: "Shree Ganesh Travels",
    busName: "AC Semi Sleeper",
    departure: {
      time: "18:30",
      city: "Delhi",
    },
    arrival: {
      time: "01:15",
      city: "Jaipur",
    },
    duration: "6h 45m",
    fare: {
      price: 599,
    },
    seats: {
      available: 18,
      sleeper: 8,
      seater: 28,
    },
    amenities: ["Charging", "Water Bottle"],
  },
  {
    id: 6,
    operator: "Mahadev Travels",
    busName: "Ashok Leyland AC Sleeper",
    departure: {
      time: "19:30",
      city: "Delhi",
    },
    arrival: {
      time: "02:20",
      city: "Jaipur",
    },
    duration: "6h 50m",
    fare: {
      price: 679,
    },
    seats: {
      available: 15,
      sleeper: 20,
      seater: 0,
    },
    amenities: ["Charging", "Blanket", "Reading Light"],
  },
  {
    id: 7,
    operator: "RSRTC",
    busName: "Non AC Express",
    departure: {
      time: "17:45",
      city: "Delhi",
    },
    arrival: {
      time: "00:30",
      city: "Jaipur",
    },
    duration: "6h 45m",
    fare: {
      price: 449,
    },
    seats: {
      available: 24,
      sleeper: 0,
      seater: 40,
    },
    amenities: ["Charging"],
  },
  {
    id: 8,
    operator: "Orange Travels",
    busName: "Volvo AC Sleeper",
    departure: {
      time: "22:45",
      city: "Delhi",
    },
    arrival: {
      time: "06:15",
      city: "Jaipur",
    },
    duration: "7h 30m",
    fare: {
      price: 849,
    },
    seats: {
      available: 9,
      sleeper: 15,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Blanket", "Water Bottle"],
  },
  {
    id: 9,
    operator: "Vijayanand Travels",
    busName: "Scania AC Sleeper",
    departure: {
      time: "21:50",
      city: "Delhi",
    },
    arrival: {
      time: "05:20",
      city: "Jaipur",
    },
    duration: "7h 30m",
    fare: {
      price: 929,
    },
    seats: {
      available: 7,
      sleeper: 14,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Blanket", "Water Bottle", "TV"],
  },
  {
    id: 10,
    operator: "Purple Travels",
    busName: "AC Sleeper Coach",
    departure: {
      time: "23:30",
      city: "Delhi",
    },
    arrival: {
      time: "07:00",
      city: "Jaipur",
    },
    duration: "7h 30m",
    fare: {
      price: 779,
    },
    seats: {
      available: 11,
      sleeper: 18,
      seater: 0,
    },
    amenities: ["WiFi", "Charging", "Blanket", "USB Charging"],
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
