import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 50px;
`

export const ContainerLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ContainerRight = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const TitleHeader = styled.h1`
font-size: 24px;
color:#36393f;
margin-bottom: 10px;
`

export const SloganTitle = styled.h4`
font-weight: bold;
font-style: italic;
color:#7a8c9e;
line-height: 1.5em;
letter-spacing: .03em;
text-transform: uppercase;

`

export const ButtonLogin = styled.button`
    background-color: #28a745;
    color: white;
    padding: 6px 12px;
    border: none;
    cursor: pointer;
    font-size: 1em;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #2196f3;
    }
`

