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

export interface ProjectType {
  projectHeader: string;
  projectSubHeader: string;
  projectDescription: string;
  projectImage: string;
}