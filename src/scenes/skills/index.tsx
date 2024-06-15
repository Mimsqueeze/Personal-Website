import HText from "@/shared/HText";
import { SelectedPage, SkillType } from "@/shared/types";
import {
  SiLinux,
  SiReact,
  SiTypescript,
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
  SiTensorflow,
  SiR,
  SiPandas,
  SiOpencv,
  SiNvidia,
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
    "Proficient at developing practical applications including graphics, UIs, and chatbots with Java.",
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
    "Proficient in utilizing C++ for competitive programming and developing efficient applications from scratch.",
  },
  {
    icon: <SiPython className={iconStyle} />,
    title: "Python",
    description:
    "Skilled in levereging Python for data science, machine learning, web scraping, and image recognition tasks.",
  },
  {
    icon: <SiOcaml className={iconStyle} />,
    title: "OCaml",
    description:
    "Proficient in OCaml functional programming to craft intuitive and elegant applications.",
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
    "Skilled in effectively using Javascript for front-end and back-end web development.",
  },
  {
    icon: <SiTypescript className={iconStyle} />,
    title: "Typescript",
    description:
    "Experienced in utilizing Typescript to craft cleaner and safer code for web development.",
  },
  {
    icon: <SiHtml5 className={iconStyle} />,
    title: "HTML",
    description:
    "Proficient in writing HTML for clean web pages and UIs.",
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
    description: "Experienced in using C# to develop game scripts in the Unity environment.",
  },
  {
    icon: <SiR className={iconStyle} />,
    title: "R",
    description:
    "Experienced in using R for statistical computing and modeling.",
  },
  {
    icon: <SiNvidia className={iconStyle} />,
    title: "CUDA",
    description:
    "Exceptional in CUDA programming to create GPU-accelerated applications.",
  },
  {
    icon: <SiTensorflow className={iconStyle} />,
    title: "TensorFlow",
    description:
    "Versed in using Tensorflow to craft deep neural networks for machine learning applications.",
  },
  {
    icon: <SiPandas className={iconStyle} />,
    title: "Pandas",
    description:
    "Experienced in using Pandas for data processing and manipulation for machine learnig applications.",
  },
  {
    icon: <SiOpencv className={iconStyle} />,
    title: "OpenCV",
    description:
    "Well-versed in utilizing OpenCV's image processing and recognition capabilities for machine learning applications.",
  },
  {
    icon: <SiReact className={iconStyle} />,
    title: "React",
    description:
    "Practiced in crafting elegant, modular web applications with React.",
  },
  {
    icon: <SiTailwindcss className={iconStyle} />,
    title: "Tailwind CSS",
    description:
    "Proficient in using Tailwind CSS to craft simple yet elegant web applications.",
  },
  {
    icon: <SiLinux className={iconStyle} />,
    title: "Linux OS",
    description:
    "Proficient in utilizing the Linux OS for developing applications.",
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
              Some technologies I'm familiar with.
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
