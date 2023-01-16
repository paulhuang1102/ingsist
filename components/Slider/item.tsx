import React from 'react';
import styled from 'styled-components';

interface Props {
  width: number
  text: string
}

const SliderItem: React.FC<Props> =({
  width,
  text
}) => {
  return (
    <Item style={{ minWidth: width }}>
      {text}
    </Item>
  )
}

const Item = styled.h4`
  display: inline-flex;
  border: 1px solid #FFFFFF;
  border-radius: 32px;
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: 800;
  color: #FFFFFF;
  justify-content: center;

`

export default SliderItem;