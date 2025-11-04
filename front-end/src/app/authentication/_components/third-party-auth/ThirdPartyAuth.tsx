import React from "react";
import { SvgGoogle, SvgMicrosoft } from "@/src/_components/svgs";
import ThirdPartyAuthItem from "./ThirdPartyAuthItem";
import type { AuthMode } from "../../types";

const ThirdPartyAuth = ({ mode }: AuthMode) => {
  return (
    <div className="w-full space-y-3">
      <ThirdPartyAuthItem Icon={SvgGoogle}>
        {mode} with Google
      </ThirdPartyAuthItem>
      <ThirdPartyAuthItem Icon={SvgMicrosoft}>
        {mode} with Microsoft
      </ThirdPartyAuthItem>
    </div>
  );
};

export default ThirdPartyAuth;
