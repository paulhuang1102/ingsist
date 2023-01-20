import React from "react";
import styled from "styled-components";
import { CaseCredit } from "@/models/case";
import Title from "./title";
import Item from "./item";

interface Props {
  index: number;
  credit: CaseCredit;
}

const Credit: React.FC<Props> = ({ index, credit }) => {
  return (
    <Container>
      <Title index={index} text="Credits" />

      <div className="grid">
        {credit.members.map((m, i) => (
          <Item key={i} title={m.title} content={m.name} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }
`;

export default Credit;
