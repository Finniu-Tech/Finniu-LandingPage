import Arrowdown from "@/app/(new-landing)/Home/Hero/icons/Arrowdown"

const Bounce = () => {
  return (
    <button className="text-lg animate-bounce ease-out text-gray-400 flex flex-col items-center gap-2">
      Desliza hacia abajo
      <div className="">
        <Arrowdown />
      </div>
    </button>
  )
}

export default Bounce