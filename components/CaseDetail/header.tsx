import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string,
  year: number,
}

const CaseDetailHeader: React.FC<Props> = ({ title, year }) => {
  return (
    <Header>
      <h1>
        {title}
      </h1>

      <p>
        {year}
      </p>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
`

export default CaseDetailHeader;