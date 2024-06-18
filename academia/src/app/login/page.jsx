import Image from "next/image";
import React from "react";
import logo from "../../../public/logo-p.jpeg";

function Login() {
  return (
    <section>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div class="w-full px-6 py-3">
              <div>
                <div class="mt-3 text-left sm:mt-5">
                  <div class="inline-flex items-center w-full">
                    <h3 class="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                      Iniciar Sesión
                    </h3>
                  </div>
                </div>
              </div>

              <div class="mt-6 space-y-2">
                <div>
                  <label for="email" class="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Ingresar usuario"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Ingresar contraseña"
                  />
                </div>
                <div class="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="button"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-cyan-400 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Inicio
                  </button>
                </div>
              </div>
            </div>
            <div class="order-first hidden w-full lg:block">
              <Image src={logo} class="object-cover h-full bg-cover rounded-l-lg"/>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
