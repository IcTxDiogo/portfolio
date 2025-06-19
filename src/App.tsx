import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import SkillsSection from "./components/SkillsSection";
import { sectionIds } from "./components/sections";
import "./animations.css";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      let maxRatio = 0;
      let mostVisibleSection = sectionIds[0];

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const totalHeight = rect.height;
          if (totalHeight === 0) continue;
          const visibleHeight = Math.max(
            0,
            Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top)
          );
          const ratio = visibleHeight / totalHeight;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = section;
          }
        }
      }
      setActiveSection(mostVisibleSection);
    };

    const throttledScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // altura aproximada da navegação
      const offsetTop = element.offsetTop - navHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
