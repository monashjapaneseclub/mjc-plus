"use client";
import { SignUpFooter } from ".././_components";
import AuthPageLayout from "../_components/AuthPageLayout";
import { AuthMode } from "@/src/_enums/authMode.enum";
import SignUpForm from "../_components/auth-form/SignUpForm";

const AuthPage = () => (
  <AuthPageLayout
    mode={AuthMode.SIGNUP}
    form={<SignUpForm />}
    footer={<SignUpFooter />}
  />
);

export default AuthPage;
