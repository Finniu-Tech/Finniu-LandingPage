"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoFinniu from "@/images/NavBar/LogoFinniu.png";
import DiegoMallqui from "@/images/Popup/diegoMallqui.png";

export default function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isActiveTime, setIsActiveTime] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de 45 segundos (cambiado a 45000ms = 45s)
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 45000);

    // Verificar la hora y el día en tiempo real
    const checkTime = () => {
      const now = new Date();
      const peruTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Lima" }));
      const hour = peruTime.getHours();
      const day = peruTime.getDay(); // 0 = Domingo, 3 = Miércoles

      // Si es miércoles (day === 3) y está entre 7 PM (19) y 9 PM (21)
      if (day === 3 && hour >= 19 && hour < 21) {
        setIsActiveTime(true);
      } else {
        setIsActiveTime(false);
      }
    };

    checkTime(); // Ejecutar la verificación al cargar el componente

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  const closePopup = () => setIsPopupOpen(false);

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
          className="relative flex flex-col items-center rounded-2xl shadow-xl w-11/12 max-w-lg md:max-w-lg bg-gradient-to-br from-[#000000_20%] via-[#0D3295_70%] to-[#81F3DB_120%] p-6">

        {/* Botón de cierre */}
        <button
            onClick={closePopup}
            className="absolute top-2 right-4 text-white p-1 rounded-full text-5xl"
        >
          ×
        </button>

        {/* Imagen del popup */}
        <h2 className="text-white text-7xl font-bold">Q&A</h2>
        <p className="text-white text-2xl font-semibold mt-2">
          ¿Tienes dudas
        </p>

        <p className="text-white text-2xl font-semibold mt-2">
          sobre Finniu?
        </p>

        {/* Descripción */}
        <p className="text-white mt-4 font-thin">
          Resuélvelas directamente en nuestro webinar semanal con nuestro CEO <b>Diego Mallqui</b>.
        </p>

        {/* Fecha y Hora */}
        <div className="flex items-start justify-start mt-4 space-x-2 text-white">
          <span className="text-lg font-bold">📅 Este miércoles a las 7:00 PM</span>
        </div>
        <div className="w-full flex justify-center mb-4"></div>

        {/* Botón de acción con cambio dinámico los miércoles de 7 PM a 9 PM */}
        <div className="w-full text-center mt-6">
          <button
              onClick={() =>
                  window.open(
                      isActiveTime
                          ? "https://meet.google.com/cvo-giyv-okh" // Enlace después de las 7 PM en miércoles
                          : "https://docs.google.com/forms/d/e/1FAIpQLSf7Y-gBvTUgOlDcXkcc6CCz1OpGb06ha4KMEafhKoP7PlJi1w/viewform?usp=header",
                      "_blank"
                  )
              }
              className="px-4 py-2 md:px-12 md:py-3 bg-[#fff] text-black rounded-full hover:bg-[#104D7C] font-bold shadow-lg text-sm md:text-sm"
          >
            {isActiveTime ? "¡Unirme!" : "Regístrate"}
          </button>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="flex justify-start">
            <Image
                src={LogoFinniu}
                alt="finniu-logo"
                className="rounded-lg w-[30%]"
            />
          </div>
          <div className="flex justify-end">
            <Image
                src={DiegoMallqui}
                alt="finniu-diego-mallqui"
                className="rounded-lg w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}