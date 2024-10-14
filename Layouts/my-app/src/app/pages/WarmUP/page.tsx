'use client'
import Link from "next/link";
import "./WarmUP.css"
import Image from "next/image";

export default function WarmUP() {
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-28">
        <section className="flex flex-col justify-center items-center m-28 ">
          <h1 className="text-8xl font-bold text-center italic">WarmUP</h1>
          <h1 className="text-6xl font-bold text-center mt-5">Qualidade em Software</h1>
        </section>
        <div className="diagonal-line"></div>
        <Image className="flex flex-col justify-center items-center m-28 " src={"/assets/BugKillers1.png"} alt="" width={375} height={375} />
      </div>

      <div className="servico">
        <section className="flex flex-col ml-10 mr-5">
        <h2 className="text-5xl font-bold italic">WarmUP</h2>
        <h2 className="text-4xl font-bold mb-10">Qualidade em Software</h2>
          <h1>Nosso Serviço</h1>
          <p>Oferecemos uma ampla gama de serviços em testes de software, incluindo testes manuais, automação de testes e consultoria em qualidade. Nossa equipe experiente garante a excelência e a confiabilidade do seu software em todas as etapas do desenvolvimento.</p>
        </section>
        <Image className="servico-img" src={"/assets/person-using-laptop.jpg"} alt="" width={500} height={500}/>
      </div>

      <div className=" flex flex-col justify-center items-center m-60">
        <h1 className="text-6xl font-bold text-center mb-6">Pilar de Operação</h1>
        <div className="line"></div>
        <section className="icons-grid">
          <h1><Image className="" src={"/assets/ads_click.svg"} alt="" width={75} height={75}/>Objetivos</h1>
          <h1><Image className="" src={"/assets/troubleshoot.svg"} alt="" width={75} height={75}/>Análise</h1>
          <h1><Image className="" src={"/assets/task_alt.svg"} alt="" width={75} height={75}/>Validação</h1>
          <h1><Image className="" src={"/assets/manufacturing.svg"} alt="" width={75} height={75}/>Execução</h1>
          <h1><Image className="" src={"/assets/browse_activity.svg"} alt="" width={75} height={75}/>Conclusão</h1>
        </section>
      </div>
      
      <div className="sobre">
        <Image className="sobre-img" src={"/assets/pc.svg"} alt="" width={500} height={500}/>
        <section>
          <Image className="" src={"/assets/BugKillers1.png"} alt="" width={200} height={200}/>
          <h1>Sobre nós</h1>
          <p>Nós somos uma empresa dedicada ao aprimoramento contínuo de profissionais de tecnologia, oferecendo não apenas treinamentos especializados, mas também vídeos que abordam temas essenciais para a qualidade de software. O nosso compromisso é proporcionar um aprendizado contínuo e profundo, capacitando você a alcançar novos patamares na sua carreira.</p>
        </section>
      </div>

      <div className="servico">
        <section className="flex flex-col ml-10 mr-5">
          <h2 className="text-5xl font-bold italic">WarmUP</h2>
          <h2 className="text-4xl font-bold mb-10">Qualidade em Software</h2>
          <h1>Nosso Propósito</h1>
          <p>Orientar nossos stakeholders para a aplicação prática do conceito de qualidade, demonstrando seu valor no desenvolvimento de software e sendo essencial na tomada de decisões dos clientes. Além disso, incentivar o aumento do conhecimento prático, criando soluções que aumentem a visibilidade e o reconhecimento das pessoas.</p>
        </section>
        <Image className="servico-img" src={"/assets/software.png"} alt="" width={500} height={500}/>
      </div>

      <div className=" flex flex-col justify-center items-center m-60">
        <h1 className="text-6xl font-bold text-center mb-6">Interessou-se por algum Produto?</h1>
        <div className="line"></div>
        <Link className="btn" href={""}>Entre em contato</Link>
      </div>

    </>
  );
}