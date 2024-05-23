export enum SelectedPage {
  Home = "home",
  Skills = "skills",
  Projects = "projects",
  Experiences = "experiences",
  Contact = "contact",
}

export interface SkillType {
  icon: JSX.Element;
  title: string;
  description?: string;
}

export interface ExperienceType {
  experienceHeader: string;
  experienceSubHeader: string;
  experienceDescription: string;
  experienceImage: string;
  experienceImage2: string;
}

export interface ProjectType {
  projectHeader: string;
  projectSubHeader: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
}