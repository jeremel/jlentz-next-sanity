import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  background: var(--blue);
  color: var(--tan);
  min-height: 100%;

  p {
    font-size: 2rem;
  }

  .innerContainer {
    max-width: 90%;
    min-height: 115vh;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: clamp(4rem, 3.4054rem + 2.8829vw, 6rem);
      margin: 0;
      padding: 0;
      line-height: 1;
    }

    h3 {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-style: italic;
      margin-bottom: 1rem;
    }

    @media (max-width: 1000px) {
      h3 {
        display: none;
      }
    }

    .portfolio__wrapper {
      width: 100%;
      position: relative;

      .portfolio__item {
        width: 100%;
        border-bottom: dotted 2px var(--tan);
        padding: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        position: relative;

        @media (max-width: 800px) {
          flex-direction: column;
          justify-content: center;
        }

        p {
          font-size: 2rem;
          line-height: 1;
        }

        .portfolio__title__services {
          position: relative;
          z-index: 1;
          min-width: 50%;

          p {
            margin-bottom: clamp(0.5rem, 0.3333rem + 0.7407vw, 1rem);
          }

          a {
            /* color: black; */
            color: var(--tan);
            text-decoration: underline rgba(0, 0, 0, 0);
            text-decoration-style: dotted;
            text-underline-offset: 0.25rem;
            transition: text-decoration-color 300ms ease;

            &:hover {
              text-decoration-color: rgba(255, 249, 235, 1);
            }
          }
        }

        .portfolio__year__stack {
          text-align: end;
          position: relative;
          z-index: 1;

          @media (max-width: 800px) {
            text-align: left;
          }

          p {
            margin-bottom: clamp(0.5rem, 0.3333rem + 0.7407vw, 1rem);
          }
        }

        .portfolio__image {
          position: absolute;
          left: clamp(5rem, -3.75rem + 38.8889vw, 31.25rem);
          bottom: -75%;
          z-index: 2;

          @media (max-width: 1000px) {
            /* bottom: 0; */
            display: none;
          }

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;

const data = [
  {
    id: 1,
    name: "Doerler Landscapes",
    year: "2022",
    stack: "Next.js, Sanity CMS, Framer Motion, Vercel",
    services: "Design, Development",
    description:
      "Full redesign of a WordPress website to a Next.js website with Sanity as the CMS.",
    image: "/doerler-homepage-header.png",
    alt: "Doerler Landscapes & Hidden Springs Irrigation Homepage Screenshot",
    link: "https://www.doerler.com",
  },
  {
    id: 2,
    name: "JLentz Consulting",
    year: "2022",
    stack: "Next.js, GSAP, Lenis, Vercel",
    services: "Design, Development",
    description:
      "A simple website with a contact form for my small business consulting website.",
    image: "/jlentzconsulting-header.png",
    alt: "JLentz Consulting Homepage Screenshot",
    link: "https://www.jlentzconsulting.com",
  },
  {
    id: 3,
    name: "Jereme Lentz Photography",
    year: "2022",
    stack: "Next.js, Sanity CMS, GSAP, Vercel",
    services: "Design, Development",
    description:
      "A website created to highlight my photography. The frontend was built out using Next.js with Styled Components and Sanity was used as the CMS.",
    image: "/jlentzphoto-homepage-header.png",
    alt: "Jereme Lentz Photography Homepage Screenshot",
    link: "https://www.jeremelentzphotography.com",
  },
];

export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);
  const portfolioRef = useRef(null);
  const pq = gsap.utils.selector(portfolioRef);
  const portfoliotl = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {}, portfolioRef);

    return () => ctx.revert();
  }, [pq]);

  return (
    <Container ref={portfolioRef}>
      <div className="innerContainer">
        <h2>Recent Work</h2>
        <h3>*hover name for preview</h3>

        <div className="portfolio__wrapper">
          {data &&
            data.map((item, i) => (
              <section className="portfolio__item" key={item.id}>
                <div
                  className="portfolio__title__services"
                  onMouseOver={() => setIsHovered(item.id)}
                  onMouseOut={() => setIsHovered(false)}
                >
                  <p>
                    <a href={item.link}>{item.name}</a>
                  </p>
                  <p>{item.services}</p>
                </div>

                <div className="portfolio__year__stack">
                  <p>{item.year}</p>
                  <p>{item.stack}</p>
                </div>

                {isHovered === item.id && (
                  <div className="portfolio__image">
                    <img src={item.image} alt={item.alt} />
                  </div>
                )}
              </section>
            ))}
        </div>
      </div>
    </Container>
  );
}
