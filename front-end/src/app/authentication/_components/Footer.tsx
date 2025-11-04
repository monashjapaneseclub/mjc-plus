import React from "react";

interface FooterProps {
  description: string;
  action: string;
}

const Footer = ({ description, action }: FooterProps) => {
  return (
    <div className="text-sm text-gray-500">
      {description} <a className="text-red-600 underline">{action}</a>
    </div>
  );
};

export default Footer;
