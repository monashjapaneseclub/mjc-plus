import Image from "next/image";
import SignUp from "./authentication/sign-up/page";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <SignUp />
    </div>
  );
}
