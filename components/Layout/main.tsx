import { device, size } from '@/styles/media';
import styled from 'styled-components';

const Main = styled.main`
  height: 100vh;
  max-height: -webkit-fill-available;
  padding: 120px 1.5rem 0 1.5rem;

  ${device.laptopL} {
    max-width: ${size.laptopL};
    margin: 0 auto;
  }
`;

export default Main;