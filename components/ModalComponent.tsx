"use client";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import ButtonComponent from "./ButtonComponent";
import { saveRegisterStorage } from "../app/helpers/registrationStorage";
import CustomSelect from "./SelectAbout";



interface FormData {
  fullName: string;
  email: string;
  DniCi: string;
  phoneNumber: string;
  phonePrefix: string;
  aboutUs: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  DniCi?: string;
  phoneNumber?: string;
  aboutUs?: string;
}
interface CalculateParams {
  ammount: string;
  deadline: number;
  currency: string;
  email: string;
  DniCi: string;
  name: string;
  phone: string;
  discoverySource: string
}


interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  setIsCalculatedState: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setCalculateParamsState: React.Dispatch<React.SetStateAction<CalculateParams>>;
  handleCalculateClick: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  setIsCalculatedState,
  setIsModalVisible,
  setCalculateParamsState,
  handleCalculateClick,
}) => {
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    DniCi: "",
    phoneNumber: "",
    phonePrefix: "+51",
    aboutUs: "¿Como te enteraste de nosotros?",
  });
  const [isUpdatingState, setIsUpdatingState] = useState(false);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const DniCi = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData((prev) => ({
        ...prev, ...{
          fullName: parsedData.fullName,
          email: parsedData.email,
          DniCi: parsedData.DniCi ,
          phoneNumber: parsedData.phoneNumber,
          phonePrefix: parsedData.phonePrefix
        }
      }));
    }
  }, []);

  useEffect(() => {
    if (isUpdatingState) {
      handleCalculateClick();
      setIsCalculatedState(true);
      setIsModalVisible(false);
      setIsUpdatingState(false);
    }
  }, [isUpdatingState, handleCalculateClick, setIsCalculatedState, setIsModalVisible]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    if (name === "DniCi") {
      const numericValue = value.replace(/\D/g, ""); 
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phoneNumber: value }));
    setFormErrors((prev) => ({ ...prev, phoneNumber: undefined }));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && nextRef.current) {
      nextRef.current.focus();
    }
  };

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: FormErrors = {};

    if (!formData.fullName) {
      errors.fullName = "El nombre completo es obligatorio.";
    }
    if (!formData.email) {
      errors.email = "El correo electrónico es obligatorio.";
    }
    if (!formData.DniCi) {
      errors.DniCi = "El DNI o C.E es obligatorio.";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "El número telefónico es obligatorio.";
    }
    if (!formData.aboutUs) {
      errors.aboutUs = "Debe seleccionar una opcion";
    }
    if (formData.aboutUs === "¿Como te enteraste de nosotros?") {
      errors.aboutUs = "Debe seleccionar una opcion";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));
    saveRegisterStorage(JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      DniCi: formData.DniCi,
      phoneNumber: formData.phoneNumber,
      phonePrefix: formData.phonePrefix
    }));


    setCalculateParamsState((prevState) => ({
      ...prevState,
      name: formData.fullName,
      email: formData.email,
      DniCi: formData.DniCi,
      phone: formData.phoneNumber,
      discoverySource: formData.aboutUs
    }));
    setFormData({
      aboutUs: "¿Como te enteraste de nosotros?",
      email: "",
      DniCi: "",
      fullName: "",
      phonePrefix: "+51",
      phoneNumber: ""
    })
    setIsUpdatingState(true);
  };
  const handleAboutUsChange = (option: string) => {
    setFormData((prev) => ({ ...prev, aboutUs: option }));
    setFormErrors((prev) => ({ ...prev, aboutUs: undefined }));
  };



  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl  flex flex-col justify-center p-8 w-[90%] max-w-md relative">
        <div className="flex flex-col items-center justify-center mb-6 gap-2">
          <h2 className="text-center text-4xl">
            Regístrate
          </h2>
          <p>para recibir mayor información</p>
        </div>
        <form className="selected:" onSubmit={handleContinue}>
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Nombres y apellidos"
              className={`w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 ${formErrors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-sm bg-white text-black focus:outline-none focus:ring-0`}
              value={formData.fullName}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
              ref={fullNameRef}
            />
            {formErrors.fullName && (
              <p className="text-red-500 text-sm">{formErrors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              className={`w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 ${formErrors.email ? "border-red-500" : "border-gray-300"
                } rounded-sm bg-white text-black focus:outline-none focus:ring-0`}
              value={formData.email}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e, phoneInputRef)}
              ref={emailRef}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="DniCi"
              name="DniCi"
              placeholder="DNI o C.E"
              className={`w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 ${formErrors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-sm bg-white text-black focus:outline-none focus:ring-0`}
              value={formData.DniCi}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
              ref={fullNameRef}
            />
            {formErrors.fullName && (
              <p className="text-red-500 text-sm">{formErrors.DniCi}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="relative phone-input-container">
              <PhoneInput
                country="pe"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                enableSearch={true}
                inputProps={{
                  name: "phoneNumber",
                  placeholder: "Número telefónico",
                  required: true,
                  className: `w-full px-3 border-2 border-l-0 border-t-0 border-r-0 ${formErrors.phoneNumber
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-sm bg-white text-black focus:outline-none focus:ring-0`,
                }}
                containerStyle={{
                  width: "100%",
                  position: "relative",
                }}
                inputStyle={{
                  width: "100%",
                  paddingLeft: "58px",
                }}
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <select
              id="aboutUs"
              name="aboutUs"
              value={formData.aboutUs}
              onChange={(e) => handleAboutUsChange(e.target.value)}
              className={`w-full px-3 border-r-0 border-l-0 border-t-0 py-2 border-2 ${
                formErrors.aboutUs ? "border-red-500" : "border-gray-300"
              } rounded-sm bg-white text-black focus:outline-none focus:ring-0`}
            >
              <option selected hidden>¿Cómo se enteraste de nosotros?</option>
              <option value="En un anuncio en Facebook o Instagram">En un anuncio en Facebook o Instagram</option>
              <option value="Me lo compartió un amigo">Me lo compartió un amigo</option>
              <option value="Lo vi en un Influencer">Lo vi en un Influencer</option>
              <option value="Lo vi en Inversión Simple">Lo vi en Inversión Simple</option>
              <option value="Lo vi en Invertir Joven">Lo vi en Invertir Joven</option>
              <option value="Lo vi en Google">Lo vi en Google</option>
              <option value="Otro">Otro</option>
            </select>
            {formErrors.aboutUs && (
              <p className="text-red-500 text-sm">{formErrors.aboutUs}</p>
            )}
          </div>

          <div className="text-center mt-10">
            <ButtonComponent
              text="Continuar"
              type="submit"
              className="w-full bg-purpleTercero text-white rounded-full py-4 px-6"
            />
          </div>
        </form>
        <button
          className="absolute text-[28px] top-1 right-6"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;