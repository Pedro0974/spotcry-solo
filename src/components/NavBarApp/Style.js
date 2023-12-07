import styled from "styled-components";


export const ContainerNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    backdrop-filter: ${(props) => (props.glassEffect ? 'blur(10px)' : 'none')};
    z-index: 1000;
    transition: background-color 0.3s ease;
    background-color: ${(props) => (props.glassEffect ? 'rgba(255, 255, 255, 0.5)' : 'transparent')};
`;
    

export const ImageLogoNav = styled.img`
    width: 4rem;
`;

export const Navegations = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    
`;

export const LinksNav = styled.button`
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 1rem;
    color: ${(props) => (props.isSingUpButton ? 'blue' : 'black')};

`;

