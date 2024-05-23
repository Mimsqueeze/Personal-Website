import HText from "@/shared/HText";
import { motion } from "framer-motion";
import parse from "html-react-parser";

type Props = {
  experienceHeader: string;
  experienceSubHeader: string;
  experienceDescription: string;
  experienceImage: string;
  experienceImage2: string;
};

const Experience = ({
  experienceHeader,
  experienceSubHeader,
  experienceDescription,
  experienceImage,
  experienceImage2,
}: Props) => {
  const experienceStyles =
  "mt-16 md:my-0 mx-auto bg-primary-300 p-10 rounded-2xl";
  const experienceHeaderSize = "text-2xl md:text-2xl pb-2";
  const experienceSubHeaderSize = "text-lg md:text-xl pb-4";
  const experienceDescriptionSize = "text-base md:text-base pb-4";
  const parsedexperienceDescription = parse(experienceDescription);
  if (experienceImage2 == "accuracy.svg") {
    return (
      <motion.div
        className={experienceStyles}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="md:pr-4 lg:pr-0 xl-pr-4">
            <HText size={experienceHeaderSize}>{experienceHeader}</HText>
            <div className="items-center">
              <p className={`${experienceSubHeaderSize} text-primary-700`}>
                {parse(experienceSubHeader)}
              </p>
              <p className={`${experienceDescriptionSize}`}>
                {parsedexperienceDescription}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
              <img
                src={experienceImage}
                alt="experience_image"
                className="w-[63.6%] rounded-tl-xl rounded-bl-xl"
              ></img>
                <img
                src={experienceImage2}
                alt="experience_image2"
                className="w-[36.4%] rounded-tr-xl rounded-br-xl"
              ></img>
            </div>
        </div>
      </motion.div>
    );
  } else if (experienceImage2 == "university-of-maryland-logo.png") {
    return (
      <motion.div
        className={experienceStyles}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="md:pr-4">
            <HText size={experienceHeaderSize}>{experienceHeader}</HText>
            <div className="items-center">
              <p className={`${experienceSubHeaderSize} text-primary-700`}>
                {parse(experienceSubHeader)}
              </p>
              <p className={`${experienceDescriptionSize}`}>
                {parsedexperienceDescription}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
              <img
                src={experienceImage}
                alt="experience_image"
                className="pb-4"
              ></img>
                <img
                src={experienceImage2}
                alt="experience_image2"
                className=""
              ></img>
            </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className={experienceStyles}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="md:pr-4">
            <HText size={experienceHeaderSize}>{experienceHeader}</HText>
            <div className="items-center">
              <p className={`${experienceSubHeaderSize} text-primary-700`}>
                {parse(experienceSubHeader)}
              </p>
              <p className={`${experienceDescriptionSize}`}>
                {parsedexperienceDescription}
              </p>
            </div>
          </div>
          <img
            src={experienceImage}
            alt="experience_image"
            className="rounded-xl"
          ></img>
        </div>
      </motion.div>
    );
  }
};

export default Experience;
