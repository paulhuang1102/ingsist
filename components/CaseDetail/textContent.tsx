import React from 'react';
import styled from "styled-components";

interface Props {
  text: string,
}

const Content: React.FC<Props> =({ text }) => (
  <P>
    {text}
  </P>
)

const  P = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  white-space: break-spaces;
  margin-top: 4rem;
`;

export default Content;