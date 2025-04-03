import CardPortfolio from "@/app/(new-landing)/portfolio/Sections/Portfolio/components/CardPortfolio"
import ArrowLeft from "@/app/(new-landing)/Home/Theysay/images/icons/ArrowLeft"
import ArrowRight from "@/app/(new-landing)/Home/Theysay/images/icons/ArrowRight"
import SliderDemolitor from "@/app/(new-landing)/portfolio/Sections/Portfolio/components/SliderDemolitor"
import SliderCarter from "@/app/(new-landing)/portfolio/Sections/Portfolio/components/SliderCarter"
import SliderNecsac from "@/app/(new-landing)/portfolio/Sections/Portfolio/components/SliderNecsac"
import SliderEntoGreen from "@/app/(new-landing)/portfolio/Sections/Portfolio/components/SliderEntoGreen"

const Portfolio = () => {
  return (
    <section className="py-10 pb-24 md:py-40 px-8 md:px-40 xxxl:px-80 w-full flex flex-col items-start justify-center gap-20 md:gap-10 bg-whitePrimary text-black">
      <SliderDemolitor arrowLeft={<ArrowLeft />} arrowRight={<ArrowRight />} cardPortfolio={CardPortfolio} />
      <SliderCarter arrowLeft={<ArrowLeft />} arrowRight={<ArrowRight />} cardPortfolio={CardPortfolio} />
      <SliderNecsac arrowLeft={<ArrowLeft />} arrowRight={<ArrowRight />} cardPortfolio={CardPortfolio} />
      <SliderEntoGreen arrowLeft={<ArrowLeft />} arrowRight={<ArrowRight />} cardPortfolio={CardPortfolio} />
    </section>
  )
}

export default Portfolio