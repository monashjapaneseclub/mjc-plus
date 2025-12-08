"use client";
import { FormEvent, useReducer, ActionDispatch } from "react";
import Button from "@/src/_components/ui/Button";
import Input from "@/src/_components/ui/Input";
import { useAuthModeContext } from "@/src/_contexts/AuthModeContext";
import { supabase } from "@/src/app/supabase-client";
import { AuthActionType } from "@/src/_enums/authActionType.enum";
import type { AuthFormState, AuthFormAction } from "../../type";

const initialState: AuthFormState = {
  email: "",
  password: "",
  emailError: undefined,
  passwordError: undefined,
};

const reducer = (state: AuthFormState, action: AuthFormAction) => {
  const { type, key, value } = action;
  switch (type) {
    case AuthActionType.UPDATE_INPUT:
      return {
        ...state,
        [key]: value,
        [`${key}Error`]: undefined,
      };
    case AuthActionType.UPDATE_ERROR:
      return {
        ...state,
        [key]: value,
      };

    case AuthActionType.CLEAR_FORM:
      return { ...initialState };
    default:
      return state;
  }
};

const validateFormFields = (
  email: string,
  password: string,
  dispatch: ActionDispatch<[action: AuthFormAction]>,
) => {
  let hasError = false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^\S{8,16}$/;
  if (!emailRegex.test(email)) hasError = true;
  dispatch({
    type: AuthActionType.UPDATE_ERROR,
    key: "emailError",
    value: "Invalid email format",
  });

  if (!passwordRegex.test(password)) hasError = true;
  dispatch({
    type: AuthActionType.UPDATE_ERROR,
    key: "passwordError",
    value: "Password length must be within 8 to 16",
  });
  return hasError;
};

const clearForm = (dispatch: ActionDispatch<[action: AuthFormAction]>) => {
  dispatch({
    type: AuthActionType.CLEAR_FORM,
    key: "",
    value: "",
  });
};

const AuthForm = () => {
  /* ==== Context ==== */
  const { isSignedIn, setIsSignedIn } = useAuthModeContext();

  /* ==== States ==== */
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, emailError, passwordError } = state;

  /* ==== Handlers ==== */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasError = validateFormFields(email, password, dispatch);

    if (hasError) return;
    if (isSignedIn) {
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

    clearForm(dispatch);
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
        error={emailError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: AuthActionType.UPDATE_INPUT,
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
        error={passwordError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: AuthActionType.UPDATE_INPUT,
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
        Login
      </Button>
    </form>
  );
};

export default AuthForm;
