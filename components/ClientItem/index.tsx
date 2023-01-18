import { ClientMeta } from "@/models/client";
import { device } from "@/styles/media";
import { fontColor } from "@/styles/theme";
import React from "react";
import styled from "styled-components";

interface Props {
  client: ClientMeta;
}
const ClientItem: React.FC<Props> = ({ client }) => {
  return (
    <Item>
      <p>{client.name}</p>

      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={client.logoUrl} alt={client.name} />
      </div>
    </Item>
  );
};

const Item = styled.li`
  border-left: 1px solid ${fontColor};
  border-bottom: 1px solid ${fontColor};
  color: ${fontColor};
  padding: 0.5rem 1.125rem;

  p {
    font-size: 0.875rem;
    margin-bottom: 21px;
  }

  div {
    > img {
      width: 100%;
    }
  }

  ${device.laptop} {
   
  }
`;

export default ClientItem;
