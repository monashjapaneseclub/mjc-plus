import React from "react";

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
    <div className="w-full flex-row items-center justify-center gap-4 rounded-md border border-gray-200 py-2.5">
      <Icon className="" />
      <p className="font-medium">{children}</p>
    </div>
  );
};

export default ThirdPartyAuthItem;
