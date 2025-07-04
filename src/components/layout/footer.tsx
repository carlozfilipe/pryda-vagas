import { Github, Instagram, Mail } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-5xl justify-between">
        <div className="max-w-sm">
          <Logo bg="dark" />
          <p className="mt-2 text-sm font-extralight">
            O PrydaVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </p>
        </div>

        <div className="flex gap-3">
          <Instagram className="cursor-pointer transition-colors hover:text-blue-400" />
          <Github className="cursor-pointer transition-colors hover:text-blue-400" />
          <Mail className="cursor-pointer transition-colors hover:text-blue-400" />
        </div>
      </div>
    </footer>
  );
}
