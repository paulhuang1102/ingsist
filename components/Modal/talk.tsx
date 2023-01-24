import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { homeItems } from "@/data/home";
import Button from "@/components/Button";
import { PlayfairDisplayFont } from "@/styles/font";

interface Props {
  close: Function;
}

const boudget = [
  "< NT $ 50W",
  "NT $ 50W ~ 100W",
  "NT $ 100W ~ 200W",
  "NT $ 200W +",
];

const TalkModal: React.FC<Props> = ({ close }) => {

  const [name, setName] = useState('');
  const [wc, setWc] = useState('');

  const handleTopic = (v: string) => {
    console.log(v);
  };

  const handleBouget = (b: string) => {
    console.log(b);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { dataset, value } = target;

    console.log(dataset, value)
  }
  return (
    <Container className={PlayfairDisplayFont.className}>
      <div>
        <p>Hello, ingsist creative</p>
        <button onClick={() => close()}>
          <Image
            src="/assets/images/close.svg"
            width={32}
            height={32}
            alt="Close"
          />
        </button>
      </div>

      <div>
        <Client>
          <div>
            <p>My name is</p>

            <input placeholder="YOUR NAME" value={name} onChange={handleInput} data-value="name"/>
          </div>

          <div>
            <p>from</p>

            <input placeholder="WEBSITE OR COMPANY NAME" value={wc} onChange={handleInput}/>
          </div>
        </Client>

        <div>
          <p>I’d like to discuss</p>

          <Select>
            {homeItems.map((item) => (
              <Button key={item} text={item} onClick={handleTopic} />
            ))}
          </Select>
          <p>project idea & design consult</p>
        </div>
      </div>

      <div>
        <div>
          <p>A boudget for this project is</p>
          <Select>
            {boudget.map((bouget) => (
              <Button key={bouget} text={bouget} onClick={handleBouget} />
            ))}
          </Select>
        </div>

        <Back>
          <p>Contact me back at</p>

          <input placeholder="YOUR EMAIL"/>
        </Back>
      </div>
    </Container>
  );
};

const Client = styled.div`
  margin-bottom: 5rem;

  > div {
    display: flex;

    > p {
      font-size: 1.25rem;
      margin-right: 1.5rem;
    }

    input {
      flex: 1;
    }
  }
`;

const Select = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

    &:first-child {
      flex-direction: row;
      justify-content: space-between;

      button {
        border: 0;
        background-color: transparent;
      }
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 800;
  }

  input {
    border: 0;
    border-bottom: 1px solid #bdbdbd;
    outline: none;
    padding-bottom: 0.875rem;

    &::placeholder {
      color: #bdbdbd;
    }
  }
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 2.5rem;
  }

  input {
    flex: 1;
  }
`

export default TalkModal;
