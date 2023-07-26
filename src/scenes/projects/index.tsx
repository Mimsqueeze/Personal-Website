import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const projectStyles = "mb-16 mt-16 md:w-4/5 bg-primary-300 p-10";

  const headerSize = "text-4xl md:text-5xl";
  const headerDescriptionSize = "text-base md:text-lg";

  const projectHeaderSize = "text-2xl md:text-2xl";
  const projectSubHeaderSize = "text-lg md:text-xl";
  const projectDescriptionSize = "text-base md:text-base";


  return (
    <section id="projects" className="overflow-hidden bg-gray-20">
      <div className="mx-auto min-h-full w-5/6 pt-20">
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
            <p className={`my-5 ${headerDescriptionSize}`}>A list of projects I've done.</p>
          </motion.div>
        </motion.div>
      </div>
      {/* DIGIT RECOGNIZER */}
      <motion.div
        className={`${projectStyles} rounded-2xl w-5/6 mx-auto`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="pb-8">
          <HText size={projectHeaderSize}>Digit Recognizer</HText>
          <p className={`${projectSubHeaderSize} text-primary-700`}>
            An application that recognizes handwritten digits.
          </p>
        </div>
        <div className="items-center md:flex md:justify-between md:gap-10">
          <p className={`${projectDescriptionSize} basis-1/2 pb-8`}>
            Developed a C++ implementation of a multi-layer convolutional neural
            network from scratch using Eigen3, a powerful linear algebra
            library. It utilizes deep learning techniques to recognize
            handwritten digits given from the{" "}
            <a
              href="http://yann.lecun.com/exdb/mnist/index.html"
              target="_blank"
              className="text-primary-700"
            >
              MNIST
            </a>{" "}
            database. The program takes inputs 28x28 pixel images of a
            handwritten digit and predicts the corresponding numerical value.
          </p>
          <p className="basis-1/2 text-center">[insert image here]</p>
        </div>
      </motion.div>

      {/* SORTING SIMULATOR */}
      <motion.div
        className={`${projectStyles} rounded-2xl w-5/6 mx-auto`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="pb-8">
          <HText size={projectHeaderSize}>Sorting Simulator</HText>
          <p className={`${projectSubHeaderSize} text-primary-700`}>
            A visualizer for different sorting algorithms.
          </p>
        </div>
        <div className="items-center md:flex md:justify-between md:gap-10">
          <p className={`${projectDescriptionSize} basis-1/2 pb-8`}>
            Developed a sorting algorithm visualizer using Java Swing to
            showcase real-time updates to arrays as various sorting algorithms
            like bubble sort, insertion sort, merge sort, and quick sort are
            applied. Sorting Simulator also allows sorting algorithms
            comparisons by providing relevant statistics including sorting time,
            number of comparisons, number of insertions, etc.
          </p>
          <p className="basis-1/2 text-center">[insert image here]</p>
        </div>
      </motion.div>

      {/* MIMS RUCOY CALCULATOR */}
      <motion.div
        className={`${projectStyles} rounded-2xl w-5/6 mx-auto`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="pb-8">
          <HText size={projectHeaderSize}>Mims' Rucoy Calulator</HText>
          <p className={`${projectSubHeaderSize} text-primary-700`}>
            A utility discord chatbot for an online gaming community.
          </p>
        </div>
        <div className="items-center md:flex md:justify-between md:gap-10">
          <p className={`${projectDescriptionSize} basis-1/2 pb-8`}>
            Led a team that develops and hosts an intelligent utility Discord
            bot using Java Discord API, deployed in over 4600 servers, assisting
            thousands of users daily in optimizing their gameplay. Features
            intuitive commands, intelligent functionality, and a clean yet
            informative UI.
          </p>
          <p className="basis-1/2 text-center">[insert image here]</p>
        </div>
      </motion.div>

      {/* RUCOY VISION BOT */}
      <motion.div
        className={`${projectStyles} rounded-2xl w-5/6 mx-auto`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="pb-8">
          <HText size={projectHeaderSize}>Rucoy Vision Bot</HText>
          <p className={`${projectSubHeaderSize} text-primary-700`}>
            An automated game bot utilizing image recognition.
          </p>
        </div>
        <div className="items-center md:flex md:justify-between md:gap-10">
          <p className={`${projectDescriptionSize} basis-1/2 pb-8`}>
            Developed an image processing and recognition application using
            OpenCV and PyAutoGUI, which captures screen images, identifies
            targets, and automates actions to improve a user's experience in a
            multiplayer game.
          </p>
          <p className="basis-1/2 text-center">[insert image here]</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
