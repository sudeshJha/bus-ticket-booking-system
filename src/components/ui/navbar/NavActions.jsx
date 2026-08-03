import React, { useState } from "react";
import Button from "../../util/Button";
import ThemeButton from "./ThemeButton";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../util/ButtonIcon";
import { TbLogout } from "react-icons/tb";
import Icon from "../../util/Icon";
import { CgProfile } from "react-icons/cg";

const NavActions = () => {
  const navigate = useNavigate();

  const fakeUser = {
    name: "Sudesh Jha",
    profile: "",
  };

  const [user, setUser] = useState(fakeUser);

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  const handleLogout = () => setUser(undefined);

  return (
    <div className="flex items-center justify-center gap-10">
      {!user ? (
        <>
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
        </>
      ) : (
        <>
          <ThemeButton />

          <div className="flex items-center justify-center gap-4 mr-8 ml-4">
            <div className="border-2 border-text-secondary h-14 w-14 rounded-full overflow-hidden">
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
