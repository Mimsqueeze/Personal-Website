import HText from "@/shared/HText";
import { SelectedPage} from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="bg-gray-20">
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
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText size="text-5xl">PROJECTS</HText>
            <p className="text-md my-5">
              A list of projects I've done.
            </p>
          </motion.div>

          {/* DIGIT RECOGNIZER */}
          <motion.div>

          </motion.div>

          {/* SORTING SIMULATOR */}
          <motion.div>

          </motion.div>
          
          {/* MIMS RUCOY CALCULATOR */}
          <motion.div>

          </motion.div>
          
          {/* RUCOY VISION BOT */}
          <motion.div>

          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
