import styled from "styled-components";

const _Section = styled.section`
  text-align: center;
  font-size: 32px;

  transition: font-size 0.2s;

  @media (max-height: 450px) {
    font-size: 27px;
  }
`;

export const TimeSection = () => {
  return (
    <_Section>
      <h1>24:00</h1>
    </_Section>
  )
}
