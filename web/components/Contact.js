import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { PortableText } from "@portabletext/react";

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

export default function Contact({ title, body, contactLinks }) {
  // Contact section timeline
  const contactRef = useRef();
  const cq = gsap.utils.selector(contactRef);
  const contacttl = useRef();

  // console.log(contactLinks);

  useEffect(() => {
    // Contact section timeline animations
    let ctx = gsap.context(() => {
      contacttl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contactTitle",
            start: "25% 80%",
            // markers: true,
            // id: "contact-trigger",
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
    <Container className="contactContainer" ref={contactRef}>
      {title && <h3 className="contactTitle">{title}</h3>}

      {body && (
        <div className="contactText">
          <PortableText value={body} />
        </div>
      )}

      <div className="myLinks">
        {contactLinks &&
          contactLinks.map((contactLink) => (
            <a
              href={
                contactLink.linkType == "mailto:"
                  ? `mailto:` + contactLink.linkAddress
                  : contactLink.linkType == "tel:"
                  ? `tel:` + contactLink.linkAddress
                  : contactLink.linkAddress
              }
              className="link"
              rel="noopener noreferrer"
              target="_blank"
              key={contactLink._key}
            >
              {contactLink.linkText}
            </a>
          ))}
      </div>
    </Container>
  );
}
