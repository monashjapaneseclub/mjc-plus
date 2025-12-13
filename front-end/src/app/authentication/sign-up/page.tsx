"use client";
import { useState } from "react";
import {
  Header,
  Divider,
  ThirdPartyAuth,
  SignUpFooter,
} from ".././_components";
import SvgMjcLogo from "@/src/_components/svgs/MjcLogo";
import { AuthMode } from "@/src/_enums/authMode.enum";
import { AuthModeContext } from "@/src/_contexts/AuthModeContext";
import type { AuthModeStateProps } from "@/src/_types/AuthModeStateProps";
import SignUpForm from "../_components/auth-form/SignUpForm";

interface AuthProps {
  mode: AuthMode;
  footerDescription: string;
  footerActions: string[];
}

const AuthPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authModeState: AuthModeStateProps = {
    isSignedIn: isSignedIn,
    setIsSignedIn: setIsSignedIn,
  };

  const SIGNUP: AuthProps = {
    mode: AuthMode.SIGNUP,
    footerDescription: "Already have an account?",
    footerActions: ["Login"],
  };
  const MODE: AuthMode = SIGNUP.mode;

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#f5f4f7]">
      {/* ==== MJC Logo ==== */}
      <SvgMjcLogo className="size-25 translate-y-1/2 transform" />
      {/* ==== Card ==== */}
      <div className="flex w-xs flex-col items-center rounded-2xl bg-white py-12 sm:w-lg">
        {/* ==== Content ==== */}
        <div className="flex w-4/5 flex-col items-center gap-3 sm:w-3/5">
          <AuthModeContext.Provider value={authModeState}>
            <Header mode={MODE} />
            <ThirdPartyAuth mode={MODE} />
            <Divider />
            <SignUpForm />
            <SignUpFooter />
          </AuthModeContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
