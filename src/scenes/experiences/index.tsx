import HText from "@/shared/HText";
import { ExperienceType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Experience from "./Experience";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const experiences: Array<ExperienceType> = [
  {
    // Research Assistant
    experienceHeader: "Undergraduate Research Assistant",
    experienceSubHeader: `University of Maryland, 
      <a
        href="https://sph.umd.edu/research-impact/laboratories-projects-and-programs/neuromotor-control-and-learning-laboratory"
        target="_blank"
        className="text-primary-700 underline"
      >
        Neuromotor Control and Learning Laboratory (NMCL)
      </a>
    `,
    experienceDescription: `
    Developed software to assess the efficacy of various feature extraction 
    methods (functional connectivity, graph centralities) and machine 
    learning models (SVMs, MLPs, CNNs) for classifying 
    electroencephalography (EEG) data. 
    Currently investigating the viability of deep neural networks as 
    classification algorithms for EEG and utilizing saliency methods 
    (heat maps) as a post-hoc analysis to reveal insights into important 
    connections between different brain regions.
    `,
    experienceImage: "easy_smap.svg",
    experienceImage2: "accuracy.svg",
  },
  {
    // Teaching Assistant
    experienceHeader: "Teaching Assistant",
    experienceSubHeader: `University of Maryland, 
      <a
        href="https://www.cs.umd.edu/"
        target="_blank"
        className="text-primary-700 underline"
      >
      Department of Computer Science
      </a>
    `,
    experienceDescription: `
      Teaching Assistant for the 
      CMSC132: Object-Oriented Programming II, 
      CMSC216: Introduction to Computer Systems, and 
      STAT410: Introduction to Probability Theory courses. 
      Dedicated to promoting the success of undergraduate students 
      by teaching discussion sections, assisting students in office hours, 
      and providing vital feedback on projects and exams.
    `,
    experienceImage: "department_of_cs_logo.png",
    experienceImage2: "university-of-maryland-logo.png",
  },
];

const Experiences = ({ setSelectedPage }: Props) => {
  const headerSize = "text-4xl md:text-5xl";
  const headerDescriptionSize = "text-base md:text-lg";

  return (
    <section id="experiences" className="overflow-hidden bg-primary-100">
      <div className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}
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
            <HText size={headerSize}>EXPERIENCES</HText>
            <p className={`my-5 ${headerDescriptionSize}`}>
              A list of personal and professional experiences I've had!
            </p>
          </motion.div>
          {/* EXPERIENCES */}
          <div className="md:mx-auto md:grid md:gap-8 lg:grid-cols-2">
            {experiences.map((experience: ExperienceType) => (
              <Experience
                key={experience.experienceHeader}
                experienceHeader={experience.experienceHeader}
                experienceSubHeader={experience.experienceSubHeader}
                experienceDescription={experience.experienceDescription}
                experienceImage={experience.experienceImage}
                experienceImage2={experience.experienceImage2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;