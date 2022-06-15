import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  overflow: hidden;
  background: var(--tan);
  min-height: 100vh;
  position: relative;
  cursor: cell;

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

const Header = styled.header`
  height: 110vh;
  color: var(--blue);
  position: relative;
  display: flex;
  max-width: 90%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 900px) {
    justify-content: flex-start;
    margin-top: 6rem;
  }

  .contactLinks {
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 100;

    a {
      color: var(--blue);
    }

    @media (max-width: 900px) {
      position: relative;
      top: 0;
      right: 0;
      margin: 0;
      flex-direction: row;
      /* justify-content: center; */
      justify-content: flex-start;
      /* align-items: center; */

      a {
        margin: 0;
        padding: 0;
      }
    }
  }

  .title {
    display: flex;
    align-items: center;

    h1 {
      font-size: clamp(4.8rem, 3.8486rem + 4.6126vw, 8rem);
      margin: 0 0 2rem 0;
      padding: 0;
      cursor: crosshair;
      line-height: 1;

      &:active {
        cursor: cell;
      }

      @media (max-width: 832px) {
        line-height: 1.1;
      }
    }

    @media (max-width: 900px) {
      margin: 0;
      align-items: flex-start;
    }
  }

  .about {
    p {
      font-size: clamp(1.5rem, 1rem + 2.2222vw, 3rem);
      margin-right: 10rem;
      line-height: 1.25;
      letter-spacing: 1.5px;
      cursor: crosshair;

      .me:hover {
        color: var(--red);
        cursor: cell;
      }

      .pines {
        color: var(--blue);
        text-decoration: none;

        &:hover {
          color: var(--green);
          cursor: cell;
        }
      }

      .jerz {
        text-decoration: none;
        color: var(--blue);

        &:hover {
          color: var(--yellow);
          cursor: cell;
        }
      }
    }

    @media (max-width: 1000px) {
      p {
        margin: 2rem 2rem 0 0;
      }
    }

    @media (max-width: 500px) {
      p {
        margin: 2rem 0 0 0;
      }
    }
  }
`;

const Services = styled.section`
  height: 110vh;
  width: 100%;
  background: var(--blue);
  color: var(--tan);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "svcImage services";
  place-items: right;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-areas: "services services";
  }

  .servicesImage {
    grid-area: svcImage;

    img {
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 1100px) {
      display: none;
    }
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    grid-area: services;
    place-self: center;
    /* padding-left: 4rem; */

    .service {
      h2 {
        font-size: clamp(1.5rem, 1.1667rem + 1.4815vw, 2.5rem);
        margin: 0 0 0.25rem 0;
        padding: 0;
        text-decoration: underline;
        text-decoration-style: dashed;
        text-underline-offset: 4px;
        letter-spacing: 0.5px;
        cursor: crosshair;
      }

      h2:hover {
        text-decoration-style: wavy;
        text-underline-offset: 2px;
        text-decoration-color: var(--yellow);
      }

      ul {
        margin: 0 2rem 0 0;
        padding: 0;
        list-style: none;
      }

      ul li {
        font-size: clamp(1.25rem, 1.1667rem + 0.3704vw, 1.5rem);
        letter-spacing: 0.5px;
        cursor: crosshair;
      }

      ul li:hover {
        text-decoration: underline;
        text-decoration-style: dashed;
        text-decoration-skip-ink: none;
        text-decoration-color: var(--yellow);
        text-underline-offset: 4px;
      }

      ul li a {
        text-decoration: none;
        color: var(--tan);
      }

      ul li a:last-child:hover {
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-skip-ink: none;
        text-decoration-color: var(--yellow);
        text-underline-offset: 4px;
      }
    }
  }
`;

const Contact = styled.footer`
  height: 100vh;
  color: var(--blue);
  /* padding: 2rem; */
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: clamp(4rem, 3.4054rem + 2.8829vw, 6rem);
    margin: 0;
  }

  p {
    font-size: clamp(2rem, 1.6667rem + 1.4815vw, 3rem);
    line-height: 1;
    letter-spacing: 1px;
    margin: 2rem 4rem 2rem 0;
  }

  .myLinks {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;
    width: 100%;

    a {
      color: var(--blue);
      text-decoration-style: wavy;
      text-decoration-skip-ink: none;
      text-underline-offset: 5px;
      font-size: clamp(1.35rem, 1.25rem + 0.4444vw, 1.65rem);
      letter-spacing: 0.65px;
      margin: 0;
      padding: 0;
      /* transition: all 0.25s ease-in; */
    }

    a:hover {
      text-decoration-style: dashed;
      text-decoration-color: var(--yellow);
      /* color: var(--red); */
      cursor: grab;
    }

    a:active {
      cursor: grabbing;
      text-decoration-color: var(--darkGrey);
      color: var(--darkGrey);
    }

    @media (max-width: 550px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
    max-width: 95%;
    height: auto;

    h3 {
      line-height: 1;
      margin: 4rem 0 2rem 0;
    }

    p {
      margin: 0;
    }
  }
`;

