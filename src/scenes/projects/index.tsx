import HText from "@/shared/HText";
import { ProjectType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const projects: Array<ProjectType> = [
  {
    // Digit Recognizer
    projectHeader: "Digit Recognizer",
    projectSubHeader: "An application that recognizes handwritten digits.",
    projectDescription: `
      Developed a C++ implementation of a multi-layer convolutional neural
      network from scratch using Eigen3, a powerful linear algebra
      library. It utilizes deep learning techniques to recognize
      handwritten digits given from the
      <a
        href="http://yann.lecun.com/exdb/mnist/index.html"
        target="_blank"
        className="text-primary-700"
      >
        MNIST
      </a>
      database. The program takes inputs 28x28 pixel images of a
      handwritten digit and predicts the corresponding numerical value.
    `,
    projectImage: "digit_recognizer.png",
    projectLink: "https://github.com/Mimsqueeze/Digit-Recognition",
  },
  {
    // SORTING SIMULATOR
    projectHeader: "Sorting Simulator",
    projectSubHeader: "A visualizer for different sorting algorithms.",
    projectDescription: `
    Developed a sorting algorithm visualizer using Java Swing to
    showcase real-time updates to arrays as various sorting algorithms
    like bubble sort, insertion sort, merge sort, and quick sort are
    applied. Sorting Simulator also allows sorting algorithms
    comparisons by providing relevant statistics including sorting time,
    number of comparisons, number of insertions, etc.
    `,
    projectImage: "sorting_simulator.png",
    projectLink: "https://github.com/Mimsqueeze/Sorting-Simulator",
  },
  {
    // Mims' Rucoy Calculator
    projectHeader: "Mims' Rucoy Calculator",
    projectSubHeader:
      "A utility discord chatbot for an online gaming community.",
    projectDescription: `
    Led a team that develops and hosts an intelligent utility Discord
    bot using Java Discord API, deployed in over 4600 servers, assisting
    thousands of users daily in optimizing their gameplay. Features
    intuitive commands, intelligent functionality, and a clean yet
    informative UI.
    `,
    projectImage: "mims_rucoy_calculator.png",
    projectLink: "https://github.com/Mimsqueeze/Mims-Rucoy-Calculator",
  },
  {
    // Rucoy Vision Bot
    projectHeader: "Rucoy Vision Bot",
    projectSubHeader: "An automated game bot utilizing image recognition.",
    projectDescription: `
    Developed an image processing and recognition application using
    OpenCV and PyAutoGUI, which captures screen images, identifies
    targets, and automates actions to improve a user's experience in a
    multiplayer game.
    `,
    projectImage: "rucoy_vision_bot.png",
    projectLink: "https://github.com/Mimsqueeze/Rucoy-Vision-Bot",
  },
];

const Projects = ({ setSelectedPage }: Props) => {
  const headerSize = "text-4xl md:text-5xl";
  const headerDescriptionSize = "text-base md:text-lg";

  return (
    <section id="projects" className="overflow-hidden bg-gray-20">
      <div className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText size={headerSize}>PROJECTS</HText>
            <p className={`my-5 ${headerDescriptionSize}`}>
              A list of projects I've done.
            </p>
          </motion.div>
          {/* PROJECTS */}
          <div className="md:mx-auto md:grid md:grid-cols-2 md:gap-8">
            {projects.map((project: ProjectType) => (
              <Project
                key={project.projectHeader}
                projectHeader={project.projectHeader}
                projectSubHeader={project.projectSubHeader}
                projectDescription={project.projectDescription}
                projectImage={project.projectImage}
                projectLink={project.projectLink}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
