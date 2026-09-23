import React from "react";
import Logo from "../../components/ui/navbar/Logo";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen h-fit bg-primary/10 flex py-15 justify-center">
      <div className="px-20 py-10 text-center w-[40vw] h-fit rounded-2xl bg-surface shadow-xl">
        <div className="mx-auto w-fit scale-90">
          <Logo />
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <h1 className="text-5xl font-bold text-text-primary">{title}</h1>
          <span className="text-text-secondary text-[1.2rem] tracking-wider">
            {subtitle}
          </span>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
