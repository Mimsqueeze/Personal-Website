import { SelectedPage } from "@/shared/types";
import MinsiHeadshot from "/minsi_headshot.png";
import { motion } from "framer-motion";
import Htext from "@/shared/HText";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const useVm = useMediaQuery("(min-width: 600px)");
  
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 overflow-x-hidden">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Htext size={(useVm) ? "text-8xl" : "text-[16vw]"}>MINSI HU</Htext>
            <a
              href="https://umd.edu/"
              target="_blank"
              className="basis-3/5 text-2xl text-primary-500"
            >
              CS and Mathematics @ University of Maryland
            </a>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            className="flex items-center gap-8 pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-md mt-8">
              Hi! I'm Minsi Hu. I'm currently a rising sophomore attending the
              University of Maryland, pursuing a double degree in Math and
              Computer Science.
              <br></br>
              <br></br>I am highly enthusiastic about the fields of computer
              science and mathematics, with a particular interest in machine
              learning and artificial intelligence.
            </p>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10
          md:ml-40 md:mt-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            className="rounded-lg border-4 border-primary-100"
            alt="minsi-headshot"
            src={MinsiHeadshot}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
