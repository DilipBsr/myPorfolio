import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleCertificate = ({ Certificate }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="lg:w-auto border-2 border-dashed rounded-2xl mt-12 p-4 gap-5 bg-amber-600"
    >
    <div className="lg:block grid grid-cols-2 min-w-100 lg:w-auto text-center">
      <div className="flex flex-col gap-2 justify-center items-center lg:block">
      <p className="font-bold text-cyan">{Certificate.course}</p>
      <div className="flex gap-5">
        <p className="text-orange">{Certificate.company}</p>
        <p className="text-lightGrey">{Certificate.date}</p>
      </div>
      <ul className=" flex gap-5 flex-wrap list-disc mt-4 pl-4">
        {Certificate.learnings.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
      </div>
      <div>
        <img src={""} alt="website image" className="w-full h-full" />
      </div>
    </div>
    </motion.div>
  );
};

export default SingleCertificate;
