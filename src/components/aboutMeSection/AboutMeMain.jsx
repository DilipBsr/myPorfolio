import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Si1Password} from "react-icons/si";

const AboutMeMain = () => {
  return (

    <>
    
    <div id="about" className="min-h-screen mt-10 mb-10">
      <div className=" absolute -z-2 flex justify-start wrap-normal items-center animate-[pulse_20s_ease-in-out_infinite]">
            <Si1Password className="rounded-b-4xl h-auto w-[2000px] scale-300 text-pink-500 blur-lg animate-[spin_50s_linear_infinite] " />
    </div>
     <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col items-center">
          <h2 className="lg:text-6xl sm:3xl text-5xl mb-10 mt-10 font-special font-extrabold ">About Me</h2>
        </div>
      </motion.div>
    <div
      className="flex flex-col sm:gap-5 gap-12 px-4 max-w-[1200px] mx-auto mt-10 justify-between items-center md:item-center ;lg:items-baseline"
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
