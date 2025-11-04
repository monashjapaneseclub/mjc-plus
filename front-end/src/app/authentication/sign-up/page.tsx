import React from "react";
import { Header, Divider, ThirdPartyAuth, AuthForm } from "../_components";

const Login = () => {
  const MODE = "Login";
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#f5f4f7]">
      {/* ==== Card ==== */}
      <div className="card w-xs flex-col items-center bg-white sm:w-md">
        {/* ==== Content ==== */}
        <div className="w-4/5 flex-col items-center gap-3 sm:w-3/5">
          <Header mode={MODE} />
          <ThirdPartyAuth mode={MODE} />
          <Divider />
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
