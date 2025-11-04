import React from "react";
import {
  Header,
  Divider,
  ThirdPartyAuth,
  AuthForm,
  Footer,
} from "../_components";
import SvgMjcLogo from "@/src/_components/svgs/MjcLogo";

const Login = () => {
  const MODE = "Login";
  const FOOTERDESCRIPTION = "Forgot your password?";
  const FOOTERACTION = "Click here";
  return (
    <div className="h-full w-full flex-col items-center bg-[#f5f4f7]">
      {/* ==== MJC Logo ==== */}
      <SvgMjcLogo className="size-1/10 translate-y-1/2 transform" />
      {/* ==== Card ==== */}
      <div className="w-xs flex-col items-center rounded-2xl bg-white py-12 sm:w-lg">
        {/* ==== Content ==== */}
        <div className="w-4/5 flex-col items-center gap-4 sm:w-3/5">
          <Header mode={MODE} />
          <ThirdPartyAuth mode={MODE} />
          <Divider />
          <AuthForm />
          <Footer description={FOOTERDESCRIPTION} action={FOOTERACTION} />
        </div>
      </div>
    </div>
  );
};

export default Login;
