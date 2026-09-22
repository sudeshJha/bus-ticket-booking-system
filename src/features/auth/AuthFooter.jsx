import React from "react";
import { Link } from "react-router-dom";

const AuthFooter = ({ children, name, url }) => {
  return (
    <div className="mt-8">
      <span className="text-2xl text-text-primary">{children}</span>
      <Link className="text-primary font-semibold ml-4" to={url}>
        {name}
      </Link>
    </div>
  );
};

export default AuthFooter;
