import styled from "styled-components";

export const ContainerFormLogin = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  width: 60%;
  height: auto;
  padding: 50px 0px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

export const ContainerInputsForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 8%;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 60%;
  & label {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
  & input {
    padding: 8px;
    color: white;
    outline: none;
    border: 1px solid white; /* Adiciona uma borda fina branca */
    background-color: transparent;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
    border-radius: 6px;
  }
`;

export const ContainerInfoLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: start;
  align-items: center;
  width: 100%;

  & img {
    width: 20rem;
  }
  & h1 {
    font-size: 35px;
    color: white;
    font-weight: bold;
  }
  & p {
    font-size: 14px;
    color: white;
    text-align: center;
  }
`;

export const ButtonLogin = styled.button`
    font-size: 16px;
    width: 60%;
    padding: 7px 0px;
    margin-top: 24px;
    border-radius: 6px;
    outline: none;
    border: none;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: #F662B2;
        color: white;
    }
`
