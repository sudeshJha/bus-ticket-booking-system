import React, { useState } from "react";
import Icon from "../../components/util/Icon";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { MdOutlineLock, MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import SubmitButton from "../../components/util/SubmitButton";
import { useNavigate } from "react-router-dom";
import useSignup from "./useSignup";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import InputWrapper from "./InputWrapper";
import SpinnerMini from "../../components/ui/SpinnerMini";

const OperatorSignupForm = () => {
  const navigate = useNavigate();
  const { signingUp, signup, error } = useSignup();
  console.log(signingUp);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);

    signup(data, {
      onSuccess: () => {
        navigate("/home");
      },
    });
  };
  const onError = (error) => {
    console.log(error);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((vis) => !vis);
  };
  return (
    <form
      className="mt-14 flex flex-col items-center gap-8"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Name" error={errors?.name?.message}>
        <InputWrapper icon={<FiUser />}>
          <input
            placeholder="Enter your name"
            defaultValue=""
            id="name"
            {...register("name", {
              required: "This field is required",
            })}
          />
        </InputWrapper>
      </FormRow>

      <FormRow label="Phone" error={errors?.phone?.message}>
        <InputWrapper icon={<MdOutlinePhone />}>
          <input
            placeholder="Enter your phone"
            defaultValue=""
            id="phone"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^((\+91[-.\s]?)?\d{10}|0\d{3}[-.\s]?\d{7})$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
          />
        </InputWrapper>
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <InputWrapper icon={<MdOutlineMail />}>
          <input
            placeholder="Enter company email"
            defaultValue=""
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
        </InputWrapper>
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <InputWrapper
          icon={<MdOutlineLock />}
          password={
            <Icon
              icon={isPasswordVisible ? <FiEye /> : <FiEyeOff />}
              size="small"
              color="text-text-secondary"
              custom="cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          }
        >
          <input
            placeholder="Enter password"
            defaultValue=""
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9!@#$()_]{8,}$/,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </InputWrapper>
      </FormRow>

      <div className="mt-6 w-full">
        <SubmitButton size="l">
          {signingUp ? <SpinnerMini /> : "Signup"}
        </SubmitButton>
      </div>
    </form>
  );
};

export default OperatorSignupForm;
