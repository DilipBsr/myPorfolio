import Hamburger from 'hamburger-react'
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { menu } from 'framer-motion/client';

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className=" cursor-pointer scale-200 p-5 fixed top-1.5 left-1.5 z-10"
      onClick={setToggleMenu}
    >
      <Hamburger
        direction='right'
        duration={0.4}
        size={18}
        easing='ease-in-out'
        rounded
        toggled={menuOpen}
        toggle={menuOpen}
      />
    </button>
  );
};

export default NavbarToggler;
