import Arrowdown from "@/app/new-landing/sections/Hero/icons/Arrowdown"

const Bounce = () => {
  return (
    <button className="text-lg text-gray-400 flex flex-col items-center gap-2">
      Desliza hacia abajo
      <div className="animate-bounce">
        <Arrowdown />
      </div>
    </button>
  )
}

export default Bounce