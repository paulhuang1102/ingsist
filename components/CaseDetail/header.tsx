import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  year: number;
  cover: string;
}

const CaseDetailHeader: React.FC<Props> = ({ title, year, cover }) => {
  return (
    <Header cover={cover}>
      <h1>{title}</h1>

      <p>{year}</p>
    </Header>
  );
};

const Header = styled.div<{ cover: string }>`
  display: flex;
  color: #fff;
  white-space: break-spaces;
  justify-content: space-between;
  background-image: url(${(props) => props.cover});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0.5rem 1.5rem;
  padding-top: 8rem;

  h1 {
    font-size: 2rem;
    flex: 1;
  }

  p {
    font-size: 0.875rem;
    flex: 1;
    text-align: right;
  }
`;

export default CaseDetailHeader;
