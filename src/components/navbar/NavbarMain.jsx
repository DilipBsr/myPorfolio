import NavbarLinks from "./NavbarLinks";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import ScrollUp from "./ScrollUp";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
      <div className="">
        {
          menuOpen &&
          <NavbarLinks />
        }
        <NavbarToggler />
        <ScrollUp/>
      </div>


  );
};

export default NavbarMain;
