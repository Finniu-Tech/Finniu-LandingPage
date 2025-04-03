import Hero from "@/app/(new-landing)/portfolio/Sections/Hero/Hero"
import Optimization from "@/app/(new-landing)/portfolio/Sections/Optimization/Optimization"
import Companies from "@/app/(new-landing)/portfolio/Sections/Companies/Companies"
import Capital from "@/app/(new-landing)/portfolio/Sections/Capital/Capital"
import Portfolio from "@/app/(new-landing)/portfolio/Sections/Portfolio/Portfolio"

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