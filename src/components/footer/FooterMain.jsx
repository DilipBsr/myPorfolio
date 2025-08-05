import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Certificates",
      section: "certificate",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div className="px-4 bg-black opacity-70">
      <div className="w-full h-[1px] bg-lightGrey mt-24"><hr /></div>
      <div className="flex lg:justify-between items-center gap-3 mt-4 max-w-[1200px] mx-auto mb-5  lg:flex-row flex-col">
        <p className="text-3xl text-gray-300 ">-Bhola Shankar-</p>
        <ul className="flex gap-6 text-gray-400 font-bold text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-center mt-5 text-sm">
        © 2025 BS | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
