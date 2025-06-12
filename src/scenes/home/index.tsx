import { SelectedPage } from "@/shared/types";
import MinsiHeadshot from "/minsi_headshot.png";
import { motion } from "framer-motion";
import Htext from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const headerSize = "text-4xl md:text-5xl";
  const subHeaderSize = "text-xl md:text-2xl";
  const headerDescriptionSize = "text-base md:text-lg";
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 overflow-hidden">
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
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0  },
            }}
          >
            <Htext size={headerSize}><span className="whitespace-nowrap">MINSI HU</span></Htext>
            <a
              href="https://umd.edu/"
              target="_blank"
              className={`basis-3/5 text-primary-500 ${subHeaderSize}`}
            >
              CS and Math @ University of Maryland
            </a>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            className="flex items-center gap-8 pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.25, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className={`${headerDescriptionSize} mt-8`}>
              Hi! I'm Minsi Hu. I'm an incoming M.S. Computer Science student at the University of Maryland. 
              <br></br>
              <br></br> 
              I love learning about both computer science and mathematics, and I've always been drawn to the beauty of how deeply intertwined they are with one another.
              Learning about and understanding one subject boosts my appreciation and passion for studying the other.
            </p>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10
          md:ml-20 md:mt-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
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
