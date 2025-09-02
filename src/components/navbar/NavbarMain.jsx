import NavbarLinks from "./NavbarLinks";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
      <div className="">
        {
          menuOpen &&
          <NavbarLinks />
        }
        <NavbarToggler />
      </div>
  );
};

export default NavbarMain;
