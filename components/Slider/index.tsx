import React, { useCallback, useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import useAnimationFrame from "@/hooks/useAnimationFrame";
import { SizeContext } from "@/hooks/useSize";

interface Props {
  initialOffsetX: number;
  contentWidth: number;
  children?: React.ReactNode;
  mouseCallback?: (e: MouseEvent) => void;
  hideCallback?: () => void;
}

const SliderContainer: React.FC<Props> = ({
  initialOffsetX,
  contentWidth,
  children,
  mouseCallback = () => {},
  hideCallback = () => {},
}) => {
  const { innerWidth } = useContext(SizeContext);

  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);
  const refScrollX = useRef<number>(initialOffsetX);
  const enabled = innerWidth < contentWidth;
  const sliderableRef = useRef<boolean>(true);

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;

      if (elContainer && elContent && sliderableRef.current) {
        refScrollX.current += 0.75;
        elContainer.scrollLeft = refScrollX.current;

        if (refScrollX.current >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  const handleMouseOver = useCallback(
    (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.classList.contains("slider-tag")) {
        sliderableRef.current = false;
        mouseCallback(e);
      } else if (target.classList.contains("show")) {
        return;
      } else {
        sliderableRef.current = true;
        hideCallback();
      }
    },
    [mouseCallback, hideCallback]
  );

  useEffect(() => {
    document.addEventListener("mouseover", handleMouseOver);

    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, [handleMouseOver]);

  return (
    <Container ref={refContainer}>
      <Content ref={refContent}>{children}</Content>

      {/* Infinity Scroll Effect */}
      <div style={{ display: enabled ? "inline-block" : "hidden" }}>
        {children}
      </div>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  max-width: 100%;
  transform: rotate(3deg);
  margin-bottom: 1.25rem;
`;

const Content = styled.div`
  display: inline-block;

  & > * {
    margin-right: 1.125rem;
  }

  & + div > * {
    margin-right: 1.125rem;
  }
`;

export default SliderContainer;
