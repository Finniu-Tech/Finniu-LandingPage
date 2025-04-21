"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
// import LogoFinniuLight from "@/images/Section-5/LogoFinniuLight.png";
// import Bill from "@/images/Section-5/Bill.png";
import { calculateInvestment } from "@/app/actions/calculateInvestment";
import ModalComponent from "@/components/ModalComponent";
import InvestmentCards from "@/app/components/Section-5/Oportunities";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import handMoney from "@/images/Section-5/handMoney.svg"
import upMoney from "@/images/Section-5/upMoney.svg"
import Chart from "@/app/(new-landing)/Home/Invest/images/Chart.webp"


interface CalculateParams {
  ammount: string;
  deadline: number;
  currency: string;
  email: string;
  name: string;
  phone: string;
  discoverySource: string;
  DniCi: string;
}

interface CalculateResult {
  initialAmount: number;
  finalAmount: number;
  investmentTimeState: number;
  finalRestabilityPercent: number;
  rentabilityPerMonth: number;
}

const InvestmentForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [investmentAmountState, setInvestmentAmountState] = useState("");
  // const [investmentTimeState, setInvestmentTimeState] = useState(6);
  const [isWhereToFindButtonActiveState, setWhereToFindButtonActiveState] =
    useState(true);
  const [currencyState, setCurrencyState] = useState("nuevo sol");
  const [isCalculatedState, setIsCalculatedState] = useState(false);
  const [calculatedResultState, setCalculatedResultState] = useState<CalculateResult>({
    initialAmount: 0,
    finalAmount: 0,
    investmentTimeState: 0,
    finalRestabilityPercent: 0,
    rentabilityPerMonth: 0,
  });

  const [calculateParamsState, setCalculateParamsState] =
    useState<CalculateParams>({
      ammount: "",
      deadline: 6,
      currency: "",
      email: "",
      name: "",
      phone: "",
      discoverySource: "",
      DniCi: ""
    });

  const onChangeInputAmout = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === "") {
      setCalculateParamsState((prevState: CalculateParams) => ({
        ...prevState,
        ammount: e.target.value,
      }))
    }
    const regex = /^[0-9]*$/;
    if (!regex.test(value)) {
      return;
    }

    setCalculateParamsState((prevState: CalculateParams) => ({
      ...prevState,
      ammount: value,
    }))
  };

  const [errorState, setErrorState] = useState("");

  const steps = [6, 12, 24];

  const handleButtonClick = (currency: string) => {
    setCurrencyState(currency === "Dólares" ? "dolar" : "nuevo sol");
    setWhereToFindButtonActiveState(!isWhereToFindButtonActiveState);
  };

  const currencySymbol = currencyState === "nuevo sol" ? "S/" : "$";

  const handleCalculateButtonClick = () => {
    const initialAmount =
      parseFloat(calculateParamsState.ammount.replace(/,/g, "")) || 0;
    if (isNaN(initialAmount) || initialAmount <= 0) {
      setErrorState("El monto es obligatorio");
      return;
    }

    if (initialAmount < 1000) {
      setErrorState("El monto debe ser mayor a 1000");
      return;
    } else {
      setErrorState("");
    }
    setIsCalculatedState(false);
    setIsModalVisible(true);
  };

  const handleCalculate = async () => {
    const initialAmount =
      parseFloat(calculateParamsState.ammount.replace(/,/g, "")) || 0;

    if (isNaN(initialAmount) || initialAmount <= 0) {
      setErrorState("El monto es obligatorio");
      return;
    }

    if (initialAmount < 1000) {
      setErrorState("El monto debe ser mayor a 1000");
      return;
    } else {
      setErrorState("");
    }

    const investmentResult = await calculateInvestment({
      ammount: initialAmount,
      deadline: calculateParamsState.deadline,
      currency: currencyState,
      phone: calculateParamsState.phone,
      email: calculateParamsState.email,
      name: calculateParamsState.name,
      discoverySource: calculateParamsState.discoverySource
    });

    setCalculatedResultState({
      initialAmount,
      finalAmount: investmentResult.investmentTotalAmount || 0,
      investmentTimeState: calculateParamsState.deadline,
      finalRestabilityPercent: parseInt(investmentResult.finalRestabilityPercent!),
      rentabilityPerMonth: parseInt(investmentResult.rentabilityPerMonth!),
    });
    setIsCalculatedState(true);
  };

  const handleRecalculateClick = () => {
    setIsCalculatedState(false);

    calculateParamsState.ammount = "";
  };

  const handleInvestClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    let url = "https://calendly.com/finniumeet/20min";

    // if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    //   // iOS
    //   url = "https://apps.apple.com/app/apple-store/id6449205870?pt=126231912&ct=web&mt=8"; // App Store
    // } else if (/android/i.test(userAgent)) {
    //   // Android
    //   url = "https://play.google.com/store/apps/details?id=com.finniu&referrer=utm_source%3Dfinniu_web%26utm_medium%3Dweb%26anid%3Daarki%26aclid%3D{click_id}%26cp1%3D{app_id}"; // Google Play
    // } else if (/Macintosh/.test(userAgent)) {
    //   // macOS
    //   url = "https://apps.apple.com/app/apple-store/id6449205870?pt=126231912&ct=web&mt=8"; // macOS
    // } else {
    //   // other systems
    //   url = "https://play.google.com/store/apps/details?id=com.finniu&referrer=utm_source%3Dfinniu_web%26utm_medium%3Dweb%26anid%3Daarki%26aclid%3D{click_id}%26cp1%3D{app_id}"; // generic
    // }

    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-full relative flex flex-col md:flex-row-1 justify-center items-center gap-10 md:gap-20">
      
        <div className="hidden bg-opacity-50 bg-black border-white border-opacity-30 border-[1px] text-center p-6 md:p-8 rounded-3xl w-full md:w-auto h-full shadow-lg">
          <div className="w-full flex flex-col gap-6 justify-between mt-0 ">
            <div className="flex flex-col md:flex-row gap-6 justify-between ">
              <div className="w-full flex flex-col justify-center items-start gap-2 border-white border-opacity-30 border-[1px] border-dotted bg-opacity-50 bg-[#17171980] text-white rounded-xl p-4 md:p-6">
                <Image src={handMoney} alt="Money con la mano" className="mb-2"/>
                <p className="">En {calculatedResultState.investmentTimeState} meses <span className="text-gray-400">podrías alcanzar</span></p>
                <div className="flex justify-start items-center gap-2">
                  <p className="text-3xl">
                    {currencySymbol}{" "}
                    {calculatedResultState.finalAmount.toLocaleString()}
                  </p>
                  <span className="text-sm rounded-full py-2 px-4 text-[#1AFFB0] bg-[#1AFFB024]">
                    + {calculatedResultState.finalRestabilityPercent ?? "---"}%
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-2 border-white border-opacity-30 border-[1px] border-dotted bg-opacity-50 bg-[#17171980] text-white rounded-xl p-6">
                <Image src={upMoney} alt="Analíticas subiendo" className="mb-2"/>
                <p className="">Simulación<span className="text-gray-400"> mensual</span></p>
                <p className="text-3xl text-[#1AFFB0]">
                  {currencySymbol}{" "}
                  {calculatedResultState.rentabilityPerMonth ?? "---"}
                </p>
              </div>
            </div>
            <Image src={Chart} alt="Analítica de barras" />
          </div>

        </div>

        <div className="w-full md:w-[30rem] bg-white p-8 rounded-3xl h-full shadow-lg">
          <div className="flex flex-col justify-center items-start w-full">
            <h2 className="text-2xl text-black">
              ¿En qué moneda deseas simular?
            </h2>

            <div className="flex gap-8 mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="currency"
                  value="Soles"
                  checked={currencyState === "nuevo sol"}
                  onChange={() => handleButtonClick("Soles")}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
                    currencyState === "nuevo sol" ? "border-purpleTercero" : "border-gray-400"
                  }`}
                >
                  {currencyState === "nuevo sol" && (
                    <div className="w-3 h-3 bg-purpleTercero rounded-full"></div>
                  )}
                </div>
                <span className="text-black text-xl">Soles</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="currency"
                  value="Dólares"
                  checked={currencyState === "dolar"}
                  onChange={() => handleButtonClick("Dólares")}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
                    currencyState === "dolar" ? "border-purpleTercero" : "border-gray-400"
                  }`}
                >
                  {currencyState === "dolar" && (
                    <div className="w-3 h-3 bg-purpleTercero rounded-full"></div>
                  )}
                </div>
                <span className="text-black text-xl">Dólares</span>
              </label>
            </div>
          </div>

          <div className="mt-8">
            <label
              className="block text-black text-2xl"
              htmlFor="investmentAmount"
            >
              ¿Cuál es el monto?
            </label>
            <div className="relative mt-2">
              <span className="absolute mt-2 text-2xl text-black flex items-center">
                {currencySymbol}
              </span>
              <input
                id="investmentAmount"
                type="text"
                value={calculateParamsState.ammount}
                onChange={onChangeInputAmout}
                className={`pl-7 text-xl border-0 border-b-2 ${errorState ? "border-red-500" : "border-grayColorLine"
                  } 2xl:w-full w-full`}
                placeholder="Ingrese el monto"
              />

              {errorState && (
                <p className="text-red-500 text-sm mt-1">{errorState}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-row w-full items-center text-center mt-8 justify-between">
              <label className="block text-black text-2xl mb-4">
                ¿Por cuánto tiempo?
              </label>
            </div>
            <div className="flex items-center relative">
              <div className="w-full mt-2">
                <input
                  type="range"
                  min="0"
                  max={steps.length - 1}
                  step="1"
                  value={steps.indexOf(calculateParamsState.deadline)}
                  onChange={(e) =>
                    setCalculateParamsState((prevState) => ({
                      ...prevState,
                      deadline: steps[Number(e.target.value)],
                    }))
                  }
                  className="w-full"
                  style={{ direction: "ltr" }}
                />
                <div className="flex justify-between text-base text-black mt-4">
                  {steps.map((step) => (
                    <span key={step}>{step} meses</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <ButtonComponent
              text="Ver simulación"
              onClick={handleCalculateButtonClick}
              className="text-lg py-4 px-6 w-full bg-purpleTercero text-white border-solid border-[1px] border-purpleTercero hover:bg-white hover:text-purpleTercero hover:border-solid hover:border-[1px] hover:border-purpleTercero transition duration-150 ease rounded-full"
            />
          </div>

        <ModalComponent
            isOpen={isModalVisible}
            setIsCalculatedState={setIsCalculatedState}
            onClose={() => setIsModalVisible(false)}
            setIsModalVisible={setIsModalVisible}
            setCalculateParamsState={setCalculateParamsState}
            handleCalculateClick={handleCalculate}
          />

        </div>
      {isCalculatedState && <InvestmentCards />}
    </div>


  );
};

export default InvestmentForm;
