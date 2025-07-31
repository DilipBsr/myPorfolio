import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/bhola-shankar-it/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/DilipBsr" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/Bhola_Shankar_IT/" Icon={SiLeetcode} />
    </div>
  );
};

export default ContactSocial;
