import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Process } from "@/models/process";
import { fontColor } from "@/styles/theme";

interface Props {
  process: Process;
}

const ProcessItem: React.FC<Props> = ({ process }) => {
  return (
    <Item>
      <h4>{process.title}</h4>

      <p>{process.description}</p>

      <div>
        <Image
          src={`/assets/images/${process.img}`}
          alt={process.title}
          width={461}
          height={381}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${fontColor};
  margin-bottom: 5rem;

  &:nth-child(even) {
    h4 {
      text-align: left;
    }
  }

  h4 {
    width: 100%;
    padding: 0 3.5rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    white-space: break-spaces;
    text-align: right;
  }

  p {
    line-height: 1.5rem;
    margin: 1.5rem 0;
  }
`;

export default ProcessItem;
