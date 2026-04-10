"use client";
import { FormEvent, useReducer, ActionDispatch, useState } from "react";
import Button from "@/src/_components/ui/Button";
import Input from "@/src/_components/ui/Input";
import { Eye, EyeOff } from "@/src/_components/svgs";
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

  if (!email) {
    dispatch({
      type: AuthActionType.UPDATE_ERROR,
      key: "emailError",
      value: "Email is required",
    });
    hasError = true;
  } else if (!emailRegex.test(email)) {
    dispatch({
      type: AuthActionType.UPDATE_ERROR,
      key: "emailError",
      value: "Invalid email format",
    });
    hasError = true;
  }

  if (!password) {
    dispatch({
      type: AuthActionType.UPDATE_ERROR,
      key: "passwordError",
      value: "Password is required",
    });
    hasError = true;
  }

  return hasError;
};

const clearForm = (dispatch: ActionDispatch<[action: AuthFormAction]>) => {
  dispatch({
    type: AuthActionType.CLEAR_FORM,
    key: "",
    value: "",
  });
};

const LoginForm = () => {
  /* ==== States ==== */
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, emailError, passwordError } = state;
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* ==== Handlers ==== */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasError = validateFormFields(email, password, dispatch);

    if (hasError) return;

    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setIsLoading(false);

    if (error) {
      if (error.status === 400) {
        dispatch({
          type: AuthActionType.UPDATE_ERROR,
          key: "passwordError",
          value: "Invalid email or password"
        });
      } else if (error.status === 429) {
        dispatch({
          type: AuthActionType.UPDATE_ERROR,
          key: "emailError",
          value: "Too many login attempts. Please try again later"
        });
      } else if (error.status === 500) {
        dispatch({
          type: AuthActionType.UPDATE_ERROR,
          key: "emailError",
          value: "Server error. Please try again later"
        });
      } else {
        dispatch({
          type: AuthActionType.UPDATE_ERROR,
          key: "emailError",
          value: error.message || "Login failed. Please try again"
        });
      }
      return;
    }

    clearForm(dispatch);
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
      <div className="relative">
        <Input
          label="Password"
          id="password"
          type={showPassword ? "text" : "password"}
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
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-9 right-3 text-gray-500 transition-colors hover:text-gray-700"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* ==== Button ==== */}
      <Button
        className="mt-3 w-full bg-black py-3 text-white transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
