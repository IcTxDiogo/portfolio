export default function ContactSection() {
  const contactOptions = [
    { icon: "📧", label: "Email", href: "mailto:ictxdiogo@gmail.com" },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/diogofrancasantos/",
    },
    { icon: "💻", label: "GitHub", href: "https://github.com/ictxdiogo" },
  ];

  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
            Estou sempre aberto a novas oportunidades e colaborações.
          </p>
        </div>

        <div className="flex justify-center gap-8">
          {contactOptions.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in-up flex flex-col items-center gap-3 rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:scale-110 hover:bg-gray-100 hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl hover:animate-pulse">{contact.icon}</div>
              <div className="font-medium">{contact.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
