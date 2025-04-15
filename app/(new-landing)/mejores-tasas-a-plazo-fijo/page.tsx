import Hero from "@/app/(new-landing)/mejores-tasas-a-plazo-fijo/Sections/Hero/Hero"
import OurNumbers from "@/app/(new-landing)/empresa/Sections/OurNumbers/OurNumbers"
import Comparator from "@/app/(new-landing)/mejores-tasas-a-plazo-fijo/Sections/Comparator/Comparator"
import Questions from "@/app/(new-landing)/plazo-fijo/Sections/Questions/Questions"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <OurNumbers />
      <Comparator />
      <Questions />
    </main>
  )
}

export default page