import React from 'react';
import styled from 'styled-components';
import { fontColor } from '@/styles/theme';

interface Props {
  color?: string;
  text: string;
  onClick: Function;
}

const Button: React.FC<Props> = ({ color, text, onClick }) => {
  return (
    <Btn onClick={() => onClick()} color={color}>
      {text}
    </Btn>
  )
}

const Btn = styled.button<{ color?: string }>`
  padding: 0.75rem 1.5rem;
  border-radius: 24px;
  border: 1px solid ${fontColor};
  background-color: #FFF;
  cursor: pointer;
`

export default Button;