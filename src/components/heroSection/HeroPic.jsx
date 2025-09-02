import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiSnapdragon } from "react-icons/si";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="../images/HexaPic.png"
        alt="Bhola Shankar"
        className="max-h-[450px] w-auto"
      />

      <div className=" absolute -z-3 flex justify-center items-center animate-[pulse_20s_ease-in-out_infinite]">
        <SiSnapdragon className="h-[200px] min-h-[400px] w-auto blur-lg animate-[spin_50s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
