import React from "react";
import AuthLayout from "../features/auth/AuthLayout";
import AuthFooter from "../features/auth/AuthFooter";
import OperatorSignupForm from "../features/auth/OperatorSignupForm";

const OperatorSignupPage = () => {
  return (
    <>
      <AuthLayout
        title="Become an Operator"
        subtitle="Register your company with us and go Nimbus"
      >
        <OperatorSignupForm />
        <AuthFooter name="Login" url={"/login"}>
          Already have an operator account?
        </AuthFooter>
      </AuthLayout>
    </>
  );
};

export default OperatorSignupPage;
