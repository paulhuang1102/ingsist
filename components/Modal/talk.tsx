import React, { ChangeEvent, useState, MouseEvent } from "react";
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
  const [name, setName] = useState<string>("");
  const [wc, setWc] = useState<string>("");
  const [discuss, setDiscuss] = useState<string>("");
  const [bouget, setBouget] = useState<string>("");

  const handleTopic = (v: string) => {
    setDiscuss(v);
  };

  const handleBouget = (v: string) => {
    setBouget(v);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { dataset, value } = target;
    if (dataset.value === "name") {
      setName(value);
    } else {
      setWc(value);
    }
  };
  return (
    <Container className={PlayfairDisplayFont.className}>
      <Title>
        <p>Hello, ingsist creative</p>
        <button onClick={() => close()}>
          <Image
            src="/assets/images/close.svg"
            width={32}
            height={32}
            alt="Close"
          />
        </button>
      </Title>

      <div>
        <Client>
          <div>
            <p>My name is</p>

            <input
              placeholder="YOUR NAME"
              value={name}
              onChange={handleInput}
              data-value="name"
            />
          </div>

          <div>
            <p>from</p>

            <input
              placeholder="WEBSITE OR COMPANY NAME"
              value={wc}
              onChange={handleInput}
              data-value="wc"
            />
          </div>
        </Client>

        <Select>
          <p>I’d like to discuss</p>

          <div>
            {homeItems.map((item) => (
              <Button
                key={item}
                text={item}
                onClick={() => handleTopic(item)}
                selected={discuss === item}
                size={0.875}
              />
            ))}
          </div>
          <p className="mb">project idea & design consult</p>
        </Select>
      </div>

      <div>
        <Select>
          <p>A boudget for this project is</p>
          <div>
            {boudget.map((b) => (
              <Button
                key={b}
                text={b}
                onClick={() => handleBouget(b)}
                selected={bouget === b}
                size={0.875}
              />
            ))}
          </div>
        </Select>

        <Back>
          <p>Contact me back at</p>

          <input placeholder="YOUR EMAIL" />
        </Back>
      </div>
    </Container>
  );
};

const Client = styled.div`
  margin-bottom: 2.75rem;
  border-bottom: 1px solid #F2F2F2;

  > div {
    display: flex;
    margin-bottom: 2.25rem;

    > p {
      font-size: 1.25rem;
      margin-right: 22px;
      line-height: 1.25rem;
    }

    input {
      flex: 1;
    }
  }
`;

const Select = styled.div`
  border-bottom: 1px solid #F2F2F2;
  /* padding-bottom: 2.5rem; */

  > div {
    padding: 1rem 0;
  }

  button {
    margin: 0.5rem 0;
    margin-right: 0.5rem;
  }

  .mb {
    margin-bottom: 1.5rem;
  }
`;

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
    font-size: 1rem;
    padding-bottom: 0.875rem;

    &::placeholder {
      color: #bdbdbd;
      font-size: 0.875rem;
    }
  }
`;

const Title = styled.div`
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #bdbdbd;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  p {
    margin-bottom: 2.5rem;
  }

  input {
    flex: 1;
  }
`;

export default TalkModal;
