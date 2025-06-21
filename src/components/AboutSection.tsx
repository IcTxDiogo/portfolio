export default function AboutSection() {
  const journeyItems = [
    {
      period: "Julho 2023 - Atualmente",
      title: "Desenvolvedor Full-Stack",
      description:
        "Desenvolvimento e manutenção de sistemas de grande escala com Laravel e Vue.js, focando em modernização de código legado e implementação de soluções inovadoras.",
    },
    {
      period: "Agosto 2022 - Julho 2023",
      title: "Desenvolvedor Freelancer",
      description:
        "Projetos com React e Node.js, aprimorando habilidades em arquitetura de software e experiência do usuário.",
    },
    {
      period: "Junho 2016 - Agosto 2022",
      title: "Formação Acadêmica",
      description:
        "Base sólida em múltiplas áreas, desenvolvendo raciocínio lógico e paixão pela tecnologia.",
    },
  ];

  return (
    <section id="about" className="bg-gray-100 py-20 dark:bg-gray-850">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* About Introduction */}
        <div className="animate-fade-in-up mb-20 text-center">
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Sobre Mim</h2>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Desenvolvedor Full-Stack especializado em aplicações Laravel,
              apaixonado por transformar ideias em realidade digital. Com
              experiência tanto em sistemas legados quanto em arquiteturas
              modernas, utilizo desenvolvimento baseado em componentes com React
              e Vue.js para criar interfaces intuitivas e eficientes.
            </p>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <h3 className="mb-12 text-center text-2xl font-bold lg:text-3xl">
            Minha Trajetória
          </h3>
          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="animate-grow-height absolute top-0 bottom-0 left-8 w-0.5 bg-cyan-500"></div>

            <div className="space-y-12">
              {journeyItems.map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in-right relative flex gap-8"
                  style={{ animationDelay: `${index * 200 + 400}ms` }}
                >
                  <div
                    className="animate-pulse-once relative z-10 h-4 w-4 rounded-full bg-cyan-500"
                    style={{ animationDelay: `${index * 200 + 600}ms` }}
                  ></div>
                  <div className="flex-1 pb-8">
                    <div className="mb-2 text-sm font-medium text-cyan-500">
                      {item.period}
                    </div>
                    <h4 className="mb-3 text-lg font-bold">{item.title}</h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
