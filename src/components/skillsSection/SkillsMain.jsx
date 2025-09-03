import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <hr />
       <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col items-center">
          <h2 className="lg:text-6xl sm:3xl text-5xl mt-10 font-special font-extrabold ">Skills</h2>
        </div>
      </motion.div>
      <div className="max-w-[1200px] px-4 mt-10 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        <div className="mt-10 flex justify-center left-[50%]-translate-x-[50%] ">
          <AllSkills />
        </div>
        <div className="hidden lg:block">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
