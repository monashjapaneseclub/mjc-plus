import { Dispatch, SetStateAction } from "react";

export interface AuthModeStateProps {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
}