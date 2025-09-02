
const AboutMeText = () => {
  return (
    <div className="flex flex-col text-justify md:items-start sm:items-center md:text-left ml-7 mr-5">
      <p className="lg:text-xl text-justify ,">
        👋 Hi, I’m Bhola Shankar — a passionate Full Stack Web Developer and B.Tech (IT) graduate with a 9.0 CGPA.
        I specialize in building clean, responsive, and high-performing web applications using the MERN Stack and Tailwind CSS.

        💻 With a strong grasp of both front-end and back-end technologies, I love writing clean code, solving real-world problems, and continuously leveling up my skills.
        🧠 I’ve also solved 400+ DSA problems in Java, sharpening my logic, algorithms, and coding fundamentals.
      </p>
      <button className="cursor-pointer border w-fit self-center m-5 p-3 rounded-4xl hover:scale-110 transform transition-all duration-500"
      onClick={()=>
        window.open(
          "/images/BholaShankarCV_8.pdf",
          "_blank"
        )
      }>
        My Resume
      </button>
    </div>
  );
};

export default AboutMeText;
