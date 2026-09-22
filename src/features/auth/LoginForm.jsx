import React, { useState } from "react";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/util/Icon";
import { MdOutlineLock } from "react-icons/md";
import Button from "../../components/util/Button";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/settings/profile");
  };

  const togglePasswordVisibility = () => {
    if (!password) return;
    setIsPasswordVisible((vis) => !vis);
  };
  return (
    <form className="mt-14 flex flex-col items-center gap-12">
      <div className="flex flex-col gap-2 items-start w-full">
        <label className="font-bold text-text-primary ml-2">Email</label>
        <div className="border border-border w-full flex items-center gap-2 justify-start py-1 pr-8 rounded-xl text-2xl">
          <Icon icon={<FiUser />} size="small" color="text-text-secondary" />
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <a
          className="ml-auto font-semibold text-xl text-secondary mt-2 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Forgot Password?
        </a>
      </div>

      <Button
        custom="text-primary-anti bg-primary w-full py-4 text-3xl rounded-xl tracking-wide hover:bg-primary-hover"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
