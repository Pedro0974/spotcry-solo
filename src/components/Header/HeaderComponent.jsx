import React from "react";
import {
  ContainerHeader,
  ContainerLeft,
  ContainerRight,
  TitleHeader,
  SloganTitle,
  ButtonLogin,
  ImageHeader
} from "./Style";

export const HeaderComponent = () => {
  return (
    <ContainerHeader>
      <ContainerLeft>
        <TitleHeader>
          Create, Discover, Experience The World Of Music Here
        </TitleHeader>
        <SloganTitle>
          Log in and have fun listening to your favorite music
        </SloganTitle>
        <ButtonLogin>Login</ButtonLogin>
      </ContainerLeft>

      <ContainerRight>
        <ImageHeader />
      </ContainerRight>
    </ContainerHeader>
  );
};
