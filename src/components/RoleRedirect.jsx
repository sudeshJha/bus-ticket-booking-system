import React from "react";
import { Navigate } from "react-router-dom";

const RoleRedirect = () => {
  const user = {
    userType: "operator",
  };

  return (
    <>
      {user.userType === "operator" && <Navigate to="/dashboard" />}
      {user.userType === "passenger" && <Navigate to="/home" />}
    </>
  );
};

export default RoleRedirect;
