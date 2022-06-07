import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  /* background: var(--green); */
  background: var(--tan);
  padding: 4rem;
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

const Header = styled.header`
  /* color: var(--tan); */
  color: var(--blue);

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 a {
      font-size: clamp(3rem, 2.3333rem + 2.963vw, 5rem);
      font-family: nazare, sans-serif;
      font-weight: 600;
      font-style: normal;
      cursor: cell;
    }

    h1:active {
      cursor: crosshair;
    }

    a {
      /* color: var(--tan); */
      color: var(--blue);
      font-size: 2rem;
      text-decoration: none;
      padding-right: 8rem;
      transition: all 0.1s ease-in;
    }

    a:first-child:hover {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
      text-decoration-style: wavy;
      text-decoration-skip-ink: none;
      text-decoration-color: var(--yellow);
      text-underline-offset: 4px;
      cursor: cell;
    }

    a:active {
      cursor: crosshair;
    }
  }

  .wrapper {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 4rem;
    margin: 2rem 0;

    .about {
      max-width: 50%;

      p {
        font-size: 2.5rem;
        line-height: 1.2;
        letter-spacing: 1.5px;
        cursor: crosshair;
      }
    }

    .services {
      display: flex;
      flex-wrap: wrap;

      .service {
        h3 {
          font-size: 1.75rem;
          margin: 0 0 0.25rem 0;
          padding: 0;
          text-decoration: underline;
          text-decoration-style: dashed;
          text-underline-offset: 4px;
          letter-spacing: 0.5px;
          cursor: help;
        }

        h3:hover {
          text-decoration-style: wavy;
          text-underline-offset: 2px;
        }

        ul {
          margin: 0 2rem 0 0;
          padding: 0;
          list-style: none;
        }

        ul li {
          font-size: 1.25rem;
          letter-spacing: 0.5px;
          cursor: crosshair;
        }

        ul li a {
          text-decoration: none;
          /* color: var(--tan); */
          color: var(--blue);
        }
      }
    }
  }
`;

const Footer = styled.footer`
  .myLinks {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    a {
      /* color: var(--tan); */
      color: var(--blue);
      text-decoration-style: wavy;
      text-decoration-skip-ink: none;
      text-underline-offset: 5px;
      font-size: 1.5rem;
      letter-spacing: 0.65px;
      transition: all 0.25s ease-in;
    }

    a:hover {
      text-decoration-style: dashed;
      text-decoration-color: var(--yellow);
      color: var(--yellow);
      cursor: grab;
    }

    a:active {
      cursor: grabbing;
      text-decoration-color: var(--darkGrey);
      color: var(--darkGrey);
    }
  }
`;

export default function Journal() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    <Container>
      <Head>
        <title>jereme lentz</title>
        <meta
          name="description"
          content="Jereme Lentz is a developer who focuses on custom website design and development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <div className="nav">
          <h1>
            <Link href="/" passHref>
              <a>jereme lentz</a>
            </Link>
          </h1>
          <Link href="/journal">
            <a>journal</a>
          </Link>
        </div>

        <div className="wrapper">
          <div className="about">
            <p>*Coming soon*</p>
          </div>
        </div>
      </Header>

      <Footer>
        <div className="myLinks">
          <a href="mailto:jerlentz@gmail.com">jerlentz@gmail.com</a>
          <a
            href="https://twitter.com/jereme_l"
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </a>
          <a
            href="https://www.instagram.com/jeremel/"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
          <a href="#">linkedin</a>
        </div>
      </Footer>
    </Container>
  );
}
