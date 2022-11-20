import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.footer`
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

export default function Contact() {
  // Contact section timeline
  const contactRef = useRef();
  const cq = gsap.utils.selector(contactRef);
  const contacttl = useRef();

  useEffect(() => {
    // Contact section timeline animations
    let ctx = gsap.context(() => {
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
            duration: 0.8,
            ease: "power3.in",
          }
        )
        .fromTo(
          cq(".contactText"),
          { opacity: 0, y: 50 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
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
    }, contactRef);

    return () => ctx.revert();
  }, [cq]);

  return (
    <Container className="panel panel3" ref={contactRef}>
      <h3 className="contactTitle">let&apos;s work together</h3>
      <p className="contactText">
        Reach out via one of the channels below to see how we can give your
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
    </Container>
  );
}
