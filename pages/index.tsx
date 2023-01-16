import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import SliderItem from "@/components/Slider/item";
import { homeItems } from "@/data/home";
import { primaryColor } from "@/styles/theme";
import { device } from "@/styles/media";

export default function Home() {
  const center = Math.round(homeItems.length / 2);
  const item1 = homeItems.slice(0, center);
  const item2 = homeItems.slice(center, homeItems.length);

  return (
    <>
      <Head>
        <title>Ingsist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />

        <Main>
          <SliderContainer>
            <Slider initialOffsetX={0} contentWidth={1440}>
              {item1.map((item, i) => (
                <SliderItem key={i} text={item} width={100} />
              ))}
            </Slider>

            <Slider initialOffsetX={100} contentWidth={1440}>
              {item2.map((item, i) => (
                <SliderItem key={i} text={item} width={100} />
              ))}
            </Slider>
          </SliderContainer>

          <Intro>
            <h2>We build <br />the digital <br className="mobile" />experience,<br />and make it <br className="mobile" />happen.</h2>
            <p>A Digital Product Agency<br />Based in Taipei, Taiwan.</p>
          </Intro>
        </Main>
      </div>
    </>
  );
}

const Main = styled.main`
  background: ${primaryColor};
  min-height: 100vh;
  padding-top: 120px;
`;

const SliderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
`;

const Intro = styled.section`
  padding: 1.5rem;
  line-height: 2.5rem;

  br {
    &.mobile {
      display: block;

      ${device.laptop} {
        display: none
      }
    }
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.25rem;
  }
`
