import Image from "next/image";
import React from "react";
import imagen from "../../../../public/image.png";

function Portada() {
  return (
    <section className="text-gray-600 body-font bg-lime-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            width={720}
            height={600}
            className="object-cover object-center rounded"
            alt="hero"
            src={imagen}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Academias
            <br className="hidden lg:inline-block" />
            Zarate
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            La Academia Zarate ubicada en Huancayo - Junín, renueva cada año
            su compromiso de brindar el más alto nivel académico y la mejor
            preparación pre universitaria adaptada a modalidad <span className="font-bold">PRESENCIAL y
            VIRTUAL</span> , según las exigencias de las mejores universidades de
            nuestra región y del país.
            
          </p>
          <p className="mb-8 leading-relaxed text-black">
              Nuestra propuesta integral basada en resultados se desarrolla en
              beneficio de los miles de jóvenes que año tras año buscan su
              ingreso a un centro superior de estudios, complementamos su
              formación formación de manera continua con un alto estándar de
              exigencia que permite la interacción y preparación oportuna para
              asegurar su ingreso y éxito en la universidad.
            </p>
            <p className="mb-8 leading-relaxed text-black">
              Durante 42 años hemos aportado un entorno de calidad educativa, y
              tenemos la satisfacción de ser reconocidos por generaciones de
              estudiantes que han pasado por nuestras aulas y hoy son grandes
              profesionales y excelentes personas que afrontan exitosamente los
              retos de la vida.
            </p>
          
        </div>
      </div>
    </section>
  );
}

export default Portada;
