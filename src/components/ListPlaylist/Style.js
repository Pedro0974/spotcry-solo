import styled from "styled-components";

export const ContainerListPlaylist = styled.div`
  display: flex;
  justify-content: start;
  padding: 1rem; 
  position: fixed;
  top: 24px;
  left: 15%;
  height: 20%;
  border-radius: 15px;
  width: 80%;
  backdrop-filter: ${(props) => (props.glassEffect ? "blur(10px)" : "none")};
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.glassEffect ? "rgba(255, 255, 255, 0.04)" : "transparent"};

    & h2 {
        color: white;
        font-weight: bold;
        font-size: 2rem;
    }
    & button {
      border: none;
      outline: none;
      background-color: white;
      color: black;
      font-weight: bold;
      font-size: 1rem;
      width: 8rem;
      cursor: pointer;
    }
`;
