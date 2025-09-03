import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center px-4 mt-10 "
    >
      <hr />
       <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col items-center">
          <h2 className="lg:text-6xl sm:3xl text-5xl mb-10 mt-10 font-special font-extrabold ">Contact Me</h2>
        </div>
      </motion.div>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
