import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleCertificate = ({ Certificate }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="lg:w-auto border-2 border-dashed rounded-2xl mt-12 p-4 gap-5"
    >
    <div className="grid lg:grid-cols-2 md:grid-cols-2 min-w-auto  max-w-150 text-center justify-center items-center gap-5">
      <div className="flex flex-col gap-2 justify-center items-center lg:block">
      <p className="font-bold text-cyan">{Certificate.course}</p>
      <div className="flex gap-5">
        <p className="text-orange">{Certificate.company}</p>
        <p className="text-lightGrey">{Certificate.date}</p>
      </div>
      </div>
      <div>
        <img src={Certificate.image} alt="website image" className="w-90 h-full" />
      </div>
    </div>
    </motion.div>
  );
};

export default SingleCertificate;
