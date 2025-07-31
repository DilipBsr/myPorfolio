import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col text-justify md:items-start sm:items-center md:text-left ">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="lg:text-xl">
        👋 Hi, I’m Bhola Shankar — a passionate Full Stack Web Developer and B.Tech (IT) graduate with a 9.0 CGPA.
        I specialize in building clean, responsive, and high-performing web applications using the MERN Stack and Tailwind CSS.

        💻 With a strong grasp of both front-end and back-end technologies, I love writing clean code, solving real-world problems, and continuously leveling up my skills.
        🧠 I’ve also solved 400+ DSA problems in Java, sharpening my logic, algorithms, and coding fundamentals.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to=""
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Resume
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
