import { Metadata } from "next";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrydaVagas",
  description:
    "O PrydaVagas conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
