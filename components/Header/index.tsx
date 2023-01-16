import styled from "styled-components";
import Image from "next/image";

import Navbar from "./navbar";

const Header: React.FC = () => {
  return (
    <H>
      <h1>
        <Image
          src="/assets/images/logo.svg"
          alt="ingsist"
          width={120}
          height={42}
        />
      </h1>

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

  h1 {
    display: flex;
  }
`;

export default Header;
