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
      className={show ? "show" : ""}
      image={image}
    ></Container>
  );
};

const Container = styled(Link)<{ x: number; y: number; image: string }>`
  display: none;

  ${device.laptop} {
    display: block;
    position: absolute;
    top: ${(props) => props.y || 0}px;
    /* Header height */
    /* top: 98px; */
    left: ${(props) => props.x || 0}px;
    /* width: 50%; */
    /* height: 50%; */
    /* background-color: blue; */
    width: 0;
    height: 0;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 16px;
    opacity: 0;
    transition: 0.5s;

    &.show {
      opacity: 1;
      pointer-events: inherit;
      transform: translate(-50%, -50%);
      width: 480px;
      height: 384px;
    }

    /* &.hide {
      pointer-events: none;
      opacity: 0;
    } */
  }
`;

export default SliderHighlight;
