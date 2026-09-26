import React from "react";
import AuthLayout from "../features/auth/AuthLayout";
import SignupForm from "../features/auth/SignupForm";
import AuthFooter from "../features/auth/AuthFooter";

const OperatorSignupPage = () => {
  return (
    <>
      <AuthLayout
        title="Become an Operator"
        subtitle="Register your company with us and go Nimbus"
      >
        <SignupForm />
        <AuthFooter name="Login" url={"/login"}>
          Already have an operator account?
        </AuthFooter>
      </AuthLayout>
    </>
  );
};

export default OperatorSignupPage;
