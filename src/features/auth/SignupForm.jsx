import React, { useState } from "react";
import Icon from "../../components/util/Icon";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { MdOutlineLock, MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../../components/util/SubmitButton";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = () => {};

  const togglePasswordVisibility = () => {
    getValues;
    setIsPasswordVisible((vis) => !vis);
  };
  return (
    <form
      className="mt-14 flex flex-col items-center gap-12"
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
            })}
            className="outline-none text-text-primary w-full"
          />
        </div>
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
            })}
            className="outline-none text-text-primary w-full"
          />
        </div>
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
        <Link
          className="ml-auto font-semibold text-xl text-secondary mt-2 cursor-pointer"
          to="/"
        >
          Forgot Password?
        </Link>
      </div>

      <SubmitButton size="l">Signup</SubmitButton>
    </form>
  );
};

export default SignupForm;
