import React, { useState } from "react";
import Icon from "../../components/util/Icon";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { MdOutlineLock, MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../components/util/SubmitButton";
import { useForm } from "react-hook-form";
import FormError from "../../components/util/FormError";

const SignupForm = () => {
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };

  const togglePasswordVisibility = () => {
    getValues;
    setIsPasswordVisible((vis) => !vis);
  };
  return (
    <form
      className="mt-14 flex flex-col items-center gap-8"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col gap-2 items-start w-full">
        <label className="font-bold text-text-primary ml-2">Name</label>
        <div className="border border-border w-full flex items-center gap-2 justify-start py-1 pr-8 rounded-xl text-2xl">
          <Icon icon={<FiUser />} size="small" color="text-text-secondary" />
          <input
            placeholder="Enter your name"
            defaultValue=""
            id="name"
            {...register("name", {
              required: "This field is required",
            })}
            className="outline-none text-text-primary w-full"
          />
        </div>
        <FormError message={errors?.name?.message} />
      </div>

      <div className="flex flex-col gap-2 items-start w-full">
        <label className="font-bold text-text-primary ml-2">Phone</label>
        <div className="border border-border w-full flex items-center gap-2 justify-start py-1 pr-8 rounded-xl text-2xl">
          <Icon
            icon={<MdOutlinePhone />}
            size="small"
            color="text-text-secondary"
          />
          <input
            placeholder="Enter your phone number"
            defaultValue=""
            id="phone"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^((\+91[-.\s]?)?\d{10}|0\d{3}[-.\s]?\d{7})$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
            className="outline-none text-text-primary w-full"
          />
        </div>
        <FormError message={errors?.phone?.message} />
      </div>

      <div className="flex flex-col gap-2 items-start w-full">
        <label className="font-bold text-text-primary ml-2">Email</label>
        <div className="border border-border w-full flex items-center gap-2 justify-start py-1 pr-8 rounded-xl text-2xl">
          <Icon
            icon={<MdOutlineMail />}
            size="small"
            color="text-text-secondary"
          />
          <input
            placeholder="Enter your email"
            defaultValue=""
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
            className="outline-none text-text-primary w-full"
          />
        </div>
        <FormError message={errors?.email?.message} />
      </div>

      <div className="flex flex-col gap-2 items-start w-full">
        <label className="font-bold text-text-primary ml-2">Password</label>
        <div className="border border-border w-full flex items-center gap-2 justify-start py-1 pr-8 rounded-xl text-2xl">
          <Icon
            icon={<MdOutlineLock />}
            size="small"
            color="text-text-secondary"
          />
          <input
            placeholder="Enter password"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9!@#$()_]{8,}$/,
                message: "Password must be at least 8 characters",
              },
            })}
            defaultValue=""
            className="outline-none text-text-primary w-full"
          />
          <Icon
            icon={isPasswordVisible ? <FiEye /> : <FiEyeOff />}
            size="small"
            color="text-text-secondary"
            custom="cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
        <FormError message={errors?.password?.message} />
      </div>

      <div className="mt-6 w-full">
        <SubmitButton size="l">Signup</SubmitButton>
      </div>
    </form>
  );
};

export default SignupForm;
