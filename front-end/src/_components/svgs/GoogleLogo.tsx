import * as React from "react";
import type { SVGProps } from "react";
const SvgGoogleLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g clipPath="url(#google-logo_svg__a)">
      <path
        fill="#4285F4"
        d="M9 7.364v3.485h4.844a4.15 4.15 0 0 1-1.809 2.708l2.921 2.267c1.702-1.571 2.684-3.879 2.684-6.62q-.002-.957-.164-1.84z"
      />
      <path
        fill="#34A853"
        d="m3.956 10.713-.659.504-2.332 1.817C2.446 15.97 5.481 18 9 18c2.43 0 4.467-.802 5.956-2.176l-2.921-2.267c-.802.54-1.825.868-3.035.868-2.34 0-4.328-1.58-5.04-3.707z"
      />
      <path
        fill="#FBBC05"
        d="M.965 4.966A8.9 8.9 0 0 0 0 9c0 1.456.352 2.823.965 4.034 0 .008 2.995-2.324 2.995-2.324A5.4 5.4 0 0 1 3.674 9c0-.597.106-1.17.286-1.71z"
      />
      <path
        fill="#EA4335"
        d="M9 3.584c1.325 0 2.503.458 3.444 1.341l2.578-2.577C13.459.892 11.43 0 9 0 5.482 0 2.446 2.02.965 4.966L3.96 7.29C4.672 5.163 6.66 3.584 9 3.584"
      />
    </g>
    <defs>
      <clipPath id="google-logo_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoogleLogo;
