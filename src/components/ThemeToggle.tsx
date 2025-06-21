import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return "☀️";
      case "dark":
        return "🌙";
      case "system":
        return "💻";
      default:
        return "☀️";
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Claro";
      case "dark":
        return "Escuro";
      case "system":
        return "Sistema";
      default:
        return "Claro";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      title={`Tema atual: ${getLabel()}. Clique para alternar.`}
    >
      <span className="text-lg">{getIcon()}</span>
      <span className="hidden sm:inline">{getLabel()}</span>
    </button>
  );
}
