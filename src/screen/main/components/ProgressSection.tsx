import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { R } from "../../../resources/R";

const _Section = styled.section`
  padding: 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const _ProgressIndicator = styled.div`
  position: relative;

  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;

  max-width: 200px;

  transition: max-width 0.2s;

  @media (min-height: 450px) {
    max-width: 220px;
  }

  @media (max-height: 400px) {
    max-width: 180px;
  }
`;

const _ProgressImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  z-index: -1;

  object-fit: contain;
`;

export const ProgressSection = () => {
  const percentage = 66;

  return (
    <_Section>
      <_ProgressIndicator>
        <CircularProgressbar 
          value={percentage}
          styles={{
            path: {
              stroke: R.color.accent
            }
          }}
          strokeWidth={5}  
        />;

        <_ProgressImage src={"./avators/pomo/focus.png"}/>

      </_ProgressIndicator>
    </_Section>
  )
}