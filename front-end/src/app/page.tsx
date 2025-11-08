import Image from "next/image";
import AuthPage from "./authentication/page";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <AuthPage />
    </div>
  );
}
