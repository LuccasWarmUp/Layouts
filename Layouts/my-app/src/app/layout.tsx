import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer/page";
import Header from "./components/Header/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
