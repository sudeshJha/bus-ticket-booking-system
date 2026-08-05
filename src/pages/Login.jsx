import React, { useState } from "react";
import Logo from "../components/ui/navbar/Logo";
import Icon from "../components/util/Icon";
import { MdOutlineLock } from "react-icons/md";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../components/util/Button";
import ThemeButton from "../components/ui/navbar/ThemeButton";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/settings/profile");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((vis) => !vis);
  };

  return (
    <div className="h-screen bg-background flex pt-30 justify-center">
      <div className="px-20 py-15 text-center w-[40vw] h-fit rounded-2xl bg-surface shadow-xl">
        <div className="mx-auto w-fit">
          <Logo />
        </div>
        <div className="flex flex-col gap-4 mt-12">
          <h1 className="text-5xl font-bold text-text-primary">Welcome Back</h1>
          <span className="text-text-secondary text-[1.4rem] tracking-wider">
            Login to continue your journey
          </span>
        </div>

        <form className="mt-14 flex flex-col items-center gap-12">
          <div className="flex flex-col gap-2 items-start w-full">
            <label className="font-bold text-text-primary ml-2">Email</label>
            <div className="border border-border w-full flex items-center gap-2 justify-start py-1 pr-8 rounded-xl">
              <Icon
                icon={<FiUser />}
                size="small"
                color="text-text-secondary"
              />
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
            <div className="border border-border w-full flex items-center gap-2 justify-start py-1 pr-8 rounded-xl">
              <Icon
                icon={<MdOutlineLock />}
                size="small"
                color="text-text-secondary"
              />
              <input
                placeholder="Enter your password"
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

          <div>
            <span className="text-2xl text-text-primary">
              Don&apos;t have an account?{" "}
            </span>
            <a className="text-primary font-semibold ml-4">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
