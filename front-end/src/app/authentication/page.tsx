"use client";
import { useState } from "react";
import {
  Header,
  Divider,
  ThirdPartyAuth,
  AuthForm,
  Footer,
} from "./_components";
import SvgMjcLogo from "@/src/_components/logos/MjcLogo";
import { AuthMode } from "@/src/_enums/authMode.enum";
import { AuthModeContext } from "@/src/_contexts/AuthModeContext";
import type { AuthModeStateProps } from "@/src/_types/AuthModeStateProps";
import { supabase } from "../supabase-client";

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
  const LOGIN: AuthProps = {
    mode: AuthMode.LOGIN,
    footerDescription: "Forgot your password?",
    footerActions: ["Forgot password", "Create account"],
  };

  const MODE: AuthMode = isSignedIn ? SIGNUP.mode : LOGIN.mode;

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
            <AuthForm mode={MODE} />
            <Footer />
          </AuthModeContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
