import React from "react";
import SvgMjcLogoModern from "../svgs/MjcLogoModern";
import { Routes } from "@/src/_enums/routes.enum";
import Link from "next/link";

interface MjcLogoProps {
  outerClassName?: string;
  innerClassName?: string;
}

const MjcLogo = ({ outerClassName, innerClassName }: MjcLogoProps) => {
  return (
    <Link
      href={Routes.HOME}
      className={`${outerClassName} block transform transition-transform duration-300 hover:scale-110 hover:opacity-80`}
    >
      <SvgMjcLogoModern className={innerClassName} />
    </Link>
  );
};

export default MjcLogo;
