import Image from "next/image";
import React from "react";
import zaratito from "../../public/car-banner-verano-zaratito.jpg";
import niveles from "../../public/car-banner-niveles.jpg";
import ciclado from "../../public/car-banner-mensual-ciclado.jpg";
import primera from "../../public/car-banner-primera-seleccion.jpg";
import intensivo from "../../public/car-banner-intensivo.jpg";

function ListaProgramas() {
  return (
    <section>
      <div class="relative mx-auto max-w-7xl">
        <div class="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="/blog-post">
              <div class="flex-shrink-0">
                <Image src={zaratito} class="object-cover w-full h-48 rounded-lg"/>                
              </div>
            </a>
            <div class="flex flex-col justify-between flex-1">
              <a href="/blog-post"></a>
              <div class="flex-1">
                
                <a href="#" class="block mt-2 space-y-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Zaratito
                  </h3>
                  <p class="text-lg font-normal text-gray-500">
                    Para estudiantes de 1ro a 6to de primaria.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="/blog-post">
              <div class="flex-shrink-0">
                <Image src={ciclado} class="object-cover w-full h-48 rounded-lg"/>                
              </div>
            </a>
            <div class="flex flex-col justify-between flex-1">
              <a href="/blog-post"></a>
              <div class="flex-1">
                
                <a href="#" class="block mt-2 space-y-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Ciclado
                  </h3>
                  <p class="text-lg font-normal text-gray-500">
                    Para estudiantes de 1ro a 4to de secundaria.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="/blog-post">
              <div class="flex-shrink-0">
                <Image src={niveles} class="object-cover w-full h-48 rounded-lg"/>                
              </div>
            </a>
            <div class="flex flex-col justify-between flex-1">
              <a href="/blog-post"></a>
              <div class="flex-1">
                
                <a href="#" class="block mt-2 space-y-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Niveles
                  </h3>
                  <p class="text-lg font-normal text-gray-500">
                    Para estudiantes egresados del colegio.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="/blog-post">
              <div class="flex-shrink-0">
                <Image src={primera} class="object-cover w-full h-48 rounded-lg"/>                
              </div>
            </a>
            <div class="flex flex-col justify-between flex-1">
              <a href="/blog-post"></a>
              <div class="flex-1">
                
                <a href="#" class="block mt-2 space-y-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Primera Selección
                  </h3>
                  <p class="text-lg font-normal text-gray-500">
                    Preparación gradual para jóvenes de 5to de secundaria.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="/blog-post">
              <div class="flex-shrink-0">
                <Image src={intensivo} class="object-cover w-full h-48 rounded-lg"/>                
              </div>
            </a>
            <div class="flex flex-col justify-between flex-1">
              <a href="/blog-post"></a>
              <div class="flex-1">
                
                <a href="#" class="block mt-2 space-y-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Intensivo
                  </h3>
                  <p class="text-lg font-normal text-gray-500">
                    Para estudiantes egresados de 5to de secundaria.
                  </p>
                </a>
              </div>
            </div>
          </div>         
        </div>
      </div>
    </section>
  );
}

export default ListaProgramas;
