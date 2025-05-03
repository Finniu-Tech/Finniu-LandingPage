import Hero from "@/app/(new-landing)/comunicacion/Sections/Hero/Hero"
import OurNumbers from "@/app/(new-landing)/simulador-de-interes/Sections/OurNumbers/OurNumbers";
import * as OurNumberEmpresa from "@/app/(new-landing)/empresa/Sections/OurNumbers/OurNumbers";
import * as Contacto from "@/app/(new-landing)/contacto/Sections/Hero/Hero";
const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <OurNumbers />
        <OurNumberEmpresa.default />
        <Contacto.default />
    </main>
  )
}

export default page