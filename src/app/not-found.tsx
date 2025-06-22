import { cn } from "@/lib/utils";
import { buttonVariants } from "../components/ui/button";

export default function NotFound() {
  return (
    <main className="py-10 text-center">
      <h1 className="font-display text-5xl font-bold text-gray-700">
        Nada encontrado aqui...
      </h1>
      <img
        className="mx-auto mt-10 w-lg"
        src="astronaut.png"
        alt="Imagem de um astronauta perdido no espaço."
      />
      <p className="text-3xl font-light text-gray-500">
        Não foi possível encontrar a página solicitada.
      </p>
      <a
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-12 px-6 py-6 text-lg",
        )}
        href="/"
      >
        Voltar à Home
      </a>
    </main>
  );
}
