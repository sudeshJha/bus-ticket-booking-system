import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import Spinner from "../components/ui/Spinner";

const IndexPage = () => {
  const { user, gettingUser } = useUser();

  if (gettingUser) {
    return <Spinner />;
  }

  const userType = user?.userInfo?.userType;

  return (
    <>
      {userType === "OPERATOR" && <Navigate to="/dashboard" />}
      {(userType === "PASSENGER" || !userType) && <Navigate to="/home" />}
    </>
  );
};

export default IndexPage;
