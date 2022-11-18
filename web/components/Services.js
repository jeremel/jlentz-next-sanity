import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
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
    place-self: center;

    .innerImage {
      height: 100%;
      background: url("/forsythe.jpg");
      background-position: center;
      place-self: center;
    }

    /* img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    } */

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

export default function Services() {
  // Services section timeline
  const servicesRef = useRef();
  const sq = gsap.utils.selector(servicesRef);
  const servicestl = useRef();

  let getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

  useEffect(() => {
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
          // toggleActions: "play none none none",
          // markers: true,
        },
      })
      .fromTo(
        sq(".servicesImage"),
        {
          backgroundPosition: () =>
            `50% ${-window.innerHeight * getRatio(".servicesImage")}px`,
          scale: 1.2,
        },
        {
          duration: 1,
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(".servicesImage"))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: ".image",
            start: () => "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
          scale: 1,
          // ease: "power1.ease",
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
  }, [sq]);

  return (
    <Container className="panel panel2" ref={servicesRef}>
      <div className="servicesImage">
        <div className="innerImage"></div>
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
                Next.JS
              </a>
            </li>
            <li>
              <a href="https://www.sanity.io/" target="_blank" rel="noreferrer">
                Sanity.io
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
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                Figma
              </a>
            </li>
            <li>
              <a href="https://greensock.com/" target="_blank" rel="noreferrer">
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
    </Container>
  );
}
