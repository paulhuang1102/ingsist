import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { CaseOverview } from "@/models/case";
import Title from "./title";
import Button from "@/components/Button";
import { primaryColor } from "@/styles/theme";
import Content from "./textContent";
import Item from "./item";
import { device } from "@/styles/media";

interface Props {
  overview: CaseOverview;
}

const CaseOverview: React.FC<Props> = ({ overview }) => {
  return (
    <Container className="paragraph-item-1">
      <Title text="Overview" index={1} />

      <div>
        <Item title={"Client"} content={overview.client} />

        {overview.awards.length > 0 && (
          <Item
            title={"Awards"}
            content={overview.awards.map((v) => `${v}\n`).join("")}
          />
        )}
      </div>

      <div>
        <Tags>
          {overview.tags.map((tag) => (
            <Button key={tag} text={tag} onClick={() => {}} />
          ))}
        </Tags>

        <Content text={overview.description} />

        {overview.website && (
          <A href={overview.website} target="_blank" rel="noreferrer">
            SEE LIVE WEBSITE
            <Image
              src="/assets/images/arrow_right.svg"
              width={24}
              height={24}
              alt="Arrow right"
            />
          </A>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 8.5rem;

    > div {
      > *:first-child {
        margin-top: 0;
      }
    }

    > * {
      flex: 1;

      &:last-child {
        flex: 2;
      }
    }
  }
`;

const Tags = styled.div`
  display: flex;
  margin: 1.75rem 0;
  flex-wrap: wrap;

  > * {
    margin-right: 1rem;
  }
`;

const A = styled.a`
  color: ${primaryColor};
  align-self: end;
  font-size: 1.5rem;
  border-bottom: 1px solid ${primaryColor};
  display: flex;
  align-items: center;
  margin-top: 1rem;

  img {
    margin-left: 1rem;
    filter: invert(53%) sepia(74%) saturate(486%) hue-rotate(83deg)
      brightness(92%) contrast(88%);
  }
`;

export default CaseOverview;
