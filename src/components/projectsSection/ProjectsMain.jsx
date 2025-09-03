import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Si1Dot1Dot1Dot1 } from "react-icons/si";

const projects = [
  {
    name: "News App",
    year: "Mar 2023",
    align: "left",
    image: "/images/newsApi.png",
    link: "https://github.com/DilipBsr/world-news-app",
  },
  {
    name: "House Mela",
    year: "Sep 2023",
    align: "right",
    image: "../images/HouseMela.png",
    link: "https://housemela-tau.vercel.app/",
  },
  {
    name: "Sofos",
    year: "July 2024",
    align: "left",
    image: "../images/sofos.png",
    link: "https://github.com/DilipBsr/sofos",
  },
  {
    name: "Sign Language Testing",
    year: "Feb 2025",
    align: "right",
    image: "../images/SignTesting.png",
    link: "https://github.com/DilipBsr/Sign-Language-Character-Testing",
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 mb-30">
      <hr />

      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col items-center">
          <h2 className="lg:text-6xl sm:3xl text-5xl mb-10 mt-10 font-special font-extrabold ">Projects</h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
      <div className="flex flex-col items-center mt-10">
        
        <p className="text-lg text-center">
          I have worked on a variety of web development projects, ranging from
          responsive small websites to a full-stack complex applications.
        </p>
      </div>
        </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-10 ">
        {projects.map((project, index) => {
          return (
            <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
      <div className=" absolute -z-1 flex justify-start wrap-normal items-center animate-[pulse_50s_ease-in-out_infinite]">
        <Si1Dot1Dot1Dot1 className="rounded-b-4xl h-auto w-[2000px] scale-300 text-red-500
                  opacity-50 blur-lg animate-[spin_100s_linear_infinite] " />
      </div>
    </div>
  );
};

export default ProjectsMain;
