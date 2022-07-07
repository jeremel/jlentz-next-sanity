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
  min-height: 100vh;
  color: var(--blue);
  position: relative;
  display: flex;
  max-width: 90%;
  margin: 0 auto 2rem auto;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 900px) {
    justify-content: flex-start;
    margin-top: 2rem;
    min-height: auto;
  }

  .contactLinks {
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 100;
    visibility: hidden;

    a {
      color: var(--blue);

      &:hover {
        color: var(--yellow);
      }
    }

    @media (max-width: 900px) {
      position: relative;
      top: 0;
      right: 0;
      margin: 0;
      flex-direction: row;
      justify-content: flex-start;

      a {
        margin: 0;
        padding: 0;
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    visibility: hidden;

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
    visibility: hidden;

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
        margin: 2rem 0 4rem 0;
      }
    }
  }
`;

const Services = styled.section`
  min-height: 100vh;
  width: 100%;
  background: var(--blue);
  color: var(--tan);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "svcImage services";
  place-items: right;
  overflow: hidden;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .servicesImage {
    grid-area: svcImage;
    height: 100%;
    width: 100%;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    @media (max-width: 500px) {
      height: 60vh;
    }
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    grid-area: services;
    place-self: center;
    margin-bottom: 2rem;

    @media (max-width: 900px) {
      justify-content: center;
    }

    .service {
      width: 300px;

      @media (max-width: 615px) {
        text-align: center;
        align-items: center;
        margin-bottom: 2rem;
      }

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

        @media (max-width: 615px) {
          margin: 0;
        }
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
        text-decoration-skip-ink: none;
        text-decoration-color: var(--yellow);
        text-underline-offset: 4px;
      }
    }
  }
`;

const Contact = styled.footer`
  min-height: 100vh;
  color: var(--blue);
  max-width: 90%;
  margin: 0 auto 2rem auto;
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
    }

    a:hover {
      text-decoration-style: dashed;
      text-decoration-color: var(--yellow);
      cursor: grab;
    }

    a:active {
      cursor: grabbing;
      text-decoration-color: var(--darkGrey);
      color: var(--darkGrey);
    }

    @media (max-width: 650px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
    max-width: 95%;

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
        { opacity: 0, x: 200, autoAlpha: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.in",
          autoAlpha: 1,
        }
      )
      .fromTo(
        hq(".about"),
        { opacity: 0, y: 100, autoAlpha: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.in",
          autoAlpha: 1,
        }
      )
      .fromTo(
        hq(".contactLinks"),
        {
          opacity: 0,
          y: -50,
          autoAlpha: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          autoAlpha: 1,
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
          trigger: ".servicesImage",
          start: "top 40%",
          end: "40% top",
          // scrub: true,
          ease: "power1.easeInOut",
          // toggleActions: onEnter, onLeave, onEnterBack, onLeaveBack
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
      })
      .fromTo(
        sq(".image"),
        {
          scale: 1.2,
        },
        {
          duration: 1,
          scale: 1,
          ease: "power1.ease",
        }
      );

    servicestl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".service1",
          start: "0% 80%",
          // markers: true,
          // id: "image",
        },
      })
      .fromTo(
        sq(".service1"),
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

    servicestl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".service2",
          start: "0% 80%",
          // markers: true,
          // id: "service2",
        },
      })
      .fromTo(
        sq(".service2"),
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
  }, [hq, sq, cq]);

  return (
    <Container ref={containerRef}>
      <Head>
        <title>
          Jereme Lentz - South Jersey based Website Designer and Developer
        </title>
        <meta
          name="description"
          content="Jereme Lentz is a South Jersey based website designer and developer who builds modern, creative marketing and eCommerce websites for businesses that are ready to step up from the site-builder they built their first website with"
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

          {/* GitHub */}
          <a
            href="https://github.com/jeremel"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
            aria-label="GitHub"
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
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="about">
          <p>
            <span className="me">Jereme Lentz</span> is a creative developer
            based out of the{" "}
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
            who makes modern, responsive marketing and eCommerce websites for
            businesses and other organizations who are ready to step up their
            digital presence.
          </p>
        </div>
      </Header>

      <Services className="panel panel2" ref={servicesRef}>
        <div className="servicesImage">
          <img src="/forsythe.jpg" alt="Forsythe" className="image" />
        </div>
        <div className="services">
          <div className="service service1">
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
          <div className="service service2">
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
                <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
                  Svelte
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
          business a fresh, interactive website that will stand out from all of
          the boring template based websites that your competitors use.
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
          <a
            href="https://github.com/jeremel"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            github
          </a>
        </div>
      </Contact>
    </Container>
  );
}
