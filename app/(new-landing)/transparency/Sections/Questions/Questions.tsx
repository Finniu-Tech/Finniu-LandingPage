"use client"

import { useState } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react"
import Search from "@/app/(new-landing)/transparency/Sections/Questions/images/icons/Serach"
import noQuestion from "@/app/(new-landing)/transparency/Sections/Questions/images/noQuestion.png"
import QUESTIONS from "@/app/(new-landing)/transparency/Sections/Questions/helpers/questions"
import ButtonLink from "@/app/(new-landing)/components/ButtonLink"

const Questions = () => {
  const [search, setSearch] = useState("")
  const filteredQuestions = QUESTIONS.filter((question) =>
    question.title.toLowerCase().includes(search.toLowerCase()) ||
    (typeof question.phrase === "string" && question.phrase.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <section className="py-10 md:py-40 px-8 md:px-0 bg-whitePrimary text-black w-full flex flex-col justify-center items-center gap-4 md:gap-8">
      <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-8">
        <h3 className="text-4xl md:text-6xl">Preguntas Frecuentes</h3>
        <h3 className="text-lg md:text-xl">Aquí puedes encontrar algunas respuestas a tus dudas</h3>
      </div>
      <div className="w-full md:w-[35rem] mt-4 md:mt-0 flex justify-between items-center bg-whiteSecondary p-4 rounded-3xl">
        <input
          type="text"
          placeholder="¿Tienes dudas? Búscalas aquí"
          className="w-full mr-10 border-0 bg-whiteSecondary placeholder:text-gray-500 placeholder:text-sm md:placeholder:text-lg"
          value={search}
          onChange={(question) => setSearch(question.target.value)}
        />
        <div className="text-gray-400">
          <Search />
        </div>
      </div>
      <div className="w-full md:w-[35rem] flex flex-col justify-center items-center gap-2 md:gap-4">
        {filteredQuestions.length > 0 ? (
          <Accordion className="border-0 w-full">
            {filteredQuestions.map((question, index) => (
                <AccordionPanel key={index}>
                  <AccordionTitle className="py-8 px-0 text-black hover:bg-transparent !bg-transparent">
                    {question.title}
                  </AccordionTitle>
                  <AccordionContent className="px-0">
                    {typeof question.phrase === 'function' ? question.phrase() : <p>{question.phrase}</p>}
                  </AccordionContent>
                </AccordionPanel>
            ))}
          </Accordion>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-center">
              Lo sentimos, no se encontraron coincidencias para 
              <br />
              &quot;{search}&quot;
            </p>
            <p className="text-center text-gray-500">
              Prueba acortar o reformular la búsqueda
            </p>
            <Image className="mt-4" src={noQuestion} alt="Imagen No question" />
          </div>
        )}
      </div>
      <ButtonLink href="#" text="Empieza ahora" className="mt-2 md:mt-4 text-white py-4 px-6 rounded-full bg-purplePrincipal border-solid border-[1px] border-purplePrincipal hover:bg-white hover:text-purplePrincipal hover:border-solid hover:border-[1px] hover:border-purplePrincipal transition duration-150 ease"/>
    </section>
  )
}

export default Questions