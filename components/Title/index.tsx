import { PlayfairDisplayFont } from '@/styles/font';
import { device } from '@/styles/media';
import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string
  count?: number
}

const Title: React.FC<Props> = ({ text, count }) => {
  return (
    <Container>
      <h1 className={PlayfairDisplayFont.className}>
        {text}
      </h1>

      <span>
        {count ?? ''}
      </span>
    </Container>
    
  )
}


const Container = styled.div`
  display: flex;
  align-items: flex-end;
  color: #BDBDBD;
  border-bottom: 0.5px solid #333333;
  padding-bottom: 1rem;

  h1 {
    text-overflow: ellipsis;
    font-size: 2.5rem;
    white-space: break-spaces;
  }

  span {
    font-size: 1.25rem;
    margin-bottom: 4px;
    margin-left: 1.5rem;
  }

  ${device.mobileL} {
    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }

  ${device.tablet} {
    h1 {
      font-size: 4rem;
      line-height: 4.5rem;
    }
  }
`

export default Title;