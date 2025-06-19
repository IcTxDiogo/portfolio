export interface Section {
  id: string;
  label: string;
}

export const sections: Section[] = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "work", label: "Trabalho" },
  { id: "contact", label: "Contato" },
];

export const sectionIds = sections.map((s) => s.id);
