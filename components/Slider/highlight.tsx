import { device } from "@/styles/media";
import React from "react";
import styled from "styled-components";

interface Props {
  pos: {
    x: number;
    y: number;
  };
  show: boolean;
}

const SliderHighlight: React.FC<Props> = ({ pos, show }) => {
  return (
    <Container
      x={pos.x}
      y={pos.y}
      className={show ? "show" : "hide"}
    ></Container>
  );
};

const Container = styled.div<{ x: number; y: number }>`
  display: none;

  ${device.laptop} {
    display: block;
    position: absolute;
    top: ${(props) => props.y || 0}px;
    left: ${(props) => props.x || 0}px;
    width: 400px;
    height: 200px;
    transition: 1s;
    background-color: blue;
  
    &.show {
      opacity: 1;
      pointer-events: inherit;
    }
  
    &.hide {
      pointer-events: none;
      opacity: 0;
    }
  }
`;

export default SliderHighlight;
