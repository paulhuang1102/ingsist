import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const Tag: React.FC<Props> = ({ text }) => {
  return <Holder>{text}</Holder>;
};

const Holder = styled.div`
  border: 1px solid #4F4F4F;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  line-height: 1rem;
  color: #4F4F4F;
`;

export default Tag;
