interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-20 pb-20 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-left order-2 lg:order-1">
            <h1 className="mb-4 text-4xl font-bold lg:text-6xl">
              Olá, sou o <span className="text-cyan-500">Diogo Santos.</span>
            </h1>
            <h2 className="mb-6 text-xl text-gray-700 lg:text-2xl dark:text-gray-300">
              Desenvolvedor Full-Stack apaixonado por transformar ideias em
              realidade digital.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Este é o espaço onde a sua visão encontra a minha expertise para
              criar soluções web modernas, eficientes e impactantes.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-lg bg-cyan-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600 hover:shadow-lg"
              >
                Vamos construir algo juntos
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="rounded-lg border border-gray-300 px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
              >
                Meu Trabalho
              </button>
            </div>
          </div>
          <div className="animate-fade-in-right order-1 flex justify-center lg:order-2">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-6xl font-bold text-white transition-transform duration-300 hover:scale-105 lg:h-80 lg:w-80 lg:text-8xl">
              <img
                src="https://i.imgur.com/iF3vs2l.jpg"
                alt="Portrait of Diogo Santos"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
