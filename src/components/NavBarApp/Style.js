import styled from "styled-components";

export const ContainerNavBar = styled.div`
    display: flex;
    flex-direction: column; /* Change to column direction */
    align-items: center; /* Align items to the start */
    padding: 1rem; /* Adjust padding */
    position: fixed;
    top: 24px;
    left: 24px;
    height: 95%;
    border-radius: 15px;
    width: 10%; /* Set width to 20% */
    backdrop-filter: ${(props) => (props.glassEffect ? 'blur(10px)' : 'none')};
    z-index: 1000;
    transition: background-color 0.3s ease;
    background-color: ${(props) => (props.glassEffect ? 'rgba(255, 255, 255, 0.04)' : 'transparent')};
`;

export const ImageLogoNav = styled.img`
    width: 10rem;
    margin-bottom: 2rem; /* Add margin bottom for spacing */
`;

export const Navegations = styled.div`
    display: flex;
    flex-direction: column; /* Change to column direction */
    gap: 2rem; /* Adjust gap */
    align-items: flex-start; /* Align items to the start */
`;

export const LinksNav = styled.button`
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => (props.isSingUpButton ? '#F662B2' : 'white')};
`;