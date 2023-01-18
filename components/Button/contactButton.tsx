import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { primaryColor } from "@/styles/theme";

interface Props {
  onClick: Function;
}

const ContactButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Btn onClick={() => onClick()}>
      {"LET'S TALK"}
      <Image
        src="/assets/images/arrow_right_top.svg"
        alt="Arrow"
        width={24}
        height={24}
      />
    </Btn>
  );
};

const Btn = styled.button`
  border: 0;
  padding: 1rem 2.5rem;
  border-radius: 32px;
  background-color: ${primaryColor};
  color: #fff;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  
  img {
    margin-left: 1.25rem;
  }
`;

export default ContactButton;
