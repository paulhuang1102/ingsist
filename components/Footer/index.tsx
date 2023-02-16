import React, { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { device } from "@/styles/media";
import { PlayfairDisplayFont } from "@/styles/font";

interface Props {
  showBack?: boolean;
}

const Footer: React.FC<Props> = ({ showBack = false }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    console.log(window.history);
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace("/cases");
    }
  }, [router]);

  return (
    <Container>
      <div>
        {showBack && (
          <a onClick={handleBack} className={PlayfairDisplayFont.className}>
            <Image
              src="/assets/images/arrow_left.svg"
              width={24}
              height={24}
              alt="Back"
            />
            Back to Case
          </a>
        )}
      </div>
      <p>© 2022 ingsist creative — Product Design Agency</p>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 0.75rem 0;

  p {
    font-size: 0.875rem;
    color: #828282;
  }

  a {
    display: none;
  }

  ${device.laptop} {
    justify-content: space-between;
    padding: 1.75rem 5rem;

    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-weight: 800;
      font-size: 1.5rem;

      img {
        margin-right: 1rem;
      }
    }
  }
`;

export default Footer;
