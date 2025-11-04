"use client";
import { useState } from "react";

const AuthForm = () => {
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
      <div className="flex-col space-y-0.5">
        <label className="font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md border border-gray-200 p-2 text-sm"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      {/* ==== Password ==== */}
      <div className="flex-col space-y-0.5">
        <label className="font-medium" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md border border-gray-200 p-2 text-sm"
          type="text"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* <button className="password-toggle"></button> */}
      </div>

      {/* ==== Button ==== */}
      <button
        className="mt-3 w-full rounded-md bg-black py-3 font-semibold text-white"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default AuthForm;
