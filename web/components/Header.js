import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PortableText } from "@portabletext/react";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.header`
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
    top: 160px;
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

      .me {
        text-decoration: underline;
        text-decoration-style: dashed;
        text-underline-offset: 4px;
        transition: all 0.2s ease-out;
        font-style: italic;

        &:hover {
          color: var(--red);
          text-decoration-color: var(--red);
          cursor: pointer;
        }
      }

      .pines {
        color: var(--blue);
        text-decoration: underline;
        text-decoration-style: dashed;
        text-underline-offset: 4px;
        transition: all 0.2s ease-out;
        font-style: italic;

        &:hover {
          color: var(--green);
          text-decoration-color: var(--green);
          cursor: pointer;
        }
      }

      .jerz {
        text-decoration: underline;
        text-decoration-style: dashed;
        color: var(--blue);
        text-underline-offset: 4px;
        transition: all 0.2s ease-out;
        font-style: italic;

        &:hover {
          color: var(--yellow);
          text-decoration-color: var(--yellow);
          cursor: pointer;
        }
      }

      .linkStyle {
        text-decoration: underline;
        text-decoration-style: dashed;
        color: var(--blue);
        text-underline-offset: 4px;
        transition: all 0.2s ease-out;
        font-style: italic;

        &:hover {
          color: var(--yellow);
          text-decoration-color: var(--yellow);
          cursor: pointer;
        }
      }
    }

    .hover-img {
      display: none;
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

const components = {
  marks: {
    link: ({ value, children }) => {
      return (
        <a
          href={value.href}
          className="linkStyle"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    },
    span: ({ children }) => {
      return <span className="me">{children}</span>;
    },
  },
};

export default function Header({ title, body }) {
  // Header section timeline
  const headerRef = useRef(null);
  const hq = gsap.utils.selector(headerRef);
  const headertl = useRef(null);

  useEffect(() => {
    // Header section timeline animations
    let ctx = gsap.context(() => {
      headertl.current = gsap
        .timeline()
        .fromTo(
          hq(".title"),
          { opacity: 0, x: 200, autoAlpha: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
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
            duration: 0.8,
            ease: "power3.in",
            autoAlpha: 1,
          }
        )
        .fromTo(
          hq(".contactLinks"),
          {
            opacity: 0,
            // y: -50,
            autoAlpha: 0,
          },
          {
            opacity: 1,
            // y: 0,
            duration: 0.5,
            autoAlpha: 1,
            //   stagger: {
            //     from: "end",
            //     amount: 0.5,
            //   },
            //   ease: "power3.in",
            // },
            // "-=0.65"
          }
        )
        .fromTo(
          hq(".contactLink"),
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
              amount: 1,
            },
            ease: "bounce.out",
          },
          "-=0.65"
        );
    }, headerRef);

    return () => ctx.revert();
  }, [hq]);

  return (
    <Container className="panel" ref={headerRef}>
      {/* Header Title */}
      {title && (
        <div className="title">
          <h1>{title}</h1>
        </div>
      )}

      {/* Contact links */}
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

      {/* Body content */}
      {body && (
        <div className="about">
          {body && <PortableText value={body} components={components} />}
        </div>
      )}
    </Container>
  );
}
