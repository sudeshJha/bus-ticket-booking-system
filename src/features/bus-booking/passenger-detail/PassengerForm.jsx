import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Button from "../../../components/util/Button";
import { MdOutlineEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useBusBooking } from "../../../context/BusBookingContext";

const PassengerForm = ({ passengerNo: id }) => {
  const { addPassenger, passengers, updatePassenger } = useBusBooking();
  const [isAdded, setIsAdded] = useState(false);

  const passenger = passengers[id];

  const [name, setName] = useState(passenger?.name || "");
  const [age, setAge] = useState(passenger?.age || NaN);
  const [gender, setGender] = useState(passenger?.gender || "Male");

  const handleUpdate = (passenger) => {
    updatePassenger(passenger);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !gender) return;

    if (isAdded || passenger) return handleUpdate({ id, name, age, gender });

    setIsAdded(true);
    addPassenger({ id, name, age, gender });
  };

  return (
    <form className="border border-border px-8 py-6 rounded-xl">
      <InputField type="text" label="Name" value={name} setValue={setName} />
      <div className="flex items-center justify-between gap-10">
        <InputField type="number" label="Age" value={age} setValue={setAge} />
        <InputField
          type="select"
          label="Gender"
          options={["Male", "Female", "Other"]}
          value={gender}
          setValue={setGender}
        />
      </div>
      <Button
        custom="bg-primary text-primary-anti w-full  py-3 text-xl mx-auto rounded-xl font-semibold hover:bg-primary-hover hover:-translate-y-1"
        onClick={handleSubmit}
      >
        <span className="flex mx-auto items-center w-fit  text-primary-anti gap-2">
          {passenger ? (
            <>
              <MdOutlineEdit />
              <p>Modify Passenger</p>
            </>
          ) : (
            <>
              <FaPlus />
              <p>Add Passenger</p>
            </>
          )}
        </span>
      </Button>
    </form>
  );
};

export default PassengerForm;
