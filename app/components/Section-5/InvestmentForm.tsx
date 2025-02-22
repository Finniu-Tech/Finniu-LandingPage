"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import LogoFinniuLight from "@/images/Section-5/LogoFinniuLight.png";
import Bill from "@/images/Section-5/Bill.png";
import { calculateInvestment } from "@/app/actions/calculateInvestment";
import ModalComponent from "@/components/ModalComponent";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface CalculateParams {
  ammount: string;
  deadline: number;
  currency: string;
  email: string;
  name: string;
  phone: string;
  discoverySource: string
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
      discoverySource: ""
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
    <div className="w-[351px] 2xl:w-[618px] mt-4 2xl:mt-0 bg-white relative flex flex-col justify-center items-center p-12 rounded-3xl h-[474px] 2xl:h-[620px] leading-[49px] shadow-lg">
      {isCalculatedState ? (
        <div className="text-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={LogoFinniuLight} alt="Logo" width={80} />
          </div>

          <div className="flex flex-row gap-6 justify-between mt-0">
            <div>
              <p className="text-[16px] text-black ">Si comienzas con</p>
              <p className="text-[25px] font-bold text-black text-start">
                {currencySymbol}{" "}
                {calculatedResultState.initialAmount.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-[16px] text-black ">con un % de retorno</p>
              <p className="text-[25px] font-bold text-simulatorText text-center ">
                {calculatedResultState.finalRestabilityPercent ?? "---"}%
              </p>
            </div>

          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-[20px] 2xl:text-[32px] text-black font-bold ">
              <span >En </span>
              <span className="text-lighBlueColorSimulador text-[20px] 2xl:text-[32px] font-bold">
                {calculatedResultState.investmentTimeState} meses
              </span>
              <span> recibirás</span>
              <span className="text-[20px] 2xl:text-[32px] ml-[5px] font-bold">
                &#128184;
              </span>
            </p>
          </div>

          <div className="bg-sumulatorContainer  flex justify-center items-center  2xl:h-[92px] m-auto p-0 2xl:p-2 rounded-xl my-2">
            <p className="text-[35px] font-bold text-simulatorText">
              {currencySymbol}{" "}
              {calculatedResultState.finalAmount.toLocaleString()}
            </p>
          </div>
          <div className="bg-simulatorRecived  flex justify-center items-center  2xl:h-[70px] m-auto p-0 2xl:p-2 rounded-xl my-2">
            <FontAwesomeIcon icon={faCalendar} className="text-simulatorText text-2xl" />
            <p className="ml-2 text-[18px]  font-bold">
              Cada mes recibiras {currencySymbol}{calculatedResultState.rentabilityPerMonth ?? "---"}
            </p>
          </div>


          <ButtonComponent
            text="Me interesa"
            onClick={handleInvestClick}
            className="w-[314px] 2xl:w-[441px] 2xl:h-[77px] h-12 text-[16px] mt-3 2xl:mt-0 2xl:text-[24px] bg-blueColorButton text-white rounded-xl mb-4"
          />

          <button
            onClick={handleRecalculateClick}
            className="text-blueColorButton font-semibold text-[16px] 2xl:text-[24px]"
          >
            Volver a calcular
          </button>
        </div>
      ) : (
        <div>
          <div className=" flex flex-row items-center gap-2 xl:hidden absolute -top-[55px] z-20">
            <h1 className=" text-[28px] lg:text-[30px] font-bold">
              Proyecta tus metas
            </h1>
            <div className="h-[38px] mb-3">
              <Image src={Bill} alt="bill" height={38} />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="text-[16px] 2xl:text-[26px] font-bold text-black">
              Quiero simular en
            </h2>

            <div
              className={`flex flex-row m-2 w-[162px] 2xl:w-[242px] items-center 2xl:h-[60px] h-[45px] p-2 bg-blueColorBackground justify-around rounded-full ${isWhereToFindButtonActiveState
                ? "bg-lightBlueColor"
                : "bg-blueDarkColor"
                }`}
            >
              <ButtonComponent
                text="Soles"
                onClick={() => handleButtonClick("Soles")}
                className={`2xl:h-[45px] h-[33px] text-[15px] 2xl:text-[20px] shadow-md w-[73px] 2xl:w-[111px] gap-2 flex justify-center items-center rounded-full ${isWhereToFindButtonActiveState
                  ? "bg-lightColor text-blackColorText"
                  : "bg-blueDarkColor text-white"
                  }`}
              ></ButtonComponent>
              <ButtonComponent
                text="Dólares"
                onClick={() => handleButtonClick("Dólares")}
                className={`2xl:h-[45px] h-[37px] w-[73px] 2xl:w-[111px] m-1 flex justify-center items-center gap-2 rounded-full text-[15px] 2xl:text-[20px] ${isWhereToFindButtonActiveState
                  ? "bg-lightBlueColor text-blueDarkColor"
                  : "bg-blueColorButton text-white"
                  }`}
              ></ButtonComponent>
            </div>
          </div>

          <div>
            <label
              className="block text-black text-[15px] xl:text-[20px] font-bold mb-0 2xl:mb-2"
              htmlFor="investmentAmount"
            >
              ¿Cuál es el monto?
            </label>
            <div className="relative">
              <span className="absolute mt-2 left-0 pl-3  text-lg 2xl:text-2xl text-grayColorBackground flex items-center">
                {currencySymbol}
              </span>
              <input
                id="investmentAmount"
                type="text"
                value={calculateParamsState.ammount}
                onChange={onChangeInputAmout}
                className={`pl-10 pr-3 py-2 2xl:text-[18px] border-t-0 border-l-0 border-r-0 text-sm border-b-[5px] ${errorState ? "border-red-500" : "border-grayColorLine"
                  } 2xl:w-full w-[320px]`}
                placeholder="Ingrese el monto"
              />

              {errorState && (
                <p className="text-red-500 text-sm mt-1">{errorState}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-row w-full items-center text-center mt-[10px] justify-between">
              <label className="block text-black text-[15px] 2xl:text-[20px] font-bold mb-2">
                ¿Por cuánto tiempo?
              </label>
              <h2 className="text-[15px]">
                {calculateParamsState.deadline} meses
              </h2>
            </div>
            <div className="flex items-center relative">
              <div className="2xl:w-full w-[320px] mt-0 2xl:mt-[20px]">
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
                <div className="flex justify-between text-sm text-black mt-1">
                  {steps.map((step) => (
                    <span key={step}>{step} meses</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <ButtonComponent
              text="Calcular"
              onClick={handleCalculateButtonClick}
              className="w-full bg-blueColorButton text-white rounded-full py-2 mt-4"
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
      )}
    </div>
  );
};

export default InvestmentForm;
