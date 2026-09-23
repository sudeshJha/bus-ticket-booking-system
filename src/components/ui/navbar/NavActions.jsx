import React from "react";
import Button from "../../util/Button";
import ThemeButton from "./ThemeButton";
import { useNavigate } from "react-router-dom";

const NavActions = () => {
  const navigate = useNavigate();

  let user = {
    name: "Sudesh Jha",
  };

  user = undefined;

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <div className="flex items-center justify-center gap-10">
      <ThemeButton />
      {!user ? (
        <>
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
        </>
      ) : (
        <>
          <div className="flex items-center justify-center gap-4 mr-8 ml-4">
            <div
              className="border border-text-secondary h-14 w-14 rounded-full overflow-hidden cursor-pointer"
              onClick={() => navigate("/settings/profile")}
            >
              <img
                src={
                  user?.profile ? user.profile : "src/assets/default_user.jpg"
                }
              />
            </div>
            <h1 className="text-text-primary tracking-wide font-bold">
              {user.name.split(" ")[0]}
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default NavActions;
