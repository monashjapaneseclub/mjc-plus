"use client";
import { FormEvent, useReducer, ActionDispatch } from "react";
import Button from "@/src/_components/ui/Button";
import Input from "@/src/_components/ui/Input";
import { supabase } from "@/src/app/supabase-client";
import { AuthActionType } from "@/src/_enums/authActionType.enum";
import type { AuthFormState, AuthFormAction } from "../../type";

interface SignUpFormState extends AuthFormState {
  confirmEmail: string;
  confirmPassword: string;
  confirmEmailError: string | undefined;
  confirmPasswordError: string | undefined;
}

const initialState: SignUpFormState = {
  email: "",
  password: "",
  emailError: undefined,
  passwordError: undefined,
  confirmEmail: "",
  confirmPassword: "",
  confirmEmailError: undefined,
  confirmPasswordError: undefined
};

const reducer = (state: SignUpFormState, action: AuthFormAction) => {
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
  confirmEmail: string,
  confirmPassword: string,
  dispatch: ActionDispatch<[action: AuthFormAction]>,
) => {
  let hasError = false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^\S{8,16}$/;
  if (!emailRegex.test(email)) {
    hasError = true;
    dispatch({
      type: AuthActionType.UPDATE_ERROR,
      key: "emailError",
      value: "Invalid email format",
    });
  }

  if (!passwordRegex.test(password)) {
    hasError = true;
    dispatch({
      type: AuthActionType.UPDATE_ERROR,
      key: "passwordError",
      value: "Password length must be within 8 to 16",
    });
  }

  if (confirmEmail !== email) {
    hasError = true;
    dispatch({
      type: AuthActionType.UPDATE_ERROR,
      key: "confirmEmailError",
      value: "Emails do not match",
    });
  }

  if (confirmPassword !== password) {
    hasError = true;
    dispatch({
      type: AuthActionType.UPDATE_ERROR,
      key: "confirmPasswordError",
      value: "Passwords do not match",
    });
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

const SignUpForm = () => {
  /* ==== States ==== */
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, emailError, passwordError, confirmEmail, confirmPassword, confirmEmailError, confirmPasswordError } = state;

  /* ==== Handlers ==== */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasError = validateFormFields(email, password, confirmEmail, confirmPassword, dispatch);
    if (hasError) return;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      if (error.status === 422) {
        dispatch({ type: AuthActionType.UPDATE_ERROR, key: "emailError", value: "Email already in use" });
      } else if (error.status === 429) {
        dispatch({ type: AuthActionType.UPDATE_ERROR, key: "emailError", value: "Too many attempts, please wait" });
      } else {
        dispatch({ type: AuthActionType.UPDATE_ERROR, key: "emailError", value: error.message });
      }
      return;
    }

    if (!data.session) {
        dispatch({ type: AuthActionType.UPDATE_ERROR, key: "emailError", value: "Check your email to confirm your account" });
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

      <Input
        label="Confirm Email"
        id="confirmEmail"
        type="text"
        placeholder="Re-enter your email"
        value={state.confirmEmail}
        error={confirmEmailError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: AuthActionType.UPDATE_INPUT,
            key: "confirmEmail",
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
      <Input
        label="Confirm Password"
        id="confirmPassword"
        type="text"
        placeholder="Re-enter your password"
        value={state.confirmPassword}
        error={confirmPasswordError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: AuthActionType.UPDATE_INPUT,
            key: "confirmPassword",
            value: e.target.value,
          })
        }
      />

      {/* ==== Button ==== */}
      <Button
        className="mt-3 w-full bg-black py-3 text-white transition duration-200"
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
