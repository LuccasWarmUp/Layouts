import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center m-28">
        <h1 className="text-9xl font-bold text-center italic">Layouts</h1>
      </section>

      <section className="flex flex-row justify-between items-center"> 
        <Link className="btn-link" href={"/pages/WarmUP"}>WarmUP</Link>
        <Link className="btn-link" href={"/pages/BugKillers"}>BugKillers</Link>
        <Link className="btn-link" href={"/pages/Lecom"}>Lecom</Link>
      </section>
    </div>
  );
}
