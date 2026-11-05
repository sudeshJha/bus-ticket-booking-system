import React from "react";

import BusLayoutForm from "./BusLayoutForm";
import BusInformationForm from "./BusInformationForm";
import BusFeaturesForm from "./BusFeaturesForm";
import { useForm } from "react-hook-form";
import SubmitButton from "../../components/util/SubmitButton";
import useAddBus from "./useAddBus";
import Spinner from "../../components/ui/Spinner";

const AddBusFormLayout = () => {
  const { addBus, addingBus } = useAddBus();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    addBus(data);
    console.log(data);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className="p-8 ">
      <form
        className="flex flex-col gap-16"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <BusInformationForm errors={errors} register={register} />
        <BusLayoutForm errors={errors} register={register} />
        <BusFeaturesForm errors={errors} register={register} />
        <SubmitButton size="l">
          {addingBus ? <Spinner /> : "Add Bus"}
        </SubmitButton>
      </form>
    </div>
  );
};

export default AddBusFormLayout;
