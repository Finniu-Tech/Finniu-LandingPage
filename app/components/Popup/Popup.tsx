"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PopupImage from "@/images/Popup/anuncio-SBS.png";
import PigImage from "@/images/Popup/pig.png";
import SbsImage from "@/images/Popup/logosbs.png";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ">
      <div
        className="relative flex flex-col items-center rounded-lg shadow-xl w-11/12 max-w-lg md:max-w-xl bg-gradient-to-b from-[#006389] to-white p-6 "
      >
        {/* Botón de cierre */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-black p-1 rounded-full  text-2xl"
        >
          x
        </button>

        {/* Logo de SBS */}
        <div className="w-full flex justify-center mb-4">
          <Image
            src={SbsImage}
            alt="Finniu SBS"
            className="rounded-lg"
            style={{
              width: "40%",
              height: "auto",
            }}
          />
        </div>

        {/* Contenido principal */}
        <div className="w-full px-4 text-center">
          <h2 className="text-base md:text-lg font-bold text-white mb-4">
            ¡Estamos regulados por la SBS! 🚀
          </h2>
          <p className="text-xs md:text-sm text-white mb-4">
            En Finniu damos un paso más hacia la confianza y la transparencia.
            Ahora somos parte del grupo de entidades supervisadas por la
            Superintendencia de Banca, Seguros y AFP (SBS), garantizando la
            seguridad de tus inversiones.
          </p>
          <p className="text-xs md:text-sm font-bold text-white mb-4">
            RESOLUCIÓN SBS N°00172-2025
          </p>

          <div className="bg-white p-3 rounded-full shadow-md mb-4 text-gray-700 font-bold text-xs md:text-sm">
            ¿Qué significa esto para ti?
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md text-gray-700 text-left text-xs md:text-sm">
            <ul className="list-none">
              <li className="flex items-start mb-2">
                <span className="text-green-600 mr-2">✔️</span>
                <span>Mayor confianza y respaldo.</span>
              </li>
              <li className="flex items-start mb-2">
                <span className="text-green-600 mr-2">✔️</span>
                <span>Transparencia en cada etapa de tu inversión.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✔️</span>
                <span>
                  Seguridad bajo los estándares más altos del mercado
                  financiero.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Imagen del cerdito y texto */}

          {/* Imagen del cerdito */}
        {/*<div className="hidden md:flex flex-row items-center justify-center px-4 mb-6">*/}
        {/*  /!* Texto *!/*/}
        {/*  <div className="w-1/2 text-center md:text-left">*/}
        {/*    <p className="text-xs md:text-sm text-white mt-4 md:mt-0">*/}
        {/*      Tu futuro financiero está en buenas manos.*/}
        {/*    </p>*/}
        {/*    <p className="text-sm md:text-xl font-extrabold text-white mt-2">*/}
        {/*      ¡Súmate al cambio con Finniu!*/}
        {/*    </p>*/}
        {/*  </div>*/}

        {/*  /!* Imagen *!/*/}
        {/*  <div className="w-1/2 flex justify-center">*/}
        {/*    <Image*/}
        {/*        src={PigImage}*/}
        {/*        alt="Finniu Piggy Bank"*/}
        {/*        className="rounded-lg w-[60%]"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/* Texto */}


        {/* Botón de acción */}
        <div className="w-full text-center mt-6">

          <button
              onClick={() =>
                  window.open("https://calendly.com/finniumeet/30min", "_blank")
              }
              className="px-4 py-2 md:px-6 md:py-3 bg-[#0D3A5C] text-white rounded-lg hover:bg-[#104D7C] font-bold shadow-lg text-sm md:text-base lg:text-lg"
          >
            ¡Conversemos!
          </button>
        </div>
      </div>
    </div>
  );
}