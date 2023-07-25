export enum SelectedPage {
  Home = "home",
  Skills = "skills",
  Projects = "projects",
  Contact = "contact",
}

export interface SkillType {
  icon: JSX.Element;
  title: string;
  description?: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}