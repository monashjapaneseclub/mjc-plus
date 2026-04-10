"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthSessionContext } from "@/src/_contexts/AuthSessionContext";
import { Routes } from "@/src/_enums/routes.enum";

export default function App() {
  const router = useRouter();
  const session = useAuthSessionContext();

  useEffect(() => {
    if (session) {
      router.replace(Routes.HOME);
    } else {
      router.replace(Routes.LOGIN);
    }
  }, [session, router]);

  return null;
}
