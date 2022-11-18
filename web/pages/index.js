import { useEffect, useRef } from "react";
import Head from "next/head";
import styled from "styled-components";

import Header from "../components/Header";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

// gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  overflow: hidden;
  background: var(--tan);
  min-height: 100vh;
  position: relative;

  h1,
  h2,
  h3 {
    font-family: nazare, sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  p,
  a,
  li {
    font-family: quincy-cf, serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export default function Home() {
  const containerRef = useRef();

  return (
    <Container ref={containerRef}>
      <Head>
        <title>
          Jereme Lentz - South Jersey based Website Designer and Developer
        </title>
        <meta
          name="description"
          content="Jereme Lentz is a South Jersey based creative website designer and developer who builds modern, creative marketing and eCommerce websites for businesses that are ready to step up their digital presence"
        />
        <link rel="icon" href="/jl-logo.png" />
      </Head>

      <Header />
      <Portfolio />
      {/* <Services /> */}
      <Contact />
    </Container>
  );
}
