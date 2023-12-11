import React, { useEffect, useState} from "react";
import {
    ContainerNavBar,
    ImageLogoNav,
    Navegations,
    LinksNav
} from './Style';
import logo from '../../_assets/logo.png'

const NavBarApp = () => {

    const [isGlassEffect, setIsGlassEffect] = useState(true);

    

    return (
        <ContainerNavBar glassEffect={isGlassEffect}>
            <ImageLogoNav src={logo} alt="logo nav bar" />
            <Navegations> 
                <LinksNav>Musics</LinksNav>
                <LinksNav>Playlists</LinksNav>
                <LinksNav isSingUpButton>SignUp</LinksNav>
            </Navegations>
        </ContainerNavBar>
    )

}

export default NavBarApp;