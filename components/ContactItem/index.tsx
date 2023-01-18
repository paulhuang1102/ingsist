import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Social } from "@/models/contact";

interface Props {
  data: Social;
}

const ContactItem: React.FC<Props> = ({ data }) => {
  return (
    <a href={data.url} target="_blank" rel="noreferrer">
      <Item>
        <div className="circle">
          <Image
            src={`/assets/images/${data.icon}`}
            width={24}
            height={24}
            alt={data.name}
          />
        </div>

        <div>
          <p>{data.name}</p>

          <Image
            src="/assets/images/arrow_right.svg"
            width={24}
            height={24}
            alt="Arrow right"
          />
        </div>
      </Item>
    </a>
  );
};

const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid #333;
  padding: 2rem 0;
  cursor: pointer;

  .circle {
    background-color: #333;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    justify-content: center;
    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
  }
`;

export default ContactItem;
