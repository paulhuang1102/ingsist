import React from 'react'
import styled from 'styled-components';
import { PlayfairDisplayFont } from '@/styles/font';
import { fontColor } from '@/styles/theme';

interface Props {
  title: string;
  content: string;
}

const Item: React.FC<Props> = ({ title, content }) => (
  <Div>
    <p>{title}</p>

    <h4 className={PlayfairDisplayFont.className}>{content}</h4>
  </Div>
);

const Div = styled.div`
  margin-top: 2.5rem;

  p {
    color: #828282;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1rem;
    line-height: 1rem;
    color: ${fontColor};
  }
`;

export default Item;