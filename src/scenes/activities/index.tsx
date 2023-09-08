import HText from "@/shared/HText";
import { SelectedPage, ActivityType } from "@/shared/types";
import { motion } from "framer-motion";
import Activity from "./Activity";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const activities: Array<ActivityType> = [
  {
    // Gamer Symphony Orchestra
    activityHeader: "Gamer Symphony Orchestra",
    activitySubHeader: "tarstarst",
    activityDescription: `
      this is the description
    `,
    activityImage: "digit_recognizer.png",
    activityLink: "https://github.com/Mimsqueeze/Digit-Recognition",
  },
]
const Activities = ({ setSelectedPage }: Props) => {
  const headerSize = "text-4xl md:text-5xl";
  const headerDescriptionSize = "text-base md:text-lg";

  return (
    <section id="activities" className="bg-primary-100 overflow-hidden">
      <div className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Activities)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText size={headerSize}>ACTIVITIES</HText>
            <p className={`my-5 ${headerDescriptionSize}`}>
              Some of the things I do!
            </p>
          </motion.div>

          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
          </motion.div>
          {/* PROJECTS */}
          <div className="md:mx-auto md:gap-8">
            {activities.map((activity: ActivityType) => (
              <Activity
                key={activity.activityHeader}
                projectHeader={activity.activityHeader}
                projectSubHeader={activity.activitySubHeader}
                projectDescription={activity.activityDescription}
                projectImage={activity.activityImage}
                projectLink={activity.activityLink}
              />
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
