import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, ...props }: ButtonProps) => {
  const base =
    "cursor-pointer rounded-md font-medium transition-colors outline-none " +
    "focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
