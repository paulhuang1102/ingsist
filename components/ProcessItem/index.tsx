import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Process } from "@/models/process";
import { fontColor } from "@/styles/theme";
import { device } from "@/styles/media";
import Lottie from "lottie-react";

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
        {/* <Lottie animationData={'https://raw.githubusercontent.com/Gamote/lottie-react/main/src/__tests__/assets/groovyWalk.json'} loop/> */}
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

      &::after {
        left: -1.5rem;
      }
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
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 4rem;
      right: -1.5rem;
      border-bottom: 0.5px solid #333;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  p {
    line-height: 1.5rem;
    margin: 1.5rem 0;
  }

  div {
    width: 90%;
  }

  ${device.laptop} {
    margin-bottom: 8rem;

    h4 {
      font-size: 2.25rem;
    }

    p {
      line-height: 2rem;
    }

    div {
      width: 80%;
    }
  }

  ${device.laptopL} {
    div {
      width: 60%;
    }

    p {
      padding: 0 3.5rem;
      margin-bottom: 3rem;
    }
  }
`;

export default ProcessItem;
