type PathForSections<T> = T extends `${infer S}` ? `#${Lowercase<S>}` : never;

export type SectionsName =
  | "Home"
  | "About"
  | "Faq"
  | "Roadmap"
  | "Whitepaper"
  | "Team";

export type SectionsList<T extends SectionsName = SectionsName> = {
  section: T;
  path: PathForSections<T>;
}[];

export const sectionsList: SectionsList = [
  {
    section: "Home",
    path: "#home",
  },
  {
    section: "About",
    path: "#about",
  },
  {
    section: "Roadmap",
    path: "#roadmap",
  },
  {
    section: "Whitepaper",
    path: "#whitepaper",
  },
  {
    section: "Faq",
    path: "#faq",
  },
  {
    section: "Team",
    path: "#team",
  },
];
