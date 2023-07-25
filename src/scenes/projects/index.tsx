import useMediaQuery from "@/hooks/useMediaQuery";
import HText from "@/shared/HText";
import { SelectedPage} from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const useVm = useMediaQuery("(min-width: 410px)");
  
  return (
    <section id="projects" className="bg-gray-20 overflow-x-hidden">
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
            <HText size={(useVm) ? "text-5xl" : "text-[11vw]"}>PROJECTS</HText>
            <p className="text-lg my-5">
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
