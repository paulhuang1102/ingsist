import React from "react";
import styled from "styled-components";
import { CaseCredit } from "@/models/case";
import Title from "./title";
import Item from "./item";
import { device } from "@/styles/media";

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }

  ${device.laptop} {
    display: flex;
    align-items: flex-start;

    > * {
      &:first-child {
        flex: 1;
      }

      &:last-child {
        flex: 2;
      }
    }

    .grid {
      margin-top: 0;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Credit;
