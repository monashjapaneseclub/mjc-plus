import React from "react";
import { AuthMode } from "@/src/_enums/authMode.enum";

interface HeaderProps {
  mode: AuthMode;
}

const Header = ({ mode }: HeaderProps) => {
  return <h2 className="my-2 text-2xl font-bold">{mode}</h2>;
};

export default Header;
