import HText from "@/shared/HText";
import { motion } from "framer-motion";
import parse from "html-react-parser";

type Props = {
  projectHeader: string;
  projectSubHeader: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
};

const Activity = ({
  projectHeader,
  projectSubHeader,
  projectDescription,
  projectImage,
  projectLink,
}: Props) => {
  const projectStyles =
    "mt-16 md:my-0 mx-auto bg-primary-300 p-10 rounded-2xl";
  const projectHeaderSize = "text-4xl md:text-3xl";
  const projectSubHeaderSize = "text-lg md:text-2xl";
  const projectDescriptionSize = "text-base";
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

export default Activity;
