import AllCertificates from "./AllCertificates";
import CertificateTop from "./CertificateTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import CertificateText from "./certificateText";
import { Si1Password } from "react-icons/si";
const CertificateMain = () => {
  return (
    <div id="certificate" className="max-w-[1200px] mx-auto px-4 mb-10 mt-10">
      <hr />
      
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificateText/>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <CertificateTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllCertificates />
    </div>
  );
};

export default CertificateMain;
