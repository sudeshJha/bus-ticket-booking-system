import React from "react";

import BusLayoutForm from "./BusLayoutForm";
import BusInformationForm from "./BusInformationForm";
import BusFeaturesForm from "./BusFeaturesForm";
import { useForm } from "react-hook-form";

const AddBusFormLayout = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  return (
    <div className="p-8 ">
      <form className="flex flex-col gap-16">
        <BusInformationForm errors={errors} register={register} />
        <BusLayoutForm errors={errors} register={register} />
        <BusFeaturesForm errors={errors} register={register} />
      </form>
    </div>
  );
};

export default AddBusFormLayout;
