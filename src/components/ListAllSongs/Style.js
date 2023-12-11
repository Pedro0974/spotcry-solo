import styled from "styled-components";

export const ContainerListSongs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  position: fixed;
  top: 24%;
  left: 15%;
  height: 57%;
  max-height: 80vh; /* Definindo a altura máxima em relação à altura da viewport */
  overflow-y: auto; /* Adicionando scroll vertical quando necessário */
  border-radius: 15px;
  width: 80%;
  backdrop-filter: ${(props) => (props.glassEffect ? "blur(10px)" : "none")};
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.glassEffect ? "rgba(255, 255, 255, 0.04)" : "transparent"};

  & h1 {
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  & li {
    padding: 0.5rem;
    border-bottom: 1px solid #ff5c5c; /* Cor da borda */
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff5c5c; /* Cor do fundo da thumb (barra) */
    border-radius: 10px; /* Borda arredondada da thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.2); /* Cor de fundo do track (trilha) */
  }
`;
