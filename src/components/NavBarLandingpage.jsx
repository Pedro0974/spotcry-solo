import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerNavBar, ImageLogoNav, Navegations, LinksNav } from "./Style";
import logo from "../../_assets/logo.png";
import { goToLoginPage } from "../../routes/Coordinator";
const NavBarLandingpage = () => {
  const [isGlassEffect, setIsGlassEffect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300;

      setIsGlassEffect(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoginButtonClick = () => {
    goToLoginPage(navigate);
  };

  return (
    <ContainerNavBar glassEffect={isGlassEffect}>
      <ImageLogoNav src={logo} alt="logo nav bar" />
      <Navegations>
        <LinksNav>Home</LinksNav>
        <LinksNav>Prices</LinksNav>
        <LinksNav isLoginButton onClick={handleLoginButtonClick}>
          Login
        </LinksNav>
      </Navegations>
    </ContainerNavBar>
  );
};

export default NavBarLandingpage;
