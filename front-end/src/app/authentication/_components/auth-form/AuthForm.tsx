"use client";
import { FormEvent, useState, useReducer } from "react";
import Button from "@/src/_components/ui/Button";
import Input from "@/src/_components/ui/Input";
import { AuthMode } from "@/src/_enums/auth.enum";
import { useAuthModeContext } from "@/src/_contexts/AuthModeContext";
import { supabase } from "@/src/app/supabase-client";

interface AuthFormProps {
  mode: AuthMode;
}

interface AuthFormState {
  email: string;
  password: string;
  error: string | null;
}

interface AuthFormAction {
  type: string;
  key: string;
  value: string;
}

const initialState: AuthFormState = {
  email: "",
  password: "",
  error: "",
};

const reducer = (state: AuthFormState, action: AuthFormAction) => {
  const { type, key, value } = action;
  switch (type) {
    case "update_input":
      return {
        ...state,
        [key]: value,
      };
    default:
      return state;
  }
};

const AuthForm = ({ mode }: AuthFormProps) => {
  /* ==== Context ==== */
  const { isSignUp, setIsSignUp } = useAuthModeContext();

  /* ==== States ==== */
  const [state, dispatch] = useReducer(reducer, initialState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: ",",
  });

  /* ==== Handlers ==== */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignUp) {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError)
        return console.error("Error signing up:", signUpError.message);
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError)
        return console.error("Error signing in:", signInError.message);
    }
    console.log("Signed up successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2">
      {/* ==== Email ==== */}
      <Input
        label="Email"
        id="email"
        type="text"
        placeholder="you@example.com"
        value={state.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "update_input",
            key: "email",
            value: e.target.value,
          })
        }
      />

      {/* ==== Password ==== */}
      <Input
        label="Password"
        id="password"
        type="text"
        placeholder="Enter your password"
        value={state.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "update_input",
            key: "password",
            value: e.target.value,
          })
        }
      />

      {/* ==== Button ==== */}
      <Button
        className="mt-3 w-full bg-black py-3 text-white transition duration-200"
        type="submit"
      >
        {mode}
      </Button>
    </form>
  );
};

export default AuthForm;
