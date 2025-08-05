import SingleCertificate from "./SingleCertificate";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Certificate = [
  
  {
    job: "Front-End Developer",
    company: "Remote",
    date: "Aug-2024",
    responsibilities: [
    ],
  },
];

const AllCertificates = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {Certificate.map((certificate, index) => {
        return (
          <>
            <SingleCertificate key={index} Certificate={certificate} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllCertificates;
