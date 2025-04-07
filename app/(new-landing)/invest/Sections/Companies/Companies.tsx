import Image from "next/image"
import LogoEmprelatam from "@/app/(new-landing)/Home/Whoweare/images/logos/emprelatam.webp"
import LogoIncubagraria from "@/app/(new-landing)/Home/Whoweare/images/logos/incubagraria.webp"
import LogoInnovaul from "@/app/(new-landing)/Home/Whoweare/images/logos/innovaul.webp"
import LogoInversionsimple from "@/app/(new-landing)/Home/Whoweare/images/logos/inversionsimple.webp"

const Companies = () => {
  return (
    <section className="py-10 md:py-40 px-8 md:px-0 w-full bg-black text-white flex flex-col justify-center items-center gap-10" >
      <h3 className="text-lg text-gray-400">NOS RESPALDAN</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        <Image src={LogoInnovaul} alt="Logo de Innovaul" className="w-40" />
        <Image src={LogoIncubagraria} alt="Logo de Incubagraria" className="w-40" />
        <Image src={LogoEmprelatam} alt="Logo de Emprelatam" className="w-40" />
        <Image src={LogoInversionsimple} alt="Logo de Inversiones Simple" className="w-40" />
      </div>
    </section>
  )
}

export default Companies