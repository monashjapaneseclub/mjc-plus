"use client";
import { useState } from "react";
import { Header, Divider, ThirdPartyAuth, LoginFooter } from ".././_components";
import SvgMjcLogo from "@/src/_components/svgs/MjcLogo";
import { AuthMode } from "@/src/_enums/authMode.enum";
import LoginForm from "../_components/auth-form/LoginForm";

interface AuthProps {
  mode: AuthMode;
  footerDescription: string;
  footerActions: string[];
}

const AuthPage = () => {
  const LOGIN: AuthProps = {
    mode: AuthMode.LOGIN,
    footerDescription: "Forgot your password?",
    footerActions: ["Forgot password", "Create account"],
  };

  const MODE: AuthMode = LOGIN.mode;

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#f5f4f7]">
      {/* ==== MJC Logo ==== */}
      <SvgMjcLogo className="size-25 translate-y-1/2 transform" />
      {/* ==== Card ==== */}
      <div className="flex w-xs flex-col items-center rounded-2xl bg-white py-12 sm:w-lg">
        {/* ==== Content ==== */}
        <div className="flex w-4/5 flex-col items-center gap-3 sm:w-3/5">
          <Header mode={MODE} />
          <ThirdPartyAuth mode={MODE} />
          <Divider />
          <LoginForm />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
