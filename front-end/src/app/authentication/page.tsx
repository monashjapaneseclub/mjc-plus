"use client";
import { useState } from "react";
import { AuthMode } from "@/src/_enums/auth.enum";

import {
  Header,
  Divider,
  ThirdPartyAuth,
  AuthForm,
  Footer,
} from "./_components";
import SvgMjcLogo from "@/src/_components/svgs/MjcLogo";

interface AuthProps {
  mode: AuthMode;
  footerDescription: string;
  footerActions: string[];
}

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const SIGNUP: AuthProps = {
    mode: AuthMode.SIGNUP,
    footerDescription: "Already have an account?",
    footerActions: ["Login"],
  };
  const LOGIN: AuthProps = {
    mode: AuthMode.LOGIN,
    footerDescription: "Forgot your password?",
    footerActions: ["Forgot password", "Create account"],
  };

  const MODE = isSignUp ? SIGNUP.mode : LOGIN.mode;

  return (
    <div className="h-full w-full flex-col items-center bg-[#f5f4f7]">
      {/* ==== MJC Logo ==== */}
      <SvgMjcLogo className="size-25 translate-y-1/2 transform" />
      {/* ==== Card ==== */}
      <div className="w-xs flex-col items-center rounded-2xl bg-white py-12 sm:w-lg">
        {/* ==== Content ==== */}
        <div className="w-4/5 flex-col items-center gap-3 sm:w-3/5">
          <Header mode={MODE} />
          <ThirdPartyAuth mode={MODE} />
          <Divider />
          <AuthForm mode={MODE} />
          <Footer isSignUp={isSignUp} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
