"use client";
import { useState } from "react";
import Button from "@/src/_components/Button";
import Input from "@/src/_components/Input";
import { AuthMode } from "@/src/_enums/auth.enum";

interface AuthFormProps {
  mode: AuthMode
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };
  return (
    <form className="w-full space-y-2">
      {/* ==== Email ==== */}
      <Input
        label="Email"
        id="email"
        type="text"
        placeholder="you@example.com"
        onChange={handleEmailChange}
      />

      {/* ==== Password ==== */}
      <Input
        label="Password"
        id="password"
        type="text"
        placeholder="Enter your password"
        onChange={handlePasswordChange}
      />

      {/* ==== Button ==== */}
      <Button className="mt-3 w-full bg-black py-3 text-white" type="submit">
        {mode}
      </Button>
    </form>
  );
};

export default AuthForm;
