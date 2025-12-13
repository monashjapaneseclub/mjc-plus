import * as React from "react";

const SvgCarouselLeftArrow: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="106"
    height="106"
    fill="none"
    viewBox="0 0 106 106"
  >
    <g filter="url(#filter0_d_26_92)">
      <path
        fill="#000"
        fillOpacity="0.25"
        d="M52.75 0A48.75 48.75 0 0 0 4 48.75C4 75.67 25.825 97.5 52.75 97.5c26.92 0 48.75-21.83 48.75-48.75C101.5 21.825 79.67 0 52.75 0m14.68 71.25-5.305 5.3-27.8-27.8 27.8-27.8 5.3 5.3-22.5 22.5z"
        shapeRendering="crispEdges"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_26_92"
        width="105.5"
        height="105.5"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_26_92"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_26_92"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default SvgCarouselLeftArrow;
