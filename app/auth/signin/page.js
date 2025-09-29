"use client";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <main style={{ marginTop: "2rem", textAlign: "center" }}>
      <h1>Sign In</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              style={{
                background: "#C0392B",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                marginTop: "1rem"
              }}
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </main>
  );
}
