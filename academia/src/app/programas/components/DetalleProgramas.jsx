import Image from "next/image";
import React from "react";
import zaratito from "../../../../public/car-banner-verano-zaratito.jpg";
import niveles from "../../../../public/car-banner-niveles.jpg";
import ciclado from "../../../../public/car-banner-mensual-ciclado.jpg";
import primera from "../../../../public/car-banner-primera-seleccion.jpg";
import intensivo from "../../../../public/car-banner-intensivo.jpg";

function DetalleProgramas() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={zaratito}
                alt="blog"
                class="lg:h-48 md:h-36 w-full object-cover object-center"
              />
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Zaratito
                </h1>
                <p class="leading-relaxed mb-3">
                  Adelanto para niños de 3º a 6º de primaria en Matemática,
                  Comunicación y CTA.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Ver más
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image src={ciclado} alt="blog" class="lg:h-48 md:h-36 w-full object-cover object-center" />
              
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Niveles
                </h1>
                <p class="leading-relaxed mb-3">
                  Para estudiantes de 1º a 4º de secundaria.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Ver más
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image src={primera} alt="blog" class="lg:h-48 md:h-36 w-full object-cover object-center" />
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Primera Selección
                </h1>
                <p class="leading-relaxed mb-3">
                 Preparacion gradual para jóvenes de 5º de secundaria.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Ver más
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image src={niveles} alt="blog" class="lg:h-48 md:h-36 w-full object-cover object-center" />
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Niveles
                </h1>
                <p class="leading-relaxed mb-3">
                  Para estudiantes egresados del colegio.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Ver más
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image src={intensivo} alt="blog" class="lg:h-48 md:h-36 w-full object-cover object-center" />
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Intensivo
                </h1>
                <p class="leading-relaxed mb-3">
                  Para estudiantes egresados de 5to de secundaria.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Ver más
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalleProgramas;
