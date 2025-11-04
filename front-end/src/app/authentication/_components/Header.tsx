import React from "react";
import type { AuthMode } from "../types";

const Header = ({ mode }: AuthMode) => {
  return <h2 className="text-2xl font-medium">{mode}</h2>;
};

export default Header;
