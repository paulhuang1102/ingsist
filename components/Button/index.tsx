import React from 'react';
import styled from 'styled-components';
import { fontColor } from '@/styles/theme';

interface Props {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected?: boolean;
  color?: string;
  backgroundColor?: string;
  size?: number;
}

const Button: React.FC<Props> = ({ text, onClick, backgroundColor, color, selected, size = 1 }) => {
  let _backgroundColor = backgroundColor || '#FFF';
  let _color = color || fontColor;

  if (selected) {
    _backgroundColor = fontColor;
    _color = '#FFF';
  }

  return (
    <Btn onClick={onClick} color={_color} backgroundColor={_backgroundColor} size={size}>
      {text}
    </Btn>
  )
}

const Btn = styled.button<{ color?: string, backgroundColor?: string, size: number }>`
  padding: ${props => `${props.size * 0.75}rem ${props.size * 1.5}rem`};
  border-radius: 24px;
  border: 1px solid ${fontColor};
  background-color: ${props => props.backgroundColor || '#FFF'};
  cursor: pointer;
  color: ${props => props.color || fontColor}
`

export default Button;