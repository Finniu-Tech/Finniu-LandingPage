import Hero from "@/app/(new-landing)/bestrate/Sections/Hero/Hero"
import OurNumbers from "@/app/(new-landing)/about/Sections/OurNumbers/OurNumbers"
import Comparator from "@/app/(new-landing)/bestrate/Sections/Comparator/Comparator"
import Questions from "@/app/(new-landing)/invest/Sections/Questions/Questions"

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