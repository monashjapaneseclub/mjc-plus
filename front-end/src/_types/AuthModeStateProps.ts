import { Dispatch, SetStateAction } from "react";

export interface AuthModeStateProps {
  isSignedUp: boolean;
  setIsSignedUp: Dispatch<SetStateAction<boolean>>;
}