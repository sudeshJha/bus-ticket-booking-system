import React from "react";
import AuthLayout from "../features/auth/AuthLayout";
import AuthFooter from "../features/auth/AuthFooter";
import SignupForm from "../features/auth/SignupForm";

const SignupPage = () => {
  return (
    <>
      <AuthLayout
        title="Create your account"
        subtitle="Join us and start you journey with ease"
      >
        <SignupForm />
        <AuthFooter name="Login" url={"/login"}>
          Already have an account?
        </AuthFooter>
      </AuthLayout>
    </>
  );
};

// Email, Password, Name, phone
export default SignupPage;
