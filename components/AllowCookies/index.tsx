import React, { useMemo, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import AllowCookies from "@/utils/allowCookies";
import Button from "@/components/Button";

const CookiesToast: React.FC = () => {
  const allowCookies = useMemo(() => new AllowCookies(), []);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const allow = allowCookies.getAllow();

    setShow(allow === null);
  }, [allowCookies]);

  const reject = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLButtonElement;

    if (target.tagName !== 'BUTTON') {
      allowCookies.reject();
      setShow(false);
    }

  }, [allowCookies]);

  const allow = useCallback(() => {
    allowCookies.allow();
    setShow(false);
  }, [allowCookies]);

  return (
    <Container className={show ? "" : "hide"}>
      <a onClick={reject}>
        <p>This WEBSITE USES <b>COOKIES</b></p>


        <Button
          text="ACCEPT"
          onClick={allow}
          size={1}
          color="#FFF"
          backgroundColor="#262626"
        />
      </a>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 36px;
  padding: 0.75rem 1rem;

  a {
    display: flex;
    align-items: center;
  }

  p {
    color: #fff;
    font-size: 0.875rem;
    white-space: nowrap;
    margin-right: 1.5rem;
  }

  button {
    border: 0;
  }

  &.hide {
    display: none;
  }
`;

export default CookiesToast;
