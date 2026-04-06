"use client";
import { useState } from "react";
import {
  Header,
  Divider,
  ThirdPartyAuth,
} from ".././_components";
import SvgMjcLogo from "@/src/_components/svgs/MjcLogo";
import { AuthMode } from "@/src/_enums/authMode.enum";
import { AuthModeContext } from "@/src/_contexts/AuthModeContext";
import type { AuthModeStateProps } from "@/src/_types/AuthModeStateProps";

interface AuthPageLayoutProps {
  mode: AuthMode;
  form: React.ReactNode;
  footer: React.ReactNode;
}

interface AuthProps {
  mode: AuthMode;
  footerDescription: string;
  footerActions: string[];
}

const AuhPageLayout = ({ mode, form, footer }: AuthPageLayoutProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authModeState: AuthModeStateProps = {
    isSignedIn: isSignedIn,
    setIsSignedIn: setIsSignedIn,
  };

  const isSignup = mode == AuthMode.SIGNUP;
  const AUTH: AuthProps = {
    mode: isSignup ? AuthMode.SIGNUP : AuthMode.LOGIN,
    footerDescription: isSignup
      ? "Already have an account?"
      : "Forgot your password?",
    footerActions: isSignup ? ["Login"] : ["Forgot password", "Create account"],
  };
  const MODE: AuthMode = AUTH.mode;

  return (
    <div className="flex h-full w-full flex-col items-center bg-surface-muted">
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
            {form}
            {footer}
          </AuthModeContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default AuhPageLayout;
