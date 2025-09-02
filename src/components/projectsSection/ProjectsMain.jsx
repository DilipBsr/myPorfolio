import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "News App",
    year: "March 2023",
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
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col items-center mt-[100px]">
          <h2 className="text-6xl text-cyan mb-10 font-special font-extrabold">Projects</h2>
          <p className="text-lg text-center">
            I have worked on a variety of web development projects, ranging from
            responsive small websites to a full-stack complex applications.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
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
    </div>
  );
};

export default ProjectsMain;
