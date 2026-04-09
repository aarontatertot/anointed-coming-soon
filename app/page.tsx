"use client";

import { useState } from "react";
import Image from "next/image";

const CORRECT_PASSWORD = "anointed2026";

export default function ComingSoon() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setError("");
      setAccessGranted(true);
    } else {
      setError("Invalid code");
    }
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        {/* Logo */}
        <Image
          src="/logo-a-mark-light.png"
          alt="Anointed Studio"
          width={128}
          height={128}
          className="w-32 h-auto"
          priority
        />

        {/* Brand name */}
        <p
          className="text-neutral-400 text-sm tracking-widest uppercase font-medium"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          ANOINTED STUDIO
        </p>

        {/* Divider */}
        <div className="w-full border-t border-neutral-800" />

        {/* Password form or access granted */}
        {accessGranted ? (
          <p className="text-neutral-400 text-sm tracking-widest uppercase text-center">
            Coming soon. By appointment only.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
            <input
              type="password"
              placeholder="Enter access code"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="bg-transparent border-b border-neutral-700 text-white text-center w-64 py-3 focus:outline-none focus:border-neutral-400 placeholder-neutral-600 text-sm tracking-widest"
            />
            {error && (
              <p className="text-red-500 text-xs">{error}</p>
            )}
            <button
              type="submit"
              className="text-neutral-400 uppercase tracking-widest text-sm cursor-pointer bg-transparent border-none"
              style={{ fontFamily: "Roboto Mono, monospace" }}
            >
              ENTER →
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-neutral-600 text-xs">
        © 2026 Anointed Studio
      </p>
    </main>
  );
}
