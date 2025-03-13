// import HowItWorksSection from "./components/Section-3/HowItWorksSection";
// import SimulatorInvestmentSection from "./components/Section-5/SimulatorInvestmentSection";
// import StepInvestmentGuideSection from "./components/Section-4/StepInvestmentGuideSection";
// import DownloadAppSection from "./components/Section-1/DownloadAppSection";
// import FixedTermsSection from "./components/Section-2/FixedTermsSection";
// import TestimonialsSection from "./components/Section-6/TestimonialsSection";
// import SponsoredV2 from "./about/components/Section-2/SponsoredSevtionV2";
// import ToStoresSection from "./about/components/Section-2/ToStoresSection";
// import Susbcribe from "./components/Section-8/Susbcribe";
// import MovilOperations from "@/components/MovilOperations";
import Hero from "@/app/new-landing/sections/Hero/Hero"
import Whoweare from "@/app/new-landing/sections/Whoweare/Whoweare"
import Ready from "@/app/new-landing/sections/Ready/Ready"
import Invest from "@/app/new-landing/sections/Invest/Invest"
import Theysay from "@/app/new-landing/sections/Theysay/Theysay"

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  justify-between   ">
      {/* <DownloadAppSection />
        <ToStoresSection />
      <MovilOperations />
      <FixedTermsSection />
        <SponsoredV2 />
      <HowItWorksSection />
      <StepInvestmentGuideSection />
      <SimulatorInvestmentSection />
        <Susbcribe />

      <TestimonialsSection /> */}

      {/* <RegisterSection /> */}

      <Hero />
      <Whoweare />
      <Ready />
      <Invest />
      <Theysay />
    </main>
  );
}
