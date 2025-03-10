"use client";
import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";

export default function QRScanner() {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const [qrData, setQrData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const startScanner = async () => {
    try {
      // **✅ Verificar permisos de cámara antes de iniciar el escáner**
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop()); // Cerrar el stream inmediatamente

      if (!isScanning) {
        setIsScanning(true);
        setCameraError(null);

        scannerRef.current = new Html5QrcodeScanner(
          "reader",
          {
            fps: 10,
            qrbox: 250,
            formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
            supportedScanTypes: ["camera"]
          },
          false
        );

        scannerRef.current.render(
          (decodedText) => {
            setQrData(decodedText);
            stopScanner();
            sendToAPI(decodedText);
          },
          (error) => console.warn("QR Error:", error)
        );
      }
    } catch (error) {
      console.error("Error de acceso a la cámara:", error);
      setCameraError("No se pudo acceder a la cámara. Verifica los permisos.");
    }
  };

  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.clear();
      setIsScanning(false);
    }
  };

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

      {cameraError && <p className="text-red-500">{cameraError}</p>}

      {isScanning && <div id="reader" className="w-64 h-64 border border-gray-400"></div>}

      {!isScanning && (
        <button
          onClick={startScanner}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Escanear QR
        </button>
      )}

      {qrData && (
        <div className="mt-4 p-3 bg-white rounded-lg shadow">
          <p><strong>QR escaneado:</strong> {qrData}</p>
        </div>
      )}
    </div>
  );
}