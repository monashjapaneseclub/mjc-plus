"use client";
import { useState, useRef, useEffect } from "react";
import { ProfileIcon } from "@/src/_components/svgs";
import { supabase } from "@/src/app/supabase-client";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-red-500 hover:text-red-700 transition-colors"
        aria-label="Profile menu"
      >
        <ProfileIcon className="w-6 h-6" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">Account</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
