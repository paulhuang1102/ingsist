import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { CaseBlock, CaseContentType } from "@/models/case";
import Title from "./title";
import TextContent from "./textContent";
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
        }
      })}
    </Container>
  );
};

const Container = styled.div``;

const ImageHolder = styled.div`
  display: flex;

  flex-direction: column;
`;
export default Paragraph;
