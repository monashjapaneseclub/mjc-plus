"use client";
import { useAuthRedirect } from "@/src/_hooks/useAuthRedirect";

export function AuthRedirectHandler() {
  useAuthRedirect();
  return null;
}
