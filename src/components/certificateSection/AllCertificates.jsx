import SingleCertificate from "./SingleCertificate";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Certificate = [
  
  {
    course: "Web Development",
    company: "Udemy",
    date: "Aug-2022",
    learnings: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
  },
  {
    course: "Web Development",
    company: "Udemy",
    date: "Aug-2022",
    learnings: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
  },
  {
    course: "Web Development",
    company: "Udemy",
    date: "Aug-2022",
    learnings: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
  },
  {
    course: "Web Development",
    company: "Udemy",
    date: "Aug-2022",
    learnings: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
  },
];

const AllCertificates = () => {
  return (
    <div className="flex lg:flex-row  items-center justify-center gap-5 flex-wrap">
      {Certificate.map((certificate, index) => {
        return (
          <>
            <SingleCertificate key={index} Certificate={certificate} />
            
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
              </motion.div>
          </>
        );
      })}
    </div>
  );
};

export default AllCertificates;
