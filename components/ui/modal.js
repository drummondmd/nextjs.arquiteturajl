'use client'

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  // Fecha com tecla Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fundo escuro */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Conteúdo do modal */}
      <div className="relative bg-white rounded-lg shadow-lg max-w-[80vw] w-full p-6 z-10 animate-fadeIn">
        {/* Título e botão fechar */}
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo passado como children */}
        <div>{children}</div>
      </div>
    </div>
  );
}
