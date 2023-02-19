import React from "react";
import styled from "styled-components";
import { device } from "@/styles/media";

interface Props {
  text: string;
  onClick: () => void;
  length?: number;
  bgColor?: string;
}

const CircleButton: React.FC<Props> = ({
  text,
  onClick,
  length = 80,
  bgColor = "#000",
}) => {
  return (
    <Button onClick={onClick} length={length} bgColor={bgColor}>
      {text}
    </Button>
  );
};

const Button = styled.button<{ bgColor: string; length: number }>`
  border: 0;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.length}px;
  width: ${(props) => props.length}px;
  color: #fff;
  white-space: break-spaces;
  font-weight: 600;
  cursor: pointer;

  ${device.tablet} {
    height: ${(props) => props.length * 2}px;
    width: ${(props) => props.length * 2}px;
    white-space: nowrap;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export default CircleButton;
