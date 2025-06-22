import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between py-6">
      <Logo />

      <ul className="flex items-center gap-6">
        <a className={cn(buttonVariants({ variant: "link" }))} href="/">
          Home
        </a>
        <a className={cn(buttonVariants({ variant: "link" }))} href="/sobre">
          Sobre
        </a>
        <a className={cn(buttonVariants({ variant: "link" }))} href="/vagas">
          Vagas
        </a>
        <a
          className={cn(buttonVariants({ variant: "link" }))}
          href="/vagas/cadastro"
        >
          Cadastrar Vagas
        </a>
      </ul>
    </nav>
  );
}
