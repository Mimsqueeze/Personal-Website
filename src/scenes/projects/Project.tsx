import HText from "@/shared/HText";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { SiGithub } from "react-icons/si"

type Props = {
  projectHeader: string;
  projectSubHeader: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
};

const Project = ({
  projectHeader,
  projectSubHeader,
  projectDescription,
  projectImage,
  projectLink,
}: Props) => {
  const projectStyles =
    "mt-16 md:my-0 mx-auto bg-primary-300 p-10 rounded-2xl";
  const projectHeaderSize = "text-2xl md:text-2xl pb-2";
  const projectSubHeaderSize = "text-lg md:text-xl pb-4";
  const projectDescriptionSize = "text-base md:text-base pb-4";
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
      <div className="flex justify-between">
        <HText size={projectHeaderSize}>{projectHeader}</HText>
        <div className="p-2 pt-0 inline-block align-top">
          <a href={projectLink} target="_blank" className={`flex items-center justify-between whitespace-nowrap w-full gap-1 transition duration-500 hover:text-primary-700`}>
            <SiGithub className="h-6 w-6"/> Visit →
          </a>
        </div>
      </div>
      <p className={`${projectSubHeaderSize} text-primary-700`}>
        {projectSubHeader}
      </p>
      <div className="items-center">
        <p className={`${projectDescriptionSize}`}>
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

export default Project;
