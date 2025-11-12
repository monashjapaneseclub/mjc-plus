import { createContext, useContext } from "react";
import type { Session } from "@supabase/supabase-js";

export const AuthSessionContext = createContext<Session | null | undefined>(undefined);

export const useAuthSessionContext = () => {
  const session = useContext(AuthSessionContext);
  if (session === undefined) {
    throw new Error(
      "useAuthSessionContext must be used within an AuthSessionContext.Provider",
    );
  }
  return session;
};
