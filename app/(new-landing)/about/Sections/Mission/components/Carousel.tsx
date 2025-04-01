import Image from "next/image"
import Image1 from "@/app/(new-landing)/about/Sections/Mission/images/Imagen1.webp"
import Image2 from "@/app/(new-landing)/about/Sections/Mission/images/Imagen2.webp"
import Image3 from "@/app/(new-landing)/about/Sections/Mission/images/Imagen3.webp"
import Image4 from "@/app/(new-landing)/about/Sections/Mission/images/Imagen4.webp"
import Image5 from "@/app/(new-landing)/about/Sections/Mission/images/Imagen5.webp"
import Image6 from "@/app/(new-landing)/about/Sections/Mission/images/Imagen6.webp"

const images = [Image1, Image2, Image3, Image4, Image5, Image6]

const Carousel = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-whitePrimary">
      {/* Gradientes a los lados */}
      {/* <div className="absolute left-0 top-0 z-10 h-full w-[200px] bg-gradient-to-r from-whitePrimary to-transparent" /> */}
      {/* <div className="absolute right-0 top-0 z-10 h-full w-[200px] bg-gradient-to-l from-whitePrimary to-transparent" /> */}

      {/* Carrusel animado */}
      <div className="flex gap-10 w-full animate-scroll">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="w-80 flex-shrink-0">
            <Image
              src={img}
              alt={`Imagen ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
