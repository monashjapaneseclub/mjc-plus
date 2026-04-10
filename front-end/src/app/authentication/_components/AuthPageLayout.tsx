import {
  Header,
  Divider,
  ThirdPartyAuth,
} from ".././_components";
import SvgMjcLogo from "@/src/_components/svgs/MjcLogo";
import { AuthMode } from "@/src/_enums/authMode.enum";

interface AuthPageLayoutProps {
  mode: AuthMode;
  form: React.ReactNode;
  footer: React.ReactNode;
}

const AuhPageLayout = ({ mode, form, footer }: AuthPageLayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-surface-muted">
      {/* ==== MJC Logo ==== */}
      <SvgMjcLogo className="size-25 translate-y-1/2 transform" />
      {/* ==== Card ==== */}
      <div className="flex w-xs flex-col items-center rounded-2xl bg-white py-12 sm:w-lg">
        {/* ==== Content ==== */}
        <div className="flex w-4/5 flex-col items-center gap-3 sm:w-3/5">
          <Header mode={mode} />
          <ThirdPartyAuth mode={mode} />
          <Divider />
          {form}
          {footer}
        </div>
      </div>
    </div>
  );
};

export default AuhPageLayout;
