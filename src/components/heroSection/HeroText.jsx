import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left md:ml-10 text-center ">
      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-5xl text-3xl lg:text-5xl sm:text-4xl text-orange font-bold uppercase winky-rough-regular "
      >
        Bhola Shankar
      </motion.h1>
      <motion.h2
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-5xl md:text-2xl text-3xl  uppercase font-semibold prata-regular"
      >
        Full Stack Web Developer
      </motion.h2>
     
    </div>
  );
};

export default HeroText;
