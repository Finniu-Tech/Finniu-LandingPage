import Link from "next/link"
import Background01 from "@/app/(new-landing)/images/backgrounds/background01.png"
import ButtonLink from "@/app/(new-landing)/components/ButtonLink"
import Mail from "@/app/(new-landing)/contacto/Sections/Hero/components/icons/Mail"
import Phone from "@/app/(new-landing)/contacto/Sections/Hero/components/icons/Phone"
import Ubication from "@/app/(new-landing)/contacto/Sections/Hero/components/icons/Ubication"

const Hero = () => {
  return (
    <section
      className="py-10 md:py-40 px-8 md:px-40 xxxl:px-80 text-white w-full h-full md:h-dvh flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${Background01.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="mt-20 md:mt-0 w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-[50rem] flex flex-col items-center md:items-start justify-center gap-4 md:gap-6">
          <h3 className="text-4xl md:text-7xl w-full md:w-[40rem] xxxl:w-[50rem] text-center md:text-start">
            Contáctenos
          </h3>
          <div className="text-center md:text-start">
            <p>
              ¿Tienes alguna pregunta o comentario?
            </p>
            <p>
              ¡Envíanos un mensaje!
            </p>
          </div>
          <div className="w-full">
            <ul className="w-full flex flex-col gap-4">
              <li>
                <Link
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hola@finniu.com"
                  className="w-fit flex items-center gap-2"
                >
                  <div className="flex items-center justify-center rounded-full size-8 bg-white">
                    <Mail />
                  </div>
                  hola@finniu.com
                </Link >
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send?phone=51983796139&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20info%20sobre%20Finniu.%20Mi%20nombre%20es%20"
                  className="w-fit flex items-center gap-2"
                >
                  <div className="flex items-center justify-center rounded-full size-8 bg-white">
                    <Phone />
                  </div>
                  +51 983 796 139
                </Link >
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/place/Finniu/@-12.090882,-76.9979061,18z/data=!4m6!3m5!1s0x9105c7c6dd9c6801:0x32bb4f0eff87fa1f!8m2!3d-12.0910965!4d-76.9961964!16s%2Fg%2F11wxl5x3hl?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                  className="w-fit flex items-center gap-2"
                >
                  <div className="flex items-center justify-center rounded-full size-8 bg-white">
                    <Ubication />
                  </div>
                  Av. San Luis 2076, San Borja 15037
                </Link >
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 md:pt-24">
          <form action="" className="w-full flex flex-col gap-6 md:gap-4">
            <input type="text" placeholder="Nombre y Apellido" className="w-full p-3 placeholder-white bg-white border-0 border-b-[1px] bg-opacity-5"/>
            <input type="email" placeholder="Email" className="w-full p-3 placeholder-white bg-white border-0 border-b-[1px] bg-opacity-5"/>
            <input type="text" placeholder="DNI o CE" className="w-full p-3 placeholder-white bg-white border-0 border-b-[1px] bg-opacity-5"/>
            <input type="text" placeholder="Teléfono" className="w-full p-3 placeholder-white bg-white border-0 border-b-[1px] bg-opacity-5"/>
            <input type="text" placeholder="Mensaje" className="w-full p-3 placeholder-white bg-white border-0 border-b-[1px] bg-opacity-5"/>
            <ButtonLink href="#" text="Enviar" className="w-full md:w-40 flex justify-center items-center text-black py-4 px-6 rounded-full border-[1px] border-solid bg-white hover:bg-transparent hover:text-white transition duration-150 ease"/>
          </form>
        </div>
      </div>
      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3073877916836!2d-76.99877132386298!3d-12.09109648814916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7c6dd9c6801%3A0x32bb4f0eff87fa1f!2sFinniu!5e0!3m2!1ses-419!2spe!4v1744504095649!5m2!1ses-419!2spe"
          className="w-full h-96"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default Hero