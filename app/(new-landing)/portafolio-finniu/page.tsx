import Hero from "@/app/(new-landing)/portafolio-finniu/Sections/Hero/Hero"
import Optimization from "@/app/(new-landing)/portafolio-finniu/Sections/Optimization/Optimization"
import Companies from "@/app/(new-landing)/portafolio-finniu/Sections/Companies/Companies"
import Capital from "@/app/(new-landing)/portafolio-finniu/Sections/Capital/Capital"
import Portfolio from "@/app/(new-landing)/portafolio-finniu/Sections/Portfolio/Portfolio"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Optimization />
      <Companies />
      <Capital />
      <Portfolio />
    </main>
  )
}

export default page