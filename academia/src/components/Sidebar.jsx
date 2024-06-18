"use client";

import { useState } from "react";
import imagen from "../../public/logotipo.png";
// import documento from "@/public/documento.svg";
// import solicitud from "@/public/solicitud.svg";
// import user from "@/public/user.svg";
import Link from "next/link";
import Image from "next/image";

function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div class="flex overflow-hidden bg-white rounded-lg h-screen">
        <div class="hidden md:flex md:flex-shrink-0">
          <div class="flex flex-col w-64">
            <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-50">
              <div class="flex flex-col items-center flex-shrink-0 px-4">
                <a
                  class="px-8 text-left focus:outline-none"
                  href="/groups/sidebar/"
                >
                  <Image src={imagen  } alt="Academia Zarate" />
                 
                </a>
                <button class="hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-col flex-grow px-4 mt-5">
                <nav class="flex-1 space-y-1 bg-white">
                  <ul>
                    <li>
                      <a
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg bg-gray-50 focus:shadow-outline"
                        white=""
                        href="#"
                      >
                        <span class="ml-4"> Página de Inicio</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                        href="#"
                      >
                        <span class="ml-4">Página Contacto</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                        href="#"
                      >
                        <span class="ml-4"></span>
                      </a>
                    </li>
                  </ul>
                  <p class="px-4 pt-4 font-medium text-gray-900 uppercase">
                    Programas
                  </p>
                  <ul>
                    <li>
                      <a
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                        white=""
                        href="#"
                      >
                        <span class="ml-4"> Zaratito</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                        white=""
                        href="#"
                      >
                        <span class="ml-4"> Ciclado</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                        white=""
                        href="#"
                      >
                        <span class="ml-4"> Primera Selección</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                        white=""
                        href="#"
                      >
                        <span class="ml-4"> Niveles</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50"
                        white=""
                        href="#"
                      >
                        <span class="ml-4"> Intensivo</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
