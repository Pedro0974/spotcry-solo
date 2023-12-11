import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { ContainerPlayer } from "./Style";
import styled from "styled-components";

const ProgressBar = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const ControlsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ControlButton = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
`;

const PlayerMusic = ({ music, listMusics }) => {
  const [isGlassEffect, setIsGlassEffect] = useState(true);

  return (
    <ContainerPlayer glassEffect={isGlassEffect}>
      <ProgressBar type="range" min="0" max="100" value="80" />
      <ControlsContainer>
        {/* <ControlButton icon={faStepBackward} />
        <ControlButton icon={faPlay} />
        <ControlButton icon={faPause} />
        <ControlButton icon={faStepForward} /> */}
      </ControlsContainer>
    </ContainerPlayer>
  );
};

export default PlayerMusic;
