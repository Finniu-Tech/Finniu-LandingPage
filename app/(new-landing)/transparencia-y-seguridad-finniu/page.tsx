import Hero from "@/app/(new-landing)/transparencia-y-seguridad-finniu/Sections/Hero/Hero"
import Questions from "@/app/(new-landing)/transparencia-y-seguridad-finniu/Sections/Questions/Questions"
import Capital from "@/app/(new-landing)/portafolio-finniu/Sections/Capital/Capital"

const page = () => {
  return ( 
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Questions />
      <Capital />
    </main>
  )
}

export default page