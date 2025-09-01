import SingleCertificate from "./SingleCertificate";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Certificate = [
  
  {
    course: "Web Development",
    company: "Udemy",
    date: "Aug-2022",
    image:"public/images/udemy.png"
  },
   {
    course: "TechAThon",
    company: "MAIT",
    date: "February-2024",
    image:"public/images/TechAThon.png"
  },
  {
    course: "Data Science With Python",
    company: "SimpleLearn",
    date: "April-2024",
    image:"public/images/certificate.jpg"
  },
  {
    course: "DBMS",
    company: "Infosys",
    date: "January-2025",
     image:"public/images/DBMS.png"
  },
  {
    course: "DSA in Java",
    company: "Infosys",
    date: "January-2025",
     image:"public/images/javaDSA.png"
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
