"use client";
import { LoginFooter } from ".././_components";
import AuthPageLayout from "../_components/AuthPageLayout";
import { AuthMode } from "@/src/_enums/authMode.enum";
import LoginForm from "../_components/auth-form/LoginForm";

const AuthPage = () => (
  <AuthPageLayout
    mode={AuthMode.LOGIN}
    form={<LoginForm />}
    footer={<LoginFooter />}
  />
);

export default AuthPage;
