import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { CaseOverview } from "@/models/case";
import Title from "./title";
import Button from "@/components/Button";
import { PlayfairDisplayFont } from "@/styles/font";
import { fontColor, primaryColor } from "@/styles/theme";
import Content from "./textContent";

interface Props {
  overview: CaseOverview;
}

const CaseOverview: React.FC<Props> = ({ overview }) => {
  return (
    <Container>
      <Title text="Overview" index={1} />

      <Item title={"Client"} content={overview.client} />

      {overview.awards.length > 0 && (
        <Item
          title={"Awards"}
          content={overview.awards.map((v) => `${v}\n`).join("")}
        />
      )}

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
    </Container>
  );
};

interface ItemProps {
  title: string;
  content: string;
}

const Item: React.FC<ItemProps> = ({ title, content }) => (
  <Div>
    <p>{title}</p>

    <h4 className={PlayfairDisplayFont.className}>{content}</h4>
  </Div>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  margin-bottom: 2.5rem;

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

const Tags = styled.div`
  display: flex;
  margin-bottom: 1.75rem;
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
