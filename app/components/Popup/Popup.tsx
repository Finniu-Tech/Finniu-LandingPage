"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PopupImage from "@/images/Popup/webinar.png";

export default function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAfter7PM, setIsAfter7PM] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de 45 segundos (cambié a 45000ms = 45s)
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 45);

    // Verificar la hora en tiempo real
    const checkTime = () => {
      const now = new Date();
      const peruTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Lima" }));
      const hour = peruTime.getHours();

      // Si la hora en Perú es mayor o igual a 19 (7 PM)
      if (hour >= 19) {
        setIsAfter7PM(true);
      }
    };

    checkTime(); // Ejecutar la verificación al cargar el componente

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  const closePopup = () => setIsPopupOpen(false);

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative flex flex-col items-center rounded-2xl shadow-xl w-11/12 max-w-lg md:max-w-xl bg-gradient-to-b from-[#006389] to-white p-6">

        {/* Botón de cierre */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-black p-1 rounded-full text-2xl"
        >
          ×
        </button>

        {/* Imagen del popup */}
        <div className="w-full flex justify-center mb-4">
          <Image
            src={PopupImage}
            alt="Finniu SBS"
            className="rounded-lg"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Botón de acción con cambio dinámico después de las 7 PM */}
        <div className="w-full text-center mt-6">
          <button
            onClick={() =>
              window.open(
                isAfter7PM
                  ? "https://meet.google.com/cvo-giyv-okh" // Nuevo enlace después de las 7 PM
                  : "https://docs.google.com/forms/d/e/1FAIpQLSdZdo26B3j6rZMWZxgNEy9E1bh0Inw-xgPHp0pRDJSBZeRrMQ/viewform",
                "_blank"
              )
            }
            className="px-4 py-2 md:px-6 md:py-3 bg-[#0D3A5C] text-white rounded-lg hover:bg-[#104D7C] font-bold shadow-lg text-sm md:text-base lg:text-lg"
          >
            {isAfter7PM ? "¡Unirme!" : "¡Regístrate!"}
          </button>
        </div>
      </div>
    </div>
  );
}