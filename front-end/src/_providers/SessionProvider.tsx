"use client";
import { useState, useEffect } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/src/app/supabase-client";
import { AuthSessionContext } from "@/src/_contexts/AuthSessionContext";
import { AuthRedirectHandler } from "./AuthRedirectHandler";

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <AuthSessionContext.Provider value={session}>
      <AuthRedirectHandler />
      {children}
    </AuthSessionContext.Provider>
  );
}
