import React from "react";
import AuthLayout from "../features/auth/AuthLayout";
import AuthFooter from "../features/auth/AuthFooter";
import LoginForm from "../features/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <AuthLayout
        title="Welcome Back!"
        subtitle="Login to continue your journey"
      >
        <LoginForm />
        <AuthFooter name="Signup" url={"/signup"}>
          Don&apos;t have an account?
        </AuthFooter>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
