export enum SelectedPage {
  Home = "home",
  Skills = "skills",
  Projects = "projects",
  Contact = "contact",
  Activities = "activities"
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
  projectLink: string;
}

export interface ActivityType {
  activityHeader: string;
  activitySubHeader: string;
  activityDescription: string;
  activityImage: string;
  activityLink: string;
}