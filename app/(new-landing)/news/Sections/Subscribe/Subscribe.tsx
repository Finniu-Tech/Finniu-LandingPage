const Subscribe = () => {
  return (
    <section className="py-10 md:py-40 px-8 md:px-0 w-full bg-black text-white flex flex-col justify-center items-center gap-10" >
      <h3 className="flex flex-col gap-6 text-4xl md:text-6xl w-full text-center">
        Suscríbete a nuestro newsletter
      </h3>
      <div className="w-full md:w-fit flex flex-col md:flex-row justify-between items-center bg-grayBlack p-6 md:px-10 md:py-8 rounded-3xl gap-6 md:gap-10">
        <input
          type="text" 
          placeholder="Ingresa tu correo electrónico"
          className="bg-transparent border-transparent placeholder-white w-full md:w-[25rem] placeholder:text-sm text-lg"
        />
        <button className="w-full md:w-fit text-white py-4 px-6 rounded-full bg-purplePrincipal hover:bg-white hover:text-purplePrincipal transition duration-150 ease">
          Suscribirse
        </button>
      </div>
    </section>
  )
}

export default Subscribe