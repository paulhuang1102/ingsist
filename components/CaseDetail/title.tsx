import React from 'react';
import styled from 'styled-components';
import { fontColor, primaryColor } from '@/styles/theme';
import { PlayfairDisplayFont } from '@/styles/font';

interface Props {
  index: number,
  text: string,
}

const Title: React.FC<Props> = ({ index, text }) => {
  return (
    <H className={PlayfairDisplayFont.className}>
      <span>
        {index.toString().padStart(2, '0')}
      </span>

      <div className='line'></div>

      {text}
    </H>
  );
}

const H = styled.h2`
  color: ${primaryColor};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;

  span {
    color: ${fontColor};
  }

  .line {
    width: 55px;
    border-bottom: 1px solid ${fontColor};
    margin: 0 1rem;
  }
`

export default Title;