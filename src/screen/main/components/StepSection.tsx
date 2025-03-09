import styled from "styled-components";
import { R } from "../../../resources/R";

const _Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 8px;

  padding: 4px 0;

  justify-content: center;
`;

const _Tip = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? R.color.accent : R.color.controlBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StepSection = () => {
  return (
    <_Section>
      <_Tip active={true}/>
      <_Tip active={true}/>
      <_Tip active={false}/>
      <_Tip active={false}/>
    </_Section>
  )
}