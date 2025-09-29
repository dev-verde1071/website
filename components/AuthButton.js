"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        style={{ marginLeft: "1rem", background: "#000", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}
        onClick={() => signOut()}
      >
        Sign out
      </button>
    );
  }
  return (
    <button
      style={{ marginLeft: "1rem", background: "#C0392B", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}
