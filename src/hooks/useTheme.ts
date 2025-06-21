import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verifica se há preferência salva no localStorage
    const saved = localStorage.getItem("theme") as Theme;
    return saved || "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    // Remove classes anteriores
    root.classList.remove("light", "dark");

    if (theme === "system") {
      // Usa a preferência do sistema
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.add(systemPrefersDark ? "dark" : "light");
    } else {
      // Usa a preferência manual
      root.classList.add(theme);
    }

    // Salva no localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listener para mudanças na preferência do sistema
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(mediaQuery.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return { theme, setTheme };
}
