'use client'

import Manipula_Planilha from "@/app/components/Manipula_Planilha/page";
import "./Planilha.css"

export default function Planilha() {
  return (
    <>
      <section className="flex flex-col justify-center items-center m-28">
        <h1 className="text-9xl font-bold text-center italic">Lecom</h1>
        <h2 className="text-6xl font-bold text-center mt-10">planilhas base para automação</h2>
      </section>

        <Manipula_Planilha/>
    </>
  );
}