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
    Currently exploring learning-based 3D vision, generative models for 3D, and corner camera computer vision topics with 
    Dr. Jia-Bin Huang in the UMD Vision and Learning Lab.
    `,
    experienceImage: "easy_smap.svg",
    experienceImage2: "accuracy.svg",
  },
  {
    // Teaching Assistant
    experienceHeader: "Course Instructor and Teaching Assistant",
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
      Instructor and facilitator for CMSC389E: Digital Logic Design Through Minecraft.
      Teaching Assistant for the 
      CMSC132: Object-Oriented Programming, 
      CMSC216: Introduction to Computer Systems, 
      CMSC330: Organization of Programming Languages, and 
      STAT410: Introduction to Probability Theory courses.
      Taught discussion sections, held office hours, and designed coursework for over 3000 students.
    `,
    experienceImage: "department_of_cs_logo.png",
    experienceImage2: "university-of-maryland-logo.png",
  },
  {
    // Gamer Symphony Orchestra
    experienceHeader: "Webmaster and Violinist",
    experienceSubHeader: `
      <a
        href="https://umd.gamersymphony.org/"
        target="_blank"
        className="text-primary-700 underline"
      >
      The Gamer Symphony Orchestra at UMD
      </a>
    `,
    experienceDescription: `
      Webmaster and violin performer for the Gamer Symphony Orchestra at UMD 
      (GSO), a student-run ensemble performing orchestral arrangements of 
      video game music. As Webmaster, I update the GSO 
      <a
      href="https://umd.gamersymphony.org/"
      target="_blank"
      className="text-primary-700 underline"
      >
      webpage</a> regularly, facilitate access to sheet music for members, and 
      maintain our music library for future reference. As a violinist, I LOVE 
      performing for the GSO and can say it's an absolute blast. Photo credits to
      <a
      href="https://galleries.kenrubinphotography.com/gamersymphonyorchestra/"
      target="_blank"
      className="text-primary-700 underline"
      >
      @Ken Rubin Photography</a>.
    `,
    experienceImage: "gamer-symphony-orchestra-cover.jpg",
    experienceImage2: "",
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
              A couple of my personal and professional experiences.
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
