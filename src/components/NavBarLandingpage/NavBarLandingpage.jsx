import React, { useEffect, useState} from "react";
import {
    ContainerNavBar,
    ImageLogoNav,
    Navegations,
    LinksNav
} from './Style';
import logo from '../../_assets/logo.png'

const NavBarLandingpage = () => {

    const [isGlassEffect, setIsGlassEffect] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 300;

            setIsGlassEffect(scrollY > threshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ContainerNavBar glassEffect={isGlassEffect}>
            <ImageLogoNav src={logo} alt="logo nav bar" />
            <Navegations> 
                <LinksNav>Home</LinksNav>
                <LinksNav>Prices</LinksNav>
                <LinksNav isLoginButton>Login</LinksNav>
            </Navegations>
        </ContainerNavBar>
    )

}

export default NavBarLandingpage;