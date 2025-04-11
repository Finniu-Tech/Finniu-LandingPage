import Hero from "@/app/(new-landing)/simulator/Sections/Hero/Hero"
import OurNumbers from "@/app/(new-landing)/simulator/Sections/OurNumbers/OurNumbers"
import Background from "@/app/(new-landing)/simulator/Sections/Background/Background"
import Questions from "@/app/(new-landing)/invest/Sections/Questions/Questions"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <OurNumbers />
      <Background />
      <Questions />
    </main>
  )
}

export default page