import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description?: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Skill = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 pt-10 text-center bg-gray-20 w-full h-full"
    >
      <div className="mb-2 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-3">
          {icon}
        </div>
      </div>

      <h4 className="font-bold text-2xl">{title}</h4>
      <p className="my-3 mx-2">{description}</p>
    </motion.div>
  );
};

export default Skill;