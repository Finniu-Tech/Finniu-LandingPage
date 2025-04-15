import Hero from "@/app/(new-landing)/empresa/Sections/Hero/Hero"
import OurNumbers from "@/app/(new-landing)/empresa/Sections/OurNumbers/OurNumbers"
import Private from "@/app/(new-landing)/empresa/Sections/Private/Private"
import Team from "@/app/(new-landing)/empresa/Sections/Team/Team"
import Mission from "@/app/(new-landing)/empresa/Sections/Mission/Mission"
import Partners from "@/app/(new-landing)/empresa/Sections/Partners/Partners"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <OurNumbers />
      <Private />
      <Team />
      <Mission />
      <Partners />
    </main>
  )
}

export default page