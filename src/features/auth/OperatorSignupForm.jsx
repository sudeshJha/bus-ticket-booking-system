import React, { useState } from "react";
import Icon from "../../components/util/Icon";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import {
  MdOutlineDescription,
  MdOutlineLock,
  MdOutlineMail,
  MdOutlinePhone,
} from "react-icons/md";
import SubmitButton from "../../components/util/SubmitButton";
import { useNavigate } from "react-router-dom";
import useSignup from "./useSignup";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import InputWrapper from "./InputWrapper";
import SpinnerMini from "../../components/ui/SpinnerMini";
import { PiBuildingOffice } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";

const OperatorSignupForm = () => {
  const navigate = useNavigate();
  const { signingUp, signup, error } = useSignup();

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
            type="text"
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
            type="tel"
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
            type="email"
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

      <FormRow label="Gender" error={errors?.gender?.message} htmlFor="gender">
        <InputWrapper icon={<MdOutlineMail />}>
          <select
            name="gender"
            id="gender"
            defaultValue=""
            {...register("gender")}
          >
            <option value="" disabled hidden className="bg-primary">
              Please select gender
            </option>
            {["male", "female", "other"].map((gender) => {
              return (
                <option
                  value={gender}
                  key={gender}
                  className="bg-surface-dark text-text-primary"
                >
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </option>
              );
            })}
          </select>
        </InputWrapper>
      </FormRow>

      <FormRow label="Address" error={errors?.address?.message}>
        <InputWrapper icon={<PiBuildingOffice />}>
          <input
            type="text"
            placeholder="Enter company address"
            defaultValue=""
            id="address"
            {...register("address", {
              required: "This field is required",
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

      <FormRow
        label="Seater Base Price"
        error={errors?.seaterBasePrice?.message}
      >
        <InputWrapper icon={<TbMoneybag />}>
          <input
            type="number"
            step="any"
            placeholder="Enter seater base price"
            defaultValue=""
            id="seaterBasePrice"
            {...register("seaterBasePrice", {
              required: "This field is required",
              validate: (value) =>
                value > 0 || "Price should be greater than zero",
              valueAsNumber: true,
            })}
          />
        </InputWrapper>
      </FormRow>

      <FormRow
        label="Sleeper Base Price"
        error={errors?.sleeperBasePrice?.message}
      >
        <InputWrapper icon={<TbMoneybag />}>
          <input
            type="number"
            step="any"
            placeholder="Enter sleeper base price address"
            defaultValue=""
            id="sleeperBasePrice"
            {...register("sleeperBasePrice", {
              required: "This field is required",
              validate: (value) =>
                value > 0 || "Price should be greater than zero",
              valueAsNumber: true,
            })}
          />
        </InputWrapper>
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          className="border border-border w-full flex items-center gap-2 justify-start p-4 rounded-xl text-2xl outline-none text-text-primary"
          placeholder="Enter company description"
          defaultValue=""
          id="description"
          {...register("description")}
        ></textarea>
      </FormRow>

      <FormRow label="License" error={errors?.address?.message}>
        <input
          id="license"
          type="file"
          accept="application/*"
          {...register("license", {
            required: "This  filed is required",
          })}
          className="text-2xl w-full text-text-primary file:mr-4 file:cursor-pointer border border-border rounded-xl  file:border-0 file:rounded-l-xl file:bg-surface-dark file:px-6 file:py-4 file:text-text-primary  hover:file:bg-text-secondary/70"
        />
      </FormRow>

      <FormRow label="Banner" error={errors?.address?.message}>
        <input
          id="banner"
          type="file"
          accept="image/*"
          {...register("banner")}
          className="text-2xl w-full text-text-primary file:mr-4 file:cursor-pointer border border-border rounded-xl  file:border-0 file:rounded-l-xl file:bg-surface-dark file:px-6 file:py-4 file:text-text-primary  hover:file:bg-text-secondary/70"
        />
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
