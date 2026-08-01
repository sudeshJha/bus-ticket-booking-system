import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Button from "../../../components/util/Button";
import { MdOutlineEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const PassengerForm = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Male");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !gender) return;
    setIsAdded(true);
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
          {isAdded ? (
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
