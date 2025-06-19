import { sections } from "./sections";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  activeSection,
  scrollToSection,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold text-cyan-500">DS</div>
          <div className="hidden items-center space-x-4 md:flex">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`rounded-sm p-2 text-sm font-medium hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                  activeSection === id
                    ? "text-cyan-500"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
