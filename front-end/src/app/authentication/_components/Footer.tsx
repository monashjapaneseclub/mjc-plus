import React, { Dispatch, SetStateAction } from "react";
import { useAuthModeContext } from "@/src/_contexts/AuthModeContext";

const Footer = () => {
  const { isSignUp, setIsSignUp } = useAuthModeContext();

  if (!isSignUp) {
    return (
      <div className="flex items-center gap-2 text-xs md:text-sm">
        <button
          type="button"
          className="cursor-pointer text-red-600 underline hover:text-red-700"
        >
          Forgot password
        </button>
        <span aria-hidden="true" className="font-light text-gray-500">
          |
        </span>
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="cursor-pointer text-red-600 underline hover:text-red-700"
        >
          Create account
        </button>
      </div>
    );
  }

  return (
    <div className="text-sm text-gray-500">
      Already have an account?{" "}
      <button
        type="button"
        onClick={() => setIsSignUp(!isSignUp)}
        className="cursor-pointer text-red-600 underline hover:text-red-700"
      >
        Login
      </button>
    </div>
  );
};

export default Footer;
