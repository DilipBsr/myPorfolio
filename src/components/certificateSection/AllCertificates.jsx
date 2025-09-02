import SingleCertificate from "./SingleCertificate";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Certificate = [
  
  {
    course: "Web Development Course",
    company: "Udemy",
    date: "Aug-2022",
    image:"/images/udemy.png"
  },
   {
    course: "TechAThon College Hackathon",
    company: "MAIT",
    date: "February-2024",
    image:"/images/TechAThon.png"
  },
  {
    course: "Data Science With Python Course",
    company: "SimpleLearn",
    date: "April-2024",
    image:"/images/certificate.jpg"
  },
  {
    course: "IBM SkillBuild Virtual Internship",
    company: "IBM",
    date: "June-2024",
    image:"/images/ibmInternship.png"
  },

  {
    course: "DBMS Course",
    company: "Infosys",
    date: "January-2025",
     image:"/images/DBMS.png"
  },
  {
    course: "DSA in Java Course",
    company: "Infosys",
    date: "January-2025",
     image:"/images/javaDSA.png"
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
