import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { CaseBlock, CaseContentType } from "@/models/case";
import Title from "./title";
import TextContent from "./textContent";
import { fontColor } from "@/styles/theme";
import { device } from "@/styles/media";
interface Props {
  index: number;
  block: CaseBlock;
}

const Paragraph: React.FC<Props> = ({ index, block }) => {
  return (
    <Container className={`paragraph-item-${index}`}>
      <Title index={index} text={block.title} />

      {block.content.map((c, i) => {
        if (c.type === CaseContentType.text) {
          return (
            <div key={i}>
              <TextContent text={c.data as string} />
            </div>
          );
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

  ${device.laptop} {
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    margin-bottom: 0;
    /* margin-bottom: 7.5rem; */

    > div {
      flex: auto;
      width: 100%;

      > p {
        margin-top: 0;
        width: 50%;
        margin-left: auto;
      }
    }
  }
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  img {
    margin-bottom: 1rem;
  }

  ${device.laptop} {
    flex-direction: row;
    margin-bottom: 7.5rem;

    > * {
      flex: 1;
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }
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

  ${device.laptop} {
    margin-top: 0;
  }
`;
export default Paragraph;
