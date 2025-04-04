import Hero from "@/app/(new-landing)/news/Sections/Hero/Hero"
import Events from "@/app/(new-landing)/news/Sections/Events/Events"
import Subscribe from "@/app/(new-landing)/news/Sections/Subscribe/Subscribe"
import Press from "@/app/(new-landing)/news/Sections/Press/Press"
import Capital from "@/app/(new-landing)/portfolio/Sections/Capital/Capital"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Events />
      <Subscribe />
      <Press />
      <Capital />
    </main>
  )
}

export default page