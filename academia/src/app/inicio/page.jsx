import NavBar from "@/components/NavBar";
import React from "react";
import Portada from "./components/Portada";
import Logos from "@/components/Logos";
import ListaProgramas from "@/components/ListaProgramas";
import Footer from "@/components/Footer";

function Inicio() {
  return (
    <div>
      <NavBar />
      <Portada />
      <ListaProgramas />
      <Logos />
      <Footer />
    </div>
  );
}

export default Inicio;
