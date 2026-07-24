import React from "react";
import Button from "../../util/Button";
import ThemeButton from "./ThemeButton";
import { useNavigate } from "react-router-dom";

const NavActions = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <div className="flex items-center justify-center gap-10">
      <ThemeButton />
      <Button
        type="primary"
        size="small"
        style="text-gray-100"
        onClick={handleLogin}
      >
        Login
      </Button>

      <Button
        type="secondary"
        size="small"
        style="text-gray-100"
        onClick={handleSignup}
      >
        Signup
      </Button>
    </div>
  );
};

export default NavActions;
