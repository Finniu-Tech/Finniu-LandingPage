interface Props {
  number: string,
  title: string,
  phrase: string,
}

const Card = ({number, title, phrase} : Props) => {
  return (
    <div className="max-w-lg h-full rounded-3xl border-[1px] border-solid bg-white border-whiteSecondary px-8 py-6 flex flex-col justify-between items-start">
      <div className="w-full flex flex-col items-start gap-2">
        <div className="flex flex-row gap-4 items-center md:flex-col md:items-start">
          <p className="text-purplePrincipal text-4xl font-bold">
            {number}
          </p>
          <h4 className="text-xl md:text-2xl font-bold">
            {title}
          </h4>
        </div>
        <p className="text-lg">
          {phrase}
        </p>
      </div>
    </div>
  )
}

export default Card