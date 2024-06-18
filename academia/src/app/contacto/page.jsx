import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

function Contacto() {
  return (
    <div>
      <NavBar />
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d975.4314499304882!2d-75.21420857736715!3d-12.062377630661842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1718474174944!5m2!1ses-419!2spe"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  Dirección
                </h2>
                <p class="mt-1">
                  La Academia Zarate brinda su atención en la Calle Real 392, El Tambo, Huancayo, Junín.
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  Teléfono de Contacto
                </h2>
                <p class="leading-relaxed">955-403-296</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contáctanos
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Rellana el formulario para ponerte en contacto con nosotros.
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Teléfono
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Programa
              </label>
              <select name="" id="" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option value="">Zaratito</option>
                <option value="">Ciclado</option>
                <option value="">Primera Selección</option>
                <option value="">Intensivo</option>
                <option value="">Niveles</option>
              </select>
              
            </div>
            <button class="text-white bg-cyan-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Registrar Información
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Nos pondremos en contacto contigo en breve.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contacto;
