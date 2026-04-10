"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthSessionContext } from "@/src/_contexts/AuthSessionContext";
import { Routes } from "@/src/_enums/routes.enum";

export function useAuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const session = useAuthSessionContext();

  useEffect(() => {
    // If on auth page and has session, redirect to home
    if (pathname.startsWith("/authentication") && session) {
      router.replace(Routes.HOME);
      return;
    }

    // If not on auth page and no session, redirect to login
    if (!pathname.startsWith("/authentication") && !session) {
      router.replace(Routes.LOGIN);
    }
  }, [session, pathname, router]);
}
