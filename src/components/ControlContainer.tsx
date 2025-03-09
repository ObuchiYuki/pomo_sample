import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { R } from "../resources/R";

export type ControlContainerStyle = {
  color: string;

  defaultAlpha: number; 
  hoverAlpha: number; 
  springUpAlpha: number; 
  stayAlpha: number; 
  borderAlpha: number;
}

export const ControlContainerStyle = {
  defaultStyle: {
    color: "rgba(0, 0, 0, 0.1)",
    defaultAlpha: 0,
    hoverAlpha: 0.075,
    springUpAlpha: 0.15,
    stayAlpha: 0.075,
    borderAlpha: 0.075
  },
  accentStyle: {
    color: R.color.accent,
    defaultAlpha: 0.6,
    hoverAlpha: 0.75,
    springUpAlpha: 0.8,
    stayAlpha: 0.75,
    borderAlpha: 1
  }
}

const _ControlContainer = styled.div<{ $style: ControlContainerStyle }>`
  border: 1px solid ${ props => rgba(props.$style.color, 0) };
  background: ${ props => rgba(props.$style.color, props.$style.defaultAlpha) };
  box-sizing: border-box;
  user-select: none;

  &:hover {
    background: ${ props => rgba(props.$style.color, props.$style.hoverAlpha) };
  }

  &[data-highlighted-phase="spring-up"] {
    border: 1px solid ${ props => rgba(props.$style.color, props.$style.borderAlpha) };
    background: ${ props => rgba(props.$style.color, props.$style.springUpAlpha) };

    transition: background-color 0.3s, border-color 0.3s;
  }

  &[data-highlighted-phase="stay"] {
    border: 1px solid ${ props => rgba(props.$style.color, props.$style.borderAlpha) };
    background: ${ props => rgba(props.$style.color, props.$style.stayAlpha) };
    
    transition: background-color 0.3s, border-color 0.3s;
  }

  transition: background-color 0.4s, border-color 0.4s;
`;

export const ControlContainer = ({ 
  children,
  containerStyle = ControlContainerStyle.defaultStyle,
  ...props
}: { 
  containerStyle?: ControlContainerStyle,
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  type HighlightedPhase = "spring-up"|"stay";
  const [highlightedPhase, setHighlightedPhase] = useState<HighlightedPhase|undefined>(undefined);
  const timeoutsRef = useRef<any[]>([]); 
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
  }, []);


  const onClickHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    props.onClick?.call(undefined, event);
    clearAllTimeouts();
    setHighlightedPhase("spring-up");
    const ref = setTimeout(() => {
      setHighlightedPhase("stay");
      const ref = setTimeout(() => {
        setHighlightedPhase(undefined);
      }, 300);
      timeoutsRef.current.push(ref);
    }, 100);
    timeoutsRef.current.push(ref);
  }, [props.onClick, clearAllTimeouts]);

  return (
    <_ControlContainer {...props} $style={containerStyle} onClick={onClickHandler} data-highlighted-phase={highlightedPhase}>
      {children}
    </_ControlContainer>
  );
}