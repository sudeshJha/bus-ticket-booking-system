import React from "react";
import { Navigate } from "react-router-dom";

const IndexPage = () => {
  const user = {
    userType: "passenger",
  };

  return (
    <>
      {user.userType === "operator" && <Navigate to="/dashboard" />}
      {user.userType === "passenger" && <Navigate to="/home" />}
    </>
  );
};

export default IndexPage;
