import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { PlayfairDisplayFont } from "@/styles/font";
import { device } from "@/styles/media";
import Tag from "../Tag";
import Link from "next/link";

interface Props {
  text: string;
  year: number;
  expandable?: boolean;
  tags?: string[];
  img?: string;
}

const List: React.FC<Props> = ({
  text,
  year,
  expandable = false,
  tags,
  img,
}) => {
  return (
    <L>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>{text}</h4>
          <span className={PlayfairDisplayFont.className}>{year}</span>
        </div>

        {expandable && (
          <TagContainer className="hover">
            {tags?.map((v) => (
              <Tag key={v} text={v} />
            ))}

            <Link href="/" className={PlayfairDisplayFont.className}>
              See More
              <Image
                src="/assets/images/arrow_right_light.svg"
                width={20}
                height={20}
                alt="Arrow right"
              />
            </Link>
          </TagContainer>
        )}
      </div>

      <RightContainer>
        {expandable && (
          <div className="hover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={text} />
          </div>
        )}

        <Image
          src="/assets/images/arrow_right.svg"
          width={24}
          height={24}
          alt="Arrow right"
          className="hover-hidden"
        />
      </RightContainer>
    </L>
  );
};

const L = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #333333;
  color: #4f4f4f;
  cursor: pointer;
  padding-top: 1rem;
  padding-bottom: 0.5rem;

  > div {
    display: flex;

    &:first-child {
      flex-direction: column;
    }
  }

  h4 {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 600;
    font-size: 0.875rem;
    margin-left: 10px;
  }

  .hover {
    display: none;
  }

  ${device.laptop} {
    .hover {
      display: flex;
      overflow: hidden;
      max-height: 0;
      transition: 0.5s;
    }

    &:hover {
      .hover {
        /* For expand, Set any number greater than max height in element */
        max-height: 300px;
        transition-delay: 0.2s;
        transition: 1s;
      }

      .hover-hidden {
        display: none;
      }
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 1rem;
  }

  a {
    display: flex;
    align-items: center;

    img {
      margin-left: 0.25rem;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;

  .hover > img {
    width: 320px;
    height: 180px;
    object-fit: cover;
  }
`;

export default List;
