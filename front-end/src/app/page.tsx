import Image from "next/image";
import Login from "./authentication/sign-up/page";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Login />
    </div>
  );
}
