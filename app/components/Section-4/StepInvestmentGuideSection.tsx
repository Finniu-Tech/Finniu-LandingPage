// "use client";
// import { useState, useEffect, SetStateAction, useRef } from "react";
// import Image from "next/image";
// import CustomLeftArrow from "@/components/CustomLeftArrow";
// import CustomRightArrow from "@/components/CustomRightArrow";
// import HandCellPhone from "@/images/Section-4/HandCellphone.png";
// import VirtualWallet from "@/images/Section-4/VirtualWallet.png";
// import QuarterlyReports from "@/images/Section-4/QuarterlyReports.png";
// import ProjectYourGoals from "@/images/Section-4/ProjectYourGoals.png";

// const StepInvestmentGuideSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [currentIndexState, setCurrentIndexState] = useState(0);
//   const [isVisibleState, setIsVisible] = useState(false);

//   const touchStartXRef = useRef<number | null>(null);
//   const touchEndXRef = useRef<number | null>(null);

//   const slidesData = [
//     {
//       title: "Tus finanzas en la palma de tu mano",
//       subtitle: "Finanzas fácil",
//       description:
//         " Visualiza y gestiona todas tus finanzas de forma sencilla y rápida, brindándote un vistazo completo de tus operaciones desde nuestra app.",
//       imageSrc: HandCellPhone,
//       bgColor: "bg-whiteColor text-blackColorText",
//     },
//     {
//       title: "Informes Trimestrales",
//       subtitle: "Optimizamos tu dinero",
//       description:
//         "Maximizamos tu patrimonio. Es por ello que te ofrecemos una visibilidad continua sobre el rendimiento de tus operaciones a través de informes trimestrales.",
//       imageSrc: QuarterlyReports,
//       bgColor: "bg-blueDarkColor text-white",
//     },
//     {
//       title: "Proyecta tus metas",
//       subtitle: "Estamos listos para crecer contigo",
//       description:
//         "Podrás proyectar los rendimientos mensuales y totales de tus operaciones de manera rápida y sencilla.",
//       imageSrc: ProjectYourGoals,
//       bgColor: "bg-white text-blackColorText",
//     },
//     // {
//     //   title: "Billetera Virtual",
//     //   description:
//     //     "Pronto podrás disfrutar de nuestra billetera virtual, una herramienta adicional para gestionar de manera conveniente tus inversiones.",
//     //   imageSrc: VirtualWallet,
//     //   bgColor: "bg-lightSkyBlue text-blackColorText",
//     // },
//   ];

//   const handleNextSlide = () => {
//     setCurrentIndexState((prevIndex) =>
//       prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndexState((prevIndex) =>
//       prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleDotClick = (index: number) => {
//     setCurrentIndexState(index);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(entry.isIntersecting);
//           if (entry.isIntersecting) {
//             setCurrentIndexState(0);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     let interval: NodeJS.Timeout | null = null;

//     if (isVisibleState) {
//       interval = setInterval(handleNextSlide, 20000); // change 20 seconds
//     } else {
//       if (interval) clearInterval(interval);
//     }

//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [isVisibleState]);

//   const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
//     touchStartXRef.current = e.targetTouches[0].clientX;
//   };

//   const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
//     touchEndXRef.current = e.targetTouches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
//       const touchDiff = touchStartXRef.current - touchEndXRef.current;

//       if (touchDiff > 50) {
//         handleNextSlide();
//       }

//       if (touchDiff < -50) {
//         handlePrevSlide();
//       }
//     }
//     touchStartXRef.current = null;
//     touchEndXRef.current = null;
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className={`min-h-[598px] xl:min-h-screen flex justify-center w-full items-center py-10 ${slidesData[currentIndexState].bgColor}`}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="container relative container-section">
//         <div className="flex flex-col-reverse xl:flex-row items-center justify-between">
//           <div className=" xl:w-[498px] w-[292px] text-left xl:text-right mb-0">
//             <p className="text-[21px] xl:text-[44px] font-bold mb-0 2xl:mb-2">
//               {slidesData[currentIndexState].title} <br />
//             </p>
//             <p className="text-[19px] xl:text-[36px] mb-0 2xl:mb-4">
//               {slidesData[currentIndexState].subtitle}
//             </p>
//             <p className="text-[16px] xl:text-[24px] font-medium mb-0 xl:mb-6 2xl:text-right text-justify">
//               {slidesData[currentIndexState].description}
//             </p>
//             <div className="hidden xl:flex flex-row gap-8 justify-center xl:justify-end xl:gap-3">
//               <button
//                 onClick={handlePrevSlide}
//                 disabled={currentIndexState === 0}
//                 className={`cursor-pointer ${
//                   currentIndexState === 0 ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 <CustomLeftArrow
//                   isFirstSlide={currentIndexState === 0}
//                   isLastSlide={currentIndexState === slidesData.length - 1}
//                 />
//               </button>
//               <button
//                 onClick={handleNextSlide}
//                 disabled={currentIndexState === slidesData.length - 1}
//                 className={`cursor-pointer ${
//                   currentIndexState === slidesData.length - 1
//                     ? "opacity-50 cursor-not-allowed"
//                     : ""
//                 }`}
//               >
//                 <CustomRightArrow
//                   isFirstSlide={currentIndexState === 0}
//                   isLastSlide={currentIndexState === slidesData.length - 1}
//                 />
//               </button>
//             </div>
//           </div>
//           <div className="relative flex justify-end image-step">
//             {slidesData.map((slide, index) => (
//               <Image
//                 key={index}
//                 src={slide.imageSrc}
//                 alt={`slide-${index + 1}`}
//                 className={`slide-image ${
//                   index === currentIndexState ? "active" : ""
//                 } object-cover w-[235px] xl:w-[532px]`}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-center mt-4">
//           {slidesData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`xl:w-5 w-3 h-3 xl:h-5 rounded-full mx-2 ${
//                 index === currentIndexState
//                   ? "bg-blueDarkColor"
//                   : "bg-lightBlueColor"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StepInvestmentGuideSection;
