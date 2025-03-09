import styled from "styled-components";
import { ControlContainer, ControlContainerStyle } from "../../../components/ControlContainer";
import ControlPlay from '../../../resources/images/control.play.svg';
import ControlPause from '../../../resources/images/control.pause.svg';
import { useState } from "react";

const _Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const _ControlButton = styled(ControlContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 58px;
  height: 58px;
  border-radius: 50%;
`;

const _IconContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;


`;

const _Icon = styled.img`
  position: absolute;

  width: 32px;
  height: 32px;

  top: calc(50% - 32px/2);
  left: calc(50% - 32px/2);

  transform: scale(1);
  opacity: 1;

  transition: transform 0.2s, opacity 0.2s;


  &[data-active="false"] {
    transform: scale(0);
    opacity: 0;
  }
`;

export const ControlSection = () => {
  const [isPlaying, setPlaying] = useState<boolean>(false);

  const toggle = () => {
    setPlaying(!isPlaying);
  }

  return (
    <_Section>
      <_ControlButton containerStyle={ControlContainerStyle.accentStyle} onClick={() => toggle()}>
        <_IconContainer>
          <_Icon src={ControlPlay} alt="play" data-active={isPlaying}/>
          <_Icon src={ControlPause} alt="pause" data-active={!isPlaying}/>
        </_IconContainer>
      </_ControlButton>
    </_Section>
  )
}