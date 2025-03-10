"use client";
import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScanner() {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const [qrData, setQrData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // Función para iniciar la cámara
  const startScanner = () => {
    if (!isScanning) {
      setIsScanning(true);
      scannerRef.current = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

      scannerRef.current.render(
        (decodedText) => {
          setQrData(decodedText);
          stopScanner(); // 🚀 Detiene la cámara automáticamente al escanear
          sendToAPI(decodedText); // 📡 Envía el código al API
        },
        (error) => console.error(error)
      );
    }
  };

  // Función para detener la cámara
  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.clear();
      setIsScanning(false);
    }
  };

  // Enviar el QR escaneado a un API GraphQL
  const sendToAPI = async (qrText: string) => {
    try {
      const response = await fetch("https://tu-api.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            mutation validarInvitacion($codigo: String!) {
              validarInvitacion(codigo: $codigo) {
                success
                message
              }
            }
          `,
          variables: { codigo: qrText },
        }),
      });

      const { data, errors } = await response.json();
      if (errors) throw new Error(errors[0].message);
      alert(data.validarInvitacion.message);
    } catch (error) {
      console.error("Error al validar invitación:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Escáner de QR</h1>

      {/* Contenedor del escáner (se muestra solo cuando está activo) */}
      {isScanning && <div id="reader" className="w-64 h-64 border border-gray-400"></div>}

      {/* Botón para iniciar la cámara */}
      {!isScanning && (
        <button
          onClick={startScanner}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Escanear QR
        </button>
      )}

      {/* Resultado */}
      {qrData && (
        <div className="mt-4 p-3 bg-white rounded-lg shadow">
          <p><strong>QR escaneado:</strong> {qrData}</p>
        </div>
      )}
    </div>
  );
}