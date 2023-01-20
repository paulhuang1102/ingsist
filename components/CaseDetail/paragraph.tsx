import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { CaseBlock, CaseContentType } from "@/models/case";
import Title from "./title";
import TextContent from "./textContent";
import { fontColor } from "@/styles/theme";
interface Props {
  index: number;
  block: CaseBlock;
}

const Paragraph: React.FC<Props> = ({ index, block }) => {
  return (
    <Container>
      <Title index={index} text={block.title} />

      {block.content.map((c, i) => {
        if (c.type === CaseContentType.text) {
          return <TextContent key={i} text={c.data as string} />;
        } else if (c.type === CaseContentType.image) {
          return (
            <ImageHolder key={i}>
              {typeof c.data === "string" ? (
                <Image
                  key={index}
                  src={c.data}
                  alt={`${block.title} image`}
                  width={600}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              ) : (
                (c.data as string[]).map((s, index) => (
                  <Image
                    key={index}
                    src={s}
                    alt={`${block.title} image ${index + 1}`}
                    width={600}
                    height={600}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                ))
              )}
            </ImageHolder>
          );
        } else {
          return (
            <Subtitle key={i}>
              <div className="line"></div>
              {c.data}
            </Subtitle>
          );
        }
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 5rem;
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  img {
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 30px;

  .line {
    width: 55px;
    border-bottom: 1px solid ${fontColor};
    margin-right: 0.5rem;
  }
`;
export default Paragraph;
