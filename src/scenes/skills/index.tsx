import HText from "@/shared/HText";
import { SelectedPage, SkillType } from "@/shared/types";
import {
  SiExpress,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiVite,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiCsharp,
  SiOcaml,
  SiRust,
} from "react-icons/si";

import { BiLogoJava } from "react-icons/bi";

import { motion } from "framer-motion";
import Skill from "./Skill";

const iconStyle = "h-6 w-6 text-primary-500";
const skills: Array<SkillType> = [
  {
    icon: <BiLogoJava className={iconStyle} />,
    title: "Java",
    description:
    "Proficient at using Java to develop a variety of practical applications including UIs, chatbots, and more.",
  },
  {
    icon: <SiC className={iconStyle} />,
    title: "C",
    description:
    "Skilled at using C to develop efficient low-level softwares including command-line utilities and more.",
  },
  {
    icon: <SiCplusplus className={iconStyle} />,
    title: "C++",
    description:
    "Proficient in utilizing C++ for competitive programming and developing applications.",
  },
  {
    icon: <SiPython className={iconStyle} />,
    title: "Python",
    description:
    "Skilled in crafting Python scripts for a diverse applications, including data science, machine learning, web scraping, and image recognition tasks.",
  },
  {
    icon: <SiOcaml className={iconStyle} />,
    title: "OCaml",
    description:
    "Proficient in OCaml functional programming to create elegant applications.",
  },
  {
    icon: <SiRust className={iconStyle} />,
    title: "Rust",
    description:
    "Proficient in Rust programming to craft safe, clean, and efficient applications.",
  },
  {
    icon: <SiJavascript className={iconStyle} />,
    title: "Javascript",
    description:
    "Capable of using Javascript for front-end and back-end web development.",
  },
  {
    icon: <SiTypescript className={iconStyle} />,
    title: "Typescript",
    description:
    "Competent in utilizing Typescript to craft cleaner, safer, and more scalable code for web development.",
  },
  {
    icon: <SiHtml5 className={iconStyle} />,
    title: "HTML",
    description:
    "Proficient in HTML for clean web page and UI development.",
  },
  {
    icon: <SiCss3 className={iconStyle} />,
    title: "CSS",
    description:
    "Able in CSS styling to craft visually appealing and responsive UIs",
  },
  {
    icon: <SiCsharp className={iconStyle} />,
    title: "C#",
    description: "Experience in using C# to develop game scripts in the Unity environment.",
  },
  {
    icon: <SiNodedotjs className={iconStyle} />,
    title: "Node",
    description: "Able to build backend services such as REST APIs using Node.",
  },
  {
    icon: <SiReact className={iconStyle} />,
    title: "React",
    description:
    "Practiced in developing web applications using React.",
  },
  {
    icon: <SiExpress className={iconStyle} />,
    title: "Express",
    description:
    "Proficient in using Express to develop web applications, REST APIs, and manage routing.",
  },
  {
    icon: <SiMongodb className={iconStyle} />,
    title: "MongoDB",
    description:
    "Experience in development and administration of MongoDB NoSQL databases.",
  },
  {
    icon: <SiVite className={iconStyle} />,
    title: "Vite",
    description:
    "Able in using the Vite build tool to develop web applications.",
  },
  {
    icon: <SiTailwindcss className={iconStyle} />,
    title: "Tailwind CSS",
    description:
    "Proficient in using Tailwind CSS framework to streamline and accelerate the web application development process.",
  },
  {
    icon: <SiLinux className={iconStyle} />,
    title: "Linux OS",
    description:
    "Proficient in utilizing Linux OS for developing applications.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Skills = ({ setSelectedPage }: Props) => {
  const headerSize = "text-4xl md:text-5xl";
  const headerDescriptionSize = "text-base md:text-lg";

  return (
    <section id="skills" className="bg-primary-100 overflow-hidden">
      <div className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText size={headerSize}>SKILLS</HText>
            <p className={`my-5 ${headerDescriptionSize}`}>
              A list of technologies I'm familiar with.
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            className="mt-5 items-center justify-between gap-8 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill: SkillType) => (
              <Skill
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
