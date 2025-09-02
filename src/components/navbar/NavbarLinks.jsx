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
    <ul className="flex justify-center flex-col gap-6 text-white font-body fixed text-center left-[50%] -translate-x-[50%] lg:text-2xl text-xl font-semibold md:text-2xl bg-black w-full py-4 opacity-40 z-10">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white transition-all duration-500"
              onClick={setToggleMenu}
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
