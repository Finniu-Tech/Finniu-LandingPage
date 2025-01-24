"use client";

import Image from "next/image";
import Llama from "@/images/Section-8/LLAMA.png";
import React from "react";

const Susbcribe = () => {
    return (
        <section
            className="container flex flex-col p-8 md:p-0 md:flex-row min-h-full justify-center items-center bg-white mx-auto">
            {/* Imagen de la llama */}
            <div className="flex justify-center md:w-1/2">
                <Image
                    src={Llama}
                    alt="Finniu-innovacion"
                    className="rounded-t-lg"
                    style={{
                        width: "100%", // Ajusta el ancho automáticamente
                        height: "auto", // Mantén proporción
                        maxWidth: "300px", // Máximo ancho de la imagen
                    }}
                />
            </div>

            {/* Contenido de texto */}
            <div className="text-center md:text-left md:w-1/2 mt-6 md:mt-0 md:ml-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0D3A5C]">
                    🔒 Invierte con confianza: Estamos regulados por la SBS.
                </h2>
                <p className="mt-4 text-gray-700 text-base md:text-lg">
                    Con Finniu es una fintech registrada en la Superintendencia de Banca, Seguros y AFP (SBS), lo que garantiza la seguridad y transparencia en tus inversiones.
                </p>
                <p className="mt-4 text-gray-700 text-base md:text-lg">
                    💬 Si tienes dudas, agenda una videollamada con uno de nuestros asesores y descubre cómo puedes hacer crecer tu dinero de manera segura.
                </p>
                {/* Botón */}
                <button
                    onClick={() => window.open("https://calendly.com/finniumeet/30min", "_blank")}
                    className="mt-6 px-8 py-3 bg-[#0D3A5C] text-white font-bold rounded-full hover:bg-[#104D7C] transition duration-300"
                >
                    ¡Agenda ahora!
                </button>
            </div>
        </section>
    );
};

export default Susbcribe;