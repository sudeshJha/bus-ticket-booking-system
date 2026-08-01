import React from "react";
import InputField from "./InputField";
import Button from "../../../components/util/Button";

const PassengerForm = () => {
  return (
    <form className="border border-border px-8 py-6 rounded-xl">
      <InputField type="text" label="Name" />
      <div className="flex items-center justify-between gap-10">
        <InputField type="number" label="Age" />
        <InputField
          type="select"
          label="Gender"
          options={["Male", "Female", "Other"]}
        />
      </div>
      <Button custom="bg-primary text-primary-anti w-full  py-2 text-xl mx-auto rounded-xl font-semibold hover:bg-primary-hover hover:-translate-y-1">
        + Add Passenger
      </Button>
    </form>
  );
};

export default PassengerForm;
