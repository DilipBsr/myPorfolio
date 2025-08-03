import NavbarLinks from "./NavbarLinks";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black opacity-40 items-center pl-6 pr-6 lg:p-4 rounded-3xl shadow-2xl shadow-orange-200">
        <h1 className="text-white  text-3xl hidden font-special font-extrabold lg:block md:block">
          Portfolio
        </h1>
        <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
          BS
        </h1>
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
      <button>
        Contact Me
      </button>
      </div>
      <div className="flex lg:hidden sm:block p-4 bg-black opacity-40 items-center justify-center rounded-3xl  border-orange border-[0.5px] ">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
