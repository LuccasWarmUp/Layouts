import Image from "next/image";
import Link from "next/link";
import "./Lecom.css";
import Manipula_Planilha from "@/app/components/Manipula_Planilha/page";

export default function Lecom() {
  return (
    <>
      <section className="flex flex-col justify-center items-center m-28">
        <h1 className="text-9xl font-bold text-center italic">Lecom</h1>
        <h2 className="text-6xl font-bold text-center mt-10">planilhas base para automação</h2>
      </section>

      <section className="icons-grid">
          <Link className="icon-link" href={"/pages/Planilha"}>
            <Image className="" src={"/assets/manufacturing.svg"} alt="" width={75} height={75}/>
            Configuração
          </Link>
          <Link className="icon-link" href={"/pages/Planilha"}>
            <Image className="" src={"/assets/manufacturing.svg"} alt="" width={75} height={75}/>
            Interfaces
          </Link>
          <Link className="icon-link" href={"/pages/Planilha"}>
            <Image className="" src={"/assets/manufacturing.svg"} alt="" width={75} height={75}/>
            Suítes
          </Link>
          <Link className="icon-link" href={"/pages/Planilha"}>
            <Image className="" src={"/assets/manufacturing.svg"} alt="" width={75} height={75}/>
            Cenários <br/> (CN)
          </Link>
          <Link className="icon-link" href={"/pages/Planilha"}>
            <Image className="" src={"/assets/manufacturing.svg"} alt="" width={75} height={75}/>
            Casos de Testes (CT)
          </Link>
          <Link className="icon-link" href={"/pages/Planilha"}>
            <Image className="" src={"/assets/manufacturing.svg"} alt="" width={75} height={75}/>
            Scripts (ST)
          </Link>
          <Link className="icon-link" href={"/pages/Planilha"}>
            <Image className="" src={"/assets/manufacturing.svg"} alt="" width={75} height={75}/>
            Elementos (GUI)
          </Link>
        </section>

    </>
  );
}
