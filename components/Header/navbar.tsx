import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import NavList from "./navList";
import { disableBodyScroll, enableBodyScroll } from "../../utils/ui";
import { device } from "../../styles/media";
import { fontColor } from "@/styles/theme";
import useNav from "../../hooks/useNav";

export type NavItem = {
  title: string;
  link: string;
};

const navs: NavItem[] = [
  {
    title: "cases",
    link: "/cases",
  },
  {
    title: "services",
    link: "/services",
  },
  {
    title: "process",
    link: "/process",
  },
  {
    title: "contact",
    link: "/contact",
  },
];

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedIndex, setSelectedIndex] = useNav(navs.map((n) => n.link));

  const body = useRef<HTMLBodyElement>();

  useEffect(() => {
    const el = document.querySelector("body") as HTMLBodyElement;
    body.current = el;
  });
  const toggleMenu = () => {
    if (toggle) {
      enableBodyScroll();
    } else {
      disableBodyScroll();
    }
    setToggle(!toggle);
  };

  const clickNavList = (v: number) => {
    setSelectedIndex(v);
  };

  return (
    <NavField className={toggle ? "active" : ""}>
      <button className="ham" onClick={toggleMenu}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </button>

      <Nav>
        <ul>
          {navs.map((item, i) => {
            return (
              <NavList
                key={item.link}
                title={item.title}
                link={item.link}
                index={i}
                navsCount={navs.length}
                toggle={toggle}
                selected={i === selectedIndex}
                onClick={(v) => clickNavList(v)}
              />
            );
          })}
        </ul>
      </Nav>
    </NavField>
  );
};

export default Navbar;

const NavField = styled.div`
  &.active nav {
    bottom: 0;
  }

  &.active .ham span {
    &:nth-child(1),
    &:nth-child(6) {
      width: 18px;
      transform: rotate(45deg);
    }

    &:nth-child(2),
    &:nth-child(5) {
      width: 18px;
      transform: rotate(-45deg);
    }

    &:nth-child(1) {
      left: 0;
      top: 4px;
    }

    &:nth-child(2) {
      left: 50%;
      top: 4px;
    }

    &:nth-child(5) {
      left: 0;
      top: 18.5px;
    }

    &:nth-child(6) {
      left: 50%;
      top: 18.5px;
    }

    &:nth-child(3) {
      opacity: 0;
      left: -50%;
    }

    &:nth-child(4) {
      opacity: 0;
      left: 100%;
    }
  }

  > button.ham {
    background: transparent;
    border: 0;
    display: block;
    height: 26px;
    width: 26px;
    position: relative;

    span {
      display: block;
      width: 50%;
      height: 1px;
      background-color: ${fontColor};
      transition: all 0.6s ease-in-out;
      position: absolute;

      &:nth-child(even) {
        left: 50%;
        border-radius: 0 2px 2px 0;
      }

      &:nth-child(odd) {
        left: 0;
        border-radius: 2px 0 0 2px;
      }

      &:nth-child(1),
      &:nth-child(2) {
        top: 0;
      }

      &:nth-child(3),
      &:nth-child(4) {
        top: 12.5px;
      }

      &:nth-child(5),
      &:nth-child(6) {
        top: 25px;
      }
    }
  }

  ${device.laptop} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    > button.ham {
      display: none;
    }

    &.active {
      nav {
        li {
          pointer-events: initial;
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 100vh;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  overflow: hidden;
  overscroll-behavior: contain;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  transition: 0.3s ease-out;

  ${device.laptop} {
    position: relative;
    top: auto;
    bottom: auto;
    overflow: initial;
    background-color: transparent;

    ul {
      flex-direction: row;
      margin: 0;
      justify-content: flex-end;

      li {
      }
    }
  }
`;
