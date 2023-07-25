import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Resume from "@/assets/Minsi Hu Resume.pdf"
import HText from "@/shared/HText";
import { BsFiletypePdf, BsDownload } from "react-icons/bs"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-700`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* CONTACT AND RESUME */}
        <div className="md:flex justify-between">
          {/* FORM AND IMAGE */}
          <div className="my-14 basis-1/2">
            {/* HEADER */}
            <motion.div
              className="md:w-max mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText size="text-5xl">
                <span className="text-primary-500">CONTACT</span> ME
              </HText>
            </motion.div>

            <motion.div
              className="mt-10 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                method="POST"
              >
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  placeholder="MESSAGE"
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}

                <button
                  type="submit"
                  className="rounded-lg border-gray-100 border-2 bg-gray-200 px-20 py-2 transition duration-500 hover:text-primary-700 hover:border-primary-700"
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>
          </div>

          {/* RESUME */}
          <motion.div
            className="mt-16 basis-1/2 md:mt-0 mx-5 bg-gray-40 p-10 rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-3xl font-bold text-primary-500 pb-4">Resume</h3>
            <h4 className="text-2xl font-bold pb-4">Minsi Hu</h4>
            <p className="text-xl font-bold text-gray-600">Skills</p>
            <ul className="pl-5 pb-5">
              <li>Java</li>
              <li>C/C++</li>
              <li>Javascript</li>
            </ul>
            <p className="text-xl font-bold text-gray-600">Experience</p>
            <ul className="pl-5">
              <li className="pb-2">Teaching Assistant, UMD Department of Computer Science: <i>August 2023</i> - <i>December 2023</i></li>
              <p className="pl-5 text-gray-600">Teaching Assistant for the CMSC216: Introduction to Computer Systems fall semester course...</p>
            </ul>

            {/* DOWNLOAD RESUME BUTTON */}
            <div className="text-center">
              <a href={Resume} target="_blank" download="Minsi_Hu_Resume">
                <button className="text-lg mt-5 border-gray-100 border-2 bg-gray-200 rounded-3xl px-10 py-3 transition duration-500 hover:text-primary-700 hover:border-primary-700">
                  <p className="whitespace-nowrap flex gap-1 align-text-top">Resume <BsFiletypePdf className="relative top-1"/> | 
                    <span className="text-primary-700">Download</span> <BsDownload className="relative top-1 text-primary-700"/>
                  </p>
                </button>
              </a>
            </div>

          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;