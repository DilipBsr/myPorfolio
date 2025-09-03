import { useDispatch } from "react-redux";
import { Link } from "react-scroll";
import { toggleMenu } from "../../state/menuSlice";


const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Certificate", section: "certificate" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
    console.log("clicked");
  };
  return (
    <>
    
    <ul className="flex justify-center flex-col  text-white font-body fixed text-center left-[50%] -translate-x-[50%] lg:text-2xl text-xl lg:font-semibold md:font-semibold md:text-2xl w-full py-4 z-10 ">
      {links.map((link, index) => {
        return (
          <li key={index} className="group border-b border-dashed bor p-3"
          >
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white 
              transition-all duration-200 
             hover:text-blue-900
             hover:text-3xl
             "
             
             onClick={setToggleMenu}
            >
              {link.link}
            </Link>
            <div className="mx-auto w-0 group-hover:w-full h-[1px] transition-all duration-500 "></div>
          </li>
        );
      })}
    </ul>
    </>
  );
};

export default NavbarLinks;
