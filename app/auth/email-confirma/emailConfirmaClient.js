"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmEmailClient({ status }) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (status === "success") {
      const interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [status]);

  useEffect(() => {
    if (countdown === 0 && status === "success") {
      router.push("/login");
    }
  }, [countdown, status, router]);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      {status === "success" ? (
        <>
          <h1>Email confirmado com sucesso 🎉</h1>
          <p>Você será redirecionado para o login em {countdown} segundo{countdown > 1 ? "s" : ""}...</p>
        </>
      ) : (
        <>
          <h1>Token inválido ou expirado ❌</h1>
          <p>Verifique seu email e tente novamente.</p>
        </>
      )}
    </div>
  );
}
