import NavbarLinks from "./NavbarLinks";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
        <h1 className="text-white  text-3xl sm:hidden font-special font-extrabold md:block">
          Portfolio
        </h1>
        <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
          BS
        </h1>
        <div className={`${menuOpen ? "sm:block " : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

      <button>
        Contact Me
      </button>
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
