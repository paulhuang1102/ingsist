import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import { device } from '../../styles/media';

const Header: React.FC = () => {
  return (
    <H id="header">
      <Link href={'/'}>
        <Image
          src="/assets/images/logo.svg"
          alt="ingsist"
          width={120}
          height={42}
        />
      </Link>

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
  z-index: 5;

  ${device.laptop} {
    padding: 2rem 5rem 1.125rem 5rem;
    
    &.sticky {
      position: fixed;
      top: 0;
      background-color: #FFF;
      transition: 0.5s;
    }
  }

`;

export default Header;
