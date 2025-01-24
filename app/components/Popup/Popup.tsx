"use client";

import React, { useState, useEffect } from "react";
import PopupImage from "@/images/Popup/anuncio-SBS.png";
import Image from "next/image";

export default function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de 45 segundos
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 45000);

    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
  }, []);

  const closePopup = () => setIsPopupOpen(false);

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="relative flex flex-col items-center bg-white rounded-lg shadow-lg"
        style={{
          width: "80%", // Ancho responsivo
          maxWidth: "400px", // Ancho máximo
        }}
      >
        {/* Imagen vertical ajustada */}
        <Image
          src={PopupImage}
          alt="Popup"
          className="rounded-t-lg"
          style={{
            width: "100%", // Ancho total del contenedor
            height: "auto", // Mantener proporción de la imagen
          }}
        />
        {/* Botón de cierre */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-black p-1 rounded-full hover:bg-gray-200"
        >
          ✕
        </button>
        {/* Fondo con gradiente detrás del botón */}
        <div
          className="w-full py-6 px-6 text-center"
          style={{
            background: "linear-gradient(282deg, #ddecf0, rgb(189 217 228))",
          }}
        >
          {/* Botón "Agenda con nosotros" */}
          <button
            onClick={() => window.open("https://calendly.com/finniumeet/30min", "_blank")}
            className="w-full px-6 py-3 bg-[#0D3A5C] text-white rounded-lg hover:bg-[#104D7C] font-bold"
          >
            Agenda con nosotros
          </button>
        </div>
      </div>
    </div>
  );
}