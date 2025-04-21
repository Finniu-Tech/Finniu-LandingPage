import Hero from "@/app/(new-landing)/simulador-de-interes/Sections/Hero/Hero"
import OurNumbers from "@/app/(new-landing)/simulador-de-interes/Sections/OurNumbers/OurNumbers"
import Background from "@/app/(new-landing)/simulador-de-interes/Sections/Background/Background"
import Questions from "@/app/(new-landing)/colocacion-privada/Sections/Questions/Questions"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <OurNumbers />
      {/*<Background />*/}
      <Questions />
    </main>
  )
}

export default page