export default function Home() {
  const containerRef = useRef();

  // Header section timeline
  const headerRef = useRef();
  const hq = gsap.utils.selector(headerRef);
  const headertl = useRef();

  // Services section timeline
  const servicesRef = useRef();
  const sq = gsap.utils.selector(servicesRef);
  const servicestl = useRef();

  // Contact section timeline
  const contactRef = useRef();
  const cq = gsap.utils.selector(contactRef);
  const contacttl = useRef();

  useEffect(() => {
    // gsap.utils.toArray(".panel").forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     pin: true,
    //     scrub: 1,
    //     // markers: true,
    //     // id: "panel-marker",

    //     // base vertical scrolling on how wide the container is so it feels more natural
    //     end: () => "+=" + containerRef.offsetWidth,
    //   });
    // });

    // ScrollTrigger.create({
    //   // to snap the whole page to the closest section
    //   snap: {
    //     snapTo: 1 / 2,
    //     inertia: false,
    //     duration: { min: 0.25, max: 0.25 },
    //     ease: "power3.inOut",
    //   },
    // });

    // Header section timeline animations
    headertl.current = gsap
      .timeline()
      .fromTo(
        hq(".title"),
        { opacity: 0, x: 200 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.in",
        }
      )
      .fromTo(
        hq(".about"),
        { opacity: 0, y: 100 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.in",
        }
      )
      .fromTo(
        hq(".contactLink"),
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: {
            from: "end",
            amount: 0.25,
          },
          ease: "power3.in",
        },
        "-=0.65"
      );

    // Services section timeline animations
    servicestl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".panel2",
          start: "25% 80%",
          // markers: true,
        },
      })
      .fromTo(
        sq(".services"),
        {
          opacity: 0,
          y: 100,
        },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
        }
      );

    // Contact section timeline animations
    contacttl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".panel3",
          start: "25% 80%",
          // markers: true,
        },
      })
      .fromTo(
        cq(".contactTitle"),
        { opacity: 0, x: 200 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.in",
        }
      )
      .fromTo(
        cq(".contactText"),
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.in",
        }
      )
      .fromTo(
        cq(".link"),
        {
          opacity: 0,
          x: 300,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: {
            // from: "end",
            amount: 1,
          },
          ease: "power1.in",
        }
      );
  }, []);

  return (
    <Container ref={containerRef}>
      <Head>
        <title>
          Jereme Lentz - freelance website developer based in southern New
          Jersey who focuses on interesting and unique digital experiences
        </title>
        <meta
          name="description"
          content="Jereme Lentz is a South Jersey based freelance website developer who focuses on creative solutions that will make your brand stand out from the competition."
        />
        <link rel="icon" href="/jl-logo.png" />
      </Head>

      <Header className="panel" ref={headerRef}>
        <div className="title">
          <h1>jereme lentz</h1>
        </div>

        <div className="contactLinks">
          {/* Email */}
          <a
            href="mailto:jerlentz@gmail.com"
            className="contactLink"
            aria-label="Email: jerlentz@gmail.com"
          >
            <svg
              width="36"
              height="36"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 9L12 12.5L17 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/jereme_l"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
            aria-label="Twitter"
          >
            <svg
              width="34"
              height="34"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/jeremel/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
            aria-label="Instagram"
          >
            <svg
              width="36"
              height="36"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 6.51L17.51 6.49889"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jereme-lentz-03560ab6/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
            aria-label="LinkedIn"
          >
            <svg
              width="36"
              height="36"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 17V13.5V10"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7.01L7.01 6.99889"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="about">
          <p>
            <span className="me">Jereme Lentz</span> is a developer based out of
            the{" "}
            <a
              href="https://en.wikipedia.org/wiki/New_Jersey_Pine_Barrens"
              className="pines"
              target="_blank"
              rel="noreferrer"
            >
              Pine Barrens
            </a>{" "}
            of{" "}
            <a
              href="https://en.wikipedia.org/wiki/South_Jersey"
              className="jerz"
              target="_blank"
              rel="noreferrer"
            >
              southern New Jersey
            </a>{" "}
            who makes modern, responsive websites for businesses and other
            organizations who are ready to step up their digital presence.
          </p>
        </div>
      </Header>

      <Services className="panel panel2" ref={servicesRef}>
        <div className="servicesImage">
          <img src="/forsythe.jpg" alt="Forsythe" />
        </div>
        <div className="services">
          <div className="service">
            <h2>Services</h2>
            <ul>
              <li>Frontend development</li>
              <li>Backend development</li>
              <li>eCommerce development</li>
              <li>Headless CMS integration</li>
              <li>UI design</li>
              <li>UX design</li>
              <li>Existing website audit</li>
              <li>Technical consulting</li>
              <li>Project scoping</li>
              <li>Project management</li>
            </ul>
          </div>
          <div className="service">
            <h2>Tech stack</h2>
            <ul>
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  React
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  NextJS
                </a>
              </li>
              <li>
                <a
                  href="https://www.sanity.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sanity
                </a>
              </li>
              <li>
                <a href="https://prismic.io/" target="_blank" rel="noreferrer">
                  Prismic
                </a>
              </li>
              <li>
                <a
                  href="https://wpengine.com/resources/headless-cms-and-wordpress/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Headless WordPress
                </a>
              </li>
              <li>
                <a
                  href="https://www.shopify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shopify
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Figma
                </a>
              </li>
              <li>
                <a
                  href="https://greensock.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GSAP
                </a>
              </li>
              <li>
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Framer Motion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Services>

      <Contact className="panel panel3" ref={contactRef}>
        <h3 className="contactTitle">let&apos;s work together</h3>
        <p className="contactText">
          Reach out to me via one of the channels below so we can give your
          business a fresh, interactive website that won&apos;t blend in with
          all of the boring template based websites that your competitors use.
        </p>
        <div className="myLinks">
          <a href="mailto:jerlentz@gmail.com" className="link">
            jerlentz@gmail.com
          </a>
          <a
            href="https://twitter.com/jereme_l"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            twitter
          </a>
          <a
            href="https://www.instagram.com/jeremel/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            instagram
          </a>
          <a
            href="https://www.linkedin.com/in/jereme-lentz-03560ab6/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            linkedin
          </a>
        </div>
      </Contact>
    </Container>
  );
}
