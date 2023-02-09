import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { fontColor } from "@/styles/theme";
import { device } from "@/styles/media";
interface NavProps {
  link: string;
  title: string;
  index: number;
  toggle: boolean;
  navsCount: number;
  selected: boolean;
  onClick: (i: number) => void;
}

const NavList: React.FC<NavProps> = ({
  link,
  title,
  index,
  toggle,
  navsCount,
  selected,
  onClick,
}) => {
  return (
    <Li
      key={link}
      style={{
        transitionDelay: toggle
          ? `${(navsCount - index - 1) / 10}s`
          : `${(index + 1) / 10}s`,
      }}
    >
      <Link
        href={link}
        className={selected ? "selected" : ""}
        onClick={() => onClick(index)}
      >
        {title}
      </Link>
    </Li>
  );
};

export default React.memo(NavList);

const Li = styled.li`
  min-width: 120px;
  text-align: right;
  margin-bottom: 3rem;

  a {
    transition: 0.3s ease;
    font-size: 2.5rem;
    font-weight: 400;
    position: relative;
    color: #111111;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${fontColor};
      left: 0;
      bottom: -4px;
      transition: 0.7s ease-out;
      opacity: 0;
    }

    &:hover {
      font-weight: 700;
    }

    &.selected {
      font-weight: 700;

      &::after {
        opacity: 1;
      }
    }
  }

  ${device.laptop} {
    margin-bottom: 0;

    a {
      font-size: 1.125rem;
    }
  }
`;
