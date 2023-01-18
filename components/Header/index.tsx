import styled from "styled-components";
import Image from "next/image";

import Navbar from "./navbar";
import { device } from '../../styles/media';

const Header: React.FC = () => {
  return (
    <H>
      <div>
        <Image
          src="/assets/images/logo.svg"
          alt="ingsist"
          width={120}
          height={42}
        />
      </div>

      <div>
        <Navbar />
      </div>
    </H>
  );
};

const H = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1.5rem;
  border-bottom: 1px solid #D9D9D9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  ${device.laptop} {
    padding: 2rem 5rem 1.125rem 5rem;
  }
`;

export default Header;
