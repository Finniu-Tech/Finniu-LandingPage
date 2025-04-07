import Hero from "@/app/(new-landing)/transparency/Sections/Hero/Hero"
import Questions from "@/app/(new-landing)/transparency/Sections/Questions/Questions"
import Capital from "@/app/(new-landing)/portfolio/Sections/Capital/Capital"

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