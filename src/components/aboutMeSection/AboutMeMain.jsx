import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const AboutMeMain = () => {
  return (

    <>
    <div id="about" className="min-h-screen">
    <h2 className="text-6xl mt-30 font-special font-extrabold text-center">About Me</h2>
    <div
      className="flex lg:flex-row flex-col sm:gap-5 gap-12 px-4 max-w-[1200px] mx-auto mt-10 justify-between items-center md:item-center ;lg:items-baseline"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
      >
      <AboutMeImage />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        >
        <AboutMeText />
      </motion.div>
    </div>
    </div>
    </>
  );
};

export default AboutMeMain;
