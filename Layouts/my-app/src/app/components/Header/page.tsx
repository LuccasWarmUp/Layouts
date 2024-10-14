'use client'
import Link from "next/link";
import "./Header.css"

export default function Header() {
  function reload(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
        <header>
            <h1 className="text-4xl italic">WarmUP</h1>
            <div>
                <Link className="link" onClick={() => reload()} href={"/"}>Home</Link>
                <Link className="link" onClick={() => reload()} href={"/pages/WarmUP"}>WarmUP</Link>
                <Link className="link" onClick={() => reload()} href={"/pages/BugKillers"}>BugKillers</Link>
                <Link className="link" onClick={() => reload()} href={"/pages/Lecom"}>Lecom</Link>
            </div>
        </header> 
    </>
  );
}