import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import CertificateMain from "./components/certificateSection/CertificateMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";

import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import { useSelector } from "react-redux";


function App() {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  
  return (
    <main className="font-body text-white relative overflow-hidden">
      
      <NavbarMain />
      <div className={`${menuOpen?"opacity-4":""}`}>
        <HeroMain />
        <HeroGradient />
        <SubHeroMain />
        <AboutMeMain />
        <SkillsMain />
        <CertificateMain/>
        <ProjectsMain />
        <ContactMeMain />
      </div>
      <FooterMain />
    </main>
  );
}

export default App;
