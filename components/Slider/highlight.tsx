import { device } from "@/styles/media";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  pos: {
    x: number;
    y: number;
  };
  show: boolean;
  image: string;
  id: string;
}

const SliderHighlight: React.FC<Props> = ({ pos, show, image, id }) => {
  return (
    <Container
      href={`/cases/${id}`}
      x={pos.x}
      y={pos.y}
      className={show ? "show" : "hide"}
      image={image}
    ></Container>
  );
};

const Container = styled(Link)<{ x: number; y: number; image: string }>`
  display: none;

  ${device.laptop} {
    display: block;
    position: absolute;
    /* top: ${(props) => props.y || 0}px; */
    /* Header height */
    top: 98px;
    left: ${(props) => props.x || 0}px;
    width: 50%;
    height: 50%;
    /* background-color: blue; */
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateX(-50%);
    border-radius: 16px;

    &.show {
      opacity: 1;
      pointer-events: inherit;
      /* transition: 0.5s; */

      transition-property: opacity;
      transition-duration: 0.3s;
    }

    &.hide {
      pointer-events: none;
      opacity: 0;
    }
  }
`;

export default SliderHighlight;
