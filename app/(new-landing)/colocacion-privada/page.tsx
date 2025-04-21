import Hero from "@/app/(new-landing)/colocacion-privada/Sections/Hero/Hero"
import Companies from "@/app/(new-landing)/colocacion-privada/Sections/Companies/Companies"
import FixedTerm from "@/app/(new-landing)/colocacion-privada/Sections/FixedTerm/FixedTerm"
import OurNumbers from "@/app/(new-landing)/colocacion-privada/Sections/OurNumbers/OurNumbers"
import Invest from "@/app/(new-landing)/colocacion-privada/Sections/Invest/Invest"
import Questions from "@/app/(new-landing)/colocacion-privada/Sections/Questions/Questions"

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