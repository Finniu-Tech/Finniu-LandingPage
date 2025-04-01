import Image from "next/image"
import Hero from "@/app/(new-landing)/about/Sections/Hero/Hero"
import OurNumbers from "@/app/(new-landing)/about/Sections/OurNumbers/OurNumbers"
import Private from "@/app/(new-landing)/about/Sections/Private/Private"
import Team from "@/app/(new-landing)/about/Sections/Team/Team"
import Mission from "@/app/(new-landing)/about/Sections/Mission/Mission"
import Partners from "@/app/(new-landing)/about/Sections/Partners/Partners"

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