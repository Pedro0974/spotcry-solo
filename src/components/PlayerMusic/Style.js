import styled from "styled-components";

export const ContainerPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  position: fixed;
  top: 82%;
  left: 15%;
  height: 15%;
  max-height: 80vh; /* Definindo a altura máxima em relação à altura da viewport */
  overflow-y: auto; /* Adicionando scroll vertical quando necessário */
  border-radius: 15px;
  width: 80%;
  backdrop-filter: ${(props) => (props.glassEffect ? "blur(10px)" : "none")};
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.glassEffect ? "rgba(255, 255, 255, 0.04)" : "transparent"};
`;
