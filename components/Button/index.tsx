import React from 'react';
import styled from 'styled-components';

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
  /* background-color:  */
`

export default Button;