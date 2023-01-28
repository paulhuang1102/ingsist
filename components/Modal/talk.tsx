import React, { ChangeEvent, useCallback, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { homeItems } from "@/data/home";
import Button from "@/components/Button";
import { PlayfairDisplayFont } from "@/styles/font";
import CircleButton from "../Button/circleButton";
import { primaryColor } from "@/styles/theme";
import { device } from "@/styles/media";

interface Props {
  close: Function;
}

const boudgets = [
  "< NT $ 50W",
  "NT $ 50W ~ 100W",
  "NT $ 100W ~ 200W",
  "NT $ 200W +",
];

function mailTo(email: string, subject: string, body: string) {
  // window.location.href = `mailto:zedozon@gmail.com?subject=${subject}&body=${body}`;
  window.open(`mailto:${email}?subject=${subject}&body=${body}`);
}

const TalkModal: React.FC<Props> = ({ close }) => {
  const [name, setName] = useState<string>("");
  const [wc, setWc] = useState<string>("");
  const [discuss, setDiscuss] = useState<string>("");
  const [boudget, setBouget] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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
    } else if (dataset.value === "wc") {
      setWc(value);
    } else if (dataset.value === "email") {
      setEmail(value);
    }
  };

  const submit = useCallback(() => {
    mailTo(
      "support@ingsist.com",
      "Hello, ingsist creative",
      `Hi, my name is ${name} from ${wc} %0D%0AI'd like to discuss ${discuss} project idea and design consult %0D%0AA boudget for this project is ${boudget} %0D%0AContact me back at ${email}`
    );
  }, [discuss, email, name, wc, boudget]);

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
            {boudgets.map((b) => (
              <Button
                key={b}
                text={b}
                onClick={() => handleBouget(b)}
                selected={boudget === b}
                size={0.875}
              />
            ))}
          </div>
        </Select>

        <Back>
          <p>Contact me back at</p>

          <div>
            <input
              placeholder="YOUR EMAIL"
              value={email}
              onChange={handleInput}
              data-value="email"
            />
            <CircleButton
              text="SUBMIT"
              onClick={submit}
              bgColor={primaryColor}
            />
          </div>
        </Back>
      </div>
    </Container>
  );
};

const Client = styled.div`
  margin-bottom: 2.75rem;
  border-bottom: 1px solid #f2f2f2;

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
  border-bottom: 1px solid #f2f2f2;

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

  ${device.laptop} {
    > div {
      padding-right: 40%;
    }

    .mb {
      margin-bottom: 0;
    }

    button {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0 0 64px 0;


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

  ${device.laptop} {
    border-radius: 0 0 112px 0;
    padding: 2rem;

    > div {
      flex-direction: row;
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 2rem;
      margin-bottom: 3rem;

      > div {
        flex: 1;
        border-bottom: 0;

        &:nth-child(even) {
          margin-left: 80px;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            height: 100%;
            border-left: 1px solid #f2f2f2;
            left: -40px;
          }
        }
      }

      &:last-child {
        border: 0;
      }
    }
  }
`;

const Title = styled.div`
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #bdbdbd;

  ${device.laptop} {
    padding-bottom: 2.5rem;

    p {
      font-size: 2rem;
    }

    justify-content: space-between;
  }
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
    margin-right: 1rem;
    margin-top: 0.5rem;
  }

  > div {
    display: flex;
    align-items: flex-start;
  }

  ${device.laptop} {
    margin-top: 0;

    > div {
      flex-direction: column;
    }

    input {
      width: 100%;
      margin-bottom: 4rem;
    }

    button {
      align-self: flex-end;
    }
  }
`;

export default TalkModal;
