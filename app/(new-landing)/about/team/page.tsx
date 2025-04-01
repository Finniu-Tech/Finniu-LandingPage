import Hero from "@/app/(new-landing)/about/team/Sections/Hero"
import Team from "@/app/(new-landing)/about/team/Sections/Team"

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Team />
    </main>
  )
}

export default page