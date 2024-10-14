'use client'

import "./Footer.css"
import Link from "next/link";

export default function Footer() {
  return (
    <>
        <footer>
            <section className="w-full flex flex-row justify-between items-center font-bold">
                <h1 className="text-4xl italic">WarmUP</h1>
                <div>
                    <Link className="link" href={""}>Link</Link>
                    <Link className="link" href={""}>Link</Link>
                    <Link className="link" href={""}>Link</Link>
                </div>
            </section>
            <div className="footer_copyright"> &#169; 2024 all rights reserved.</div>
        </footer>
    </>
  );
}