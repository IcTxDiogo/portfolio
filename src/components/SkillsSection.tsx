export default function SkillsSection() {
  const workAreas = [
    {
      title: "Backend Development",
      description: "Sistemas robustos e escaláveis",
      skills: [
        "PHP & Laravel 12",
        "PostgreSQL, Supabase",
        "Redis (Cache & Filas)",
        "Laravel Reverb",
        "Pest Testing",
      ],
      projects:
        "Aplicações monolíticas com arquitetura moderna, APIs RESTful e sistemas de cache distribuído.",
    },
    {
      title: "Frontend Development",
      description: "Interfaces modernas e responsivas",
      skills: [
        "JavaScript & TypeScript",
        "React & Vue.js",
        "Inertia.js",
        "Tailwind CSS",
        "Vite",
      ],
      projects:
        "SPAs componentizadas, sistemas de design reutilizáveis e experiências de usuário intuitivas.",
    },
    {
      title: "DevOps & Infrastructure",
      description: "Deploy e automação",
      skills: ["Docker & Compose", "Nginx", "Git & GitHub Actions", "Heroku"],
      projects:
        "Pipelines CI/CD automatizados, containerização e deploy contínuo em produção.",
    },
  ];

  const featuredProjects = [
    {
      name: "BulletFlow",
      description:
        "Sistema completo de organização pessoal digital com funcionalidades de planejamento, acompanhamento de hábitos e produtividade.",
      technologies: [
        "Laravel 12",
        "Inertia.js",
        "Vue.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      status: "Em desenvolvimento",
      link: "https://bulletflow.diogo-santos.tech",
    },
  ];

  return (
    <section id="work" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            💼 Trabalho & Projetos
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Tecnologias que domino e como as aplico em projetos reais
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid gap-8 mb-16 lg:grid-cols-3">
          {workAreas.map((area, index) => (
            <div
              key={area.title}
              className="animate-fade-in-up rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="mb-2 text-xl font-bold text-cyan-500">
                {area.title}
              </h3>
              <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                {area.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-400 uppercase dark:text-gray-500">
                  Tecnologias
                </h4>
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="animate-slide-in-left flex items-center gap-2"
                      style={{
                        animationDelay: `${index * 200 + skillIndex * 100}ms`,
                      }}
                    >
                      <span className="text-xs text-cyan-500">●</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-400 uppercase dark:text-gray-500">
                  Aplicações
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {area.projects}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold lg:text-3xl">
            Projetos em Destaque
          </h3>
          <div className="grid gap-8 lg:grid-cols-1">
            {featuredProjects.map((project, index) => (
              <div
                key={project.name}
                className="animate-fade-in-up rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-6 lg:mb-0 lg:flex-1">
                    <h4 className="mb-2 text-xl font-bold text-cyan-500">
                      {project.name}
                    </h4>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="mb-2 text-sm font-medium text-orange-500">
                      {project.status}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg border border-cyan-500 px-6 py-2 text-sm font-medium text-cyan-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                    >
                      Ver Detalhes
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center">
          <div
            className="animate-fade-in-up mx-auto max-w-md rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50"
            style={{ animationDelay: "800ms" }}
          >
            <div className="animate-bounce-slow mb-3 text-3xl">🚀</div>
            <h3 className="mb-2 text-lg font-bold">Mais Projetos em Breve</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Estou trabalhando em novos projetos que serão adicionados ao
              portfólio em breve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
