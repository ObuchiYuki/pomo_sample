import styled from "styled-components";
import { Header } from "./components/Header"
import { TimeSection } from "./components/TimeSection"
import { ProgressSection } from "./components/ProgressSection";
import { StepSection } from "./components/StepSection";
import { ControlSection } from "./components/ControlSection";

const _Main = styled.main`
  height: 100%;
  overflow: hidden;

  position: relative;
`;

const _HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const _Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px;
  padding-top: 0;
  height: 100%;

  z-index: 1;

  align-items: center;
  justify-content: center;

  transition: gap 0.2s;

  transform: translateY(8px);

  @media (min-height: 450px) {
    gap: 8px;
  }

  @media (min-height: 500px) {
    gap: 16px;
  }
`;

export const MainScreen = () => {
  return (
    <_Main>
      <_HeaderContainer>
        <Header/>
      </_HeaderContainer>
      <_Body>
        <TimeSection/>
        <StepSection/>
        <ProgressSection/>
        <ControlSection/>
      </_Body>
    </_Main>
  )
}