import React from "react";
import Button from "@/src/_components/Button";

interface ThirdPartyAuthItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  className?: string;
}

const ThirdPartyAuthItem = ({
  Icon,
  children,
  className,
}: ThirdPartyAuthItemProps) => {
  return (
    <Button className="w-full flex-row items-center justify-center gap-4 border border-gray-200 py-2.5 hover:bg-gray-100">
      <Icon className="" />
      <p className="font-medium">{children}</p>
    </Button>
  );
};

export default ThirdPartyAuthItem;
