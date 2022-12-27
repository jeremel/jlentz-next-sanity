import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

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

    .portfolio__title {
      h2 {
        font-size: clamp(4rem, 3.4054rem + 2.8829vw, 6rem);
        margin: 0;
        /* margin-bottom: 1.5rem; */
        padding: 0;
        line-height: 1;
      }

      h3 {
        padding: 0;
        font-size: 1rem;
        font-style: italic;
        margin-bottom: 2rem;
      }

      @media (max-width: 1000px) {
        h3 {
          display: none;
        }
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
          /* left: clamp(5rem, -3.75rem + 38.8889vw, 31.25rem); */
          left: 65%;
          bottom: 0;
          z-index: 2;
          max-width: 600px;

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

export default function Portfolio({ title, subtitle, projectArray }) {
  const [isHovered, setIsHovered] = useState(false);
  const portfolioRef = useRef(null);

  // const pq = gsap.utils.selector(portfolioRef);
  // const portfoliotl = useRef(null);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     portfoliotl.current = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: ".portfolio__title",
  //           start: "25% 80%",
  //           // markers: true,
  //           // id: "portfolio-trigger",
  //           refreshPriority: 1,
  //         },
  //       })
  //       .fromTo(
  //         pq(".portfolio__title"),
  //         {
  //           opacity: 0,
  //           x: 200,
  //           autoAlpha: 0,
  //         },
  //         {
  //           x: 0,
  //           opacity: 1,
  //           duration: 0.8,
  //           ease: "power3.in",
  //           autoAlpha: 1,
  //         }
  //       )
  //       .fromTo(
  //         pq(".portfolio__item"),
  //         {
  //           autoAlpha: 0,
  //           opacity: 0,
  //           y: 100,
  //         },
  //         {
  //           autoAlpha: 1,
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.4,
  //           stagger: {
  //             from: "start",
  //             amount: 1,
  //           },
  //           ease: "linear",
  //         },
  //         "+=0.25"
  //       );
  //   }, portfolioRef);

  //   return () => ctx.revert();
  // }, [pq]);

  // console.log(projectArray[0].previewImage.image.asset.metadata);

  return (
    <Container ref={portfolioRef}>
      <div className="innerContainer">
        <div className="portfolio__title">
          {title && <h2>{title}</h2>}
          {subtitle && <h3>{subtitle}</h3>}
        </div>

        <div className="portfolio__wrapper">
          {projectArray &&
            projectArray.map((project) => (
              <section className="portfolio__item" key={project._id}>
                <div
                  className="portfolio__title__services"
                  onMouseOver={() => setIsHovered(project._id)}
                  onMouseOut={() => setIsHovered(false)}
                >
                  <p>
                    <a href={project.webAddress}>{project.title}</a>
                  </p>
                  <p>{project.services}</p>
                </div>

                <div className="portfolio__year__stack">
                  <p>{project.completed}</p>
                  <p>{project.stack}</p>
                </div>

                {isHovered === project._id && (
                  <div className="portfolio__image">
                    <Image
                      src={urlFor(project.previewImage.image).url()}
                      alt={project.previewImage.alt}
                      priority
                      width={
                        project.previewImage.image.asset.metadata.dimensions
                          .width
                      }
                      height={
                        project.previewImage.image.asset.metadata.dimensions
                          .height
                      }
                      placeholder="blur"
                      blurDataURL={
                        project.previewImage.image.asset.metadata.lqip
                      }
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                )}
              </section>
            ))}
        </div>
      </div>
    </Container>
  );
}
