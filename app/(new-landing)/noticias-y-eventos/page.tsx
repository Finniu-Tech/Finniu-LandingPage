import Hero from "@/app/(new-landing)/noticias-y-eventos/Sections/Hero/Hero"
import Events from "@/app/(new-landing)/noticias-y-eventos/Sections/Events/Events"
import Subscribe from "@/app/(new-landing)/noticias-y-eventos/Sections/Subscribe/Subscribe"
import Press from "@/app/(new-landing)/noticias-y-eventos/Sections/Press/Press"
import Capital from "@/app/(new-landing)/portafolio-finniu/Sections/Capital/Capital"

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