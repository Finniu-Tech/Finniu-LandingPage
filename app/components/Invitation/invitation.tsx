"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Fondo1 from "@/images/Evento/landing-bg1.png";
import Fondo2 from "@/images/Evento/landing-bg2.png";
import Fondo3 from "@/images/Evento/landing-bg3.jpg";
import Copas from "@/images/Evento/copas.png";
import evolve from "@/images/Evento/cuadrados web/evolveweb.png";
import evolvemovil from "@/images/Evento/cuadrados mobile/movil-evento.png";
interface InvitadoInput {
  tipoInvitado: string;
  nombre: string;
  apellido: string;
  dni: string;
  correo: string;
  telefono: string;
  invitadoPrincipalDni?: string;
}

export default function Invitacion() {
  const [formData, setFormData] = useState<InvitadoInput>({
    tipoInvitado: "Principal",
    nombre: "",
    apellido: "",
    dni: "",
    correo: "",
    telefono: "",
  });

  const [acompanante, setAcompanante] = useState<InvitadoInput>({
    tipoInvitado: "Acompañante",
    nombre: "",
    apellido: "",
    dni: "",
    correo: "",
    telefono: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!formData.nombre || !formData.dni || !formData.correo) {
      setError("Debes completar tus datos antes de agregar un acompañante.");
      setLoading(false);
      return;
    }

    const query = `
      mutation registrarinvitado($input: [CreateInvitadoInput!]!) {
        createInvitado(input: $input) {
          success
          message
          invitados {
            nombre
            apellido
            tipoInvitado
            invitadoPrincipal {
              nombre
            }
          }
        }
      }
    `;

    const variables = {
      input: [
        formData,
        ...(acompanante.nombre && acompanante.dni ? [{ ...acompanante, invitadoPrincipalDni: formData.dni }] : []),
      ],
    };

    try {
      const response = await fetch("https://manage.finniu.com/api/v1/graph/finniu/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
      });

      const { data, errors } = await response.json();

      if (errors) throw new Error(errors[0].message);

      setSuccessMessage("Invitación enviada con éxito.");
      // ✅ **Limpiar los campos después del envío**
      setFormData({
        tipoInvitado: "Principal",
        nombre: "",
        apellido: "",
        dni: "",
        correo: "",
        telefono: "",
      });

      setAcompanante({
        tipoInvitado: "Acompañante",
        nombre: "",
        apellido: "",
        dni: "",
        correo: "",
        telefono: "",
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  const formRef = useRef<HTMLDivElement | null>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0D3295] to-[#81F3DB] text-white">
      {/* Sección Hero */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left pt-20 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Fondo1.src})` }}
      >
        <div className="flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-bold">¡Bienvenido/a! Has sido seleccionado</h1>
          <p className="mt-4 text-lg max-w-lg">
            Eres uno de los pocos invitados a esta celebración especial de Aniversario.
            Queremos agradecer tu confianza e invitarte a seguir siendo parte de nuestro crecimiento.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-6 text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition"
          >
            Confirmar asistencia
          </button>
        </div>

        <div className="flex justify-center">
          <Image src={Copas} alt="Fondo de invitación" className="rounded-lg w-3/4 md:w-full" />
        </div>
      </section>

      {/* Sección del Evento */}
      <section style={{ backgroundImage: `url(${Fondo3.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="relative bg-black bg-opacity-90 py-16 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">FINNIU EVOLVE</h2>
            <div className="grid md:grid-cols-1 gap-6 justify-center items-center">
              {/* Imagen para Desktop */}
              <div className="hidden md:flex justify-center">
                <Image
                  src={evolve}
                  alt="Fondo de invitación"
                  className="rounded-lg w-3/4 md:w-full"
                />
              </div>

              {/* Imagen para Mobile */}
              <div className="flex md:hidden justify-center">
                <Image
                  src={evolvemovil}
                  alt="Fondo de invitación"
                  className="rounded-lg w-3/4 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 Sección del Formulario */}
      <section ref={formRef} className="py-16 px-8" style={{backgroundImage: `url(${Fondo2.src})`}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {/* 📌 Formulario del Invitado */}
          <div className="max-w-md mx-auto">
            <h2 className="text-center text-3xl font-bold ">Confirma tu asistencia</h2>
            <h3 className="py-4">
              Para confirmar tu asistencia, completa el siguiente formulario con tus datos.
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Nombre"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={formData.nombre}
                     onChange={(e) => setFormData({...formData, nombre: e.target.value})}/>
              <input type="text" placeholder="Apellido"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={formData.apellido}
                     onChange={(e) => setFormData({...formData, apellido: e.target.value})}/>
              <input type="text" placeholder="DNI"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={formData.dni}
                     onChange={(e) => setFormData({...formData, dni: e.target.value})}/>
              <input type="email" placeholder="Correo"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={formData.correo}
                     onChange={(e) => setFormData({...formData, correo: e.target.value})}/>
              <input type="tel" placeholder="Teléfono"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={formData.telefono}
                     onChange={(e) => setFormData({...formData, telefono: e.target.value})}/>
            </form>
          </div>

          {/* 📌 Formulario del Acompañante */}
          <div className="max-w-md mx-auto">
            <h2 className="text-center text-3xl font-bold">Acompañante</h2>
            <h3 className="py-4">
              ¿Tienes algún referido al que te gustaría invitar? Ingresa sus datos a continuación.
            </h3>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={acompanante.nombre}
                     onChange={(e) => setAcompanante({...acompanante, nombre: e.target.value})}/>
              <input type="text" placeholder="Apellido"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={acompanante.apellido}
                     onChange={(e) => setAcompanante({...acompanante, apellido: e.target.value})}/>
              <input type="text" placeholder="DNI"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={acompanante.dni}
                     onChange={(e) => setAcompanante({...acompanante, dni: e.target.value})}/>
              <input type="email" placeholder="Correo"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={acompanante.correo}
                     onChange={(e) => setAcompanante({...acompanante, correo: e.target.value})}/>
              <input type="tel" placeholder="Teléfono"
                     className="w-full px-6 py-2 rounded-full border-0 bg-black text-white" value={acompanante.telefono}
                     onChange={(e) => setAcompanante({...acompanante, telefono: e.target.value})}/>
            </form>
          </div>

        </div>
        <div className="flex items-center justify-center mt-10 justify-between">
          <button
              onClick={handleSubmit}
              disabled={loading}
              className={`text-center mx-auto max-w-md text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
            {loading ? "Enviando..." : "Confirmar asistencia"}
          </button>
        </div>
        {successMessage && <div className="text-center text-green-500">{successMessage}</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
      </section>
    </div>
  );
}