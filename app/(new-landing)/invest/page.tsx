import Hero from "@/app/(new-landing)/invest/Sections/Hero/Hero"
import Companies from "@/app/(new-landing)/invest/Sections/Companies/Companies"
import FixedTerm from "@/app/(new-landing)/invest/Sections/FixedTerm/FixedTerm"
import OurNumbers from "@/app/(new-landing)/invest/Sections/OurNumbers/OurNumbers"
import Invest from "@/app/(new-landing)/invest/Sections/Invest/Invest"
import Questions from "@/app/(new-landing)/invest/Sections/Questions/Questions"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Companies />
      <FixedTerm />
      <OurNumbers />
      <Invest />
      <Questions />
    </main>
  )
}

export default page