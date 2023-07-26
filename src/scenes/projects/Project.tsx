import HText from "@/shared/HText";
import { motion } from "framer-motion";
import parse from "html-react-parser";

type Props = {
  projectHeader: string;
  projectSubHeader: string;
  projectDescription: string;
  projectImage: string;
};

const Skill = ({
  projectHeader,
  projectSubHeader,
  projectDescription,
  projectImage,
}: Props) => {
  const projectStyles =
    "mt-16 md:my-0 mx-auto bg-primary-300 p-10 rounded-2xl ";
  const projectHeaderSize = "text-2xl md:text-2xl";
  const projectSubHeaderSize = "text-lg md:text-xl";
  const projectDescriptionSize = "text-base md:text-base";
  const parsedProjectDescription = parse(projectDescription);
  return (
    <motion.div
      className={projectStyles}
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
        <HText size={projectHeaderSize}>{projectHeader}</HText>
        <p className={`${projectSubHeaderSize} text-primary-700`}>
          {projectSubHeader}
        </p>
      </div>
      <div className="items-center">
        <p className={`${projectDescriptionSize} pb-8`}>
          {parsedProjectDescription}
        </p>
        <img
          src={projectImage}
          alt="project_image"
          className="rounded-xl"
        ></img>
      </div>
    </motion.div>
  );
};

export default Skill;
