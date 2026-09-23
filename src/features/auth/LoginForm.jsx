import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/util/Icon";
import { MdOutlineLock, MdOutlineMail } from "react-icons/md";
import SubmitButton from "../../components/util/SubmitButton";
import FormError from "../../components/util/FormError";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit, formState } = useForm({
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
    setIsPasswordVisible((vis) => !vis);
  };
  return (
    <form
      className="mt-14 flex flex-col items-center gap-8"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
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
        <div className="flex justify-between w-full">
          <FormError message={errors?.password?.message} />
          <a
            className="ml-auto font-semibold text-xl text-secondary mt-2 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Forgot Password?
          </a>
        </div>
      </div>

      <div className="mt-6 w-full">
        <SubmitButton size="l">Signup</SubmitButton>
      </div>
    </form>
  );
};

export default LoginForm;
