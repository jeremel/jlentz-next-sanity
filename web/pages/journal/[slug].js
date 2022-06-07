// pages/posts/[slug].js
import ErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { usePreviewSubscription, urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import styled from "styled-components";
import { format } from "date-fns";

const Container = styled.div`
  background: var(--tan);
  padding: 4rem;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  h2 {
    font-size: 3rem;
    margin: 2rem auto;
  }

  h3 {
    font-size: 1.5rem;
    font-style: italic;
    margin: 2rem auto;
  }

  figure {
    display: flex;
    justify-content: center;
    height: 55vh;
    margin: 0 auto;

    img {
      max-width: 75%;
      object-fit: cover;
    }
  }

  p {
    font-size: 1.5rem;
    max-width: 50%;
    margin: 2rem auto;
  }
`;

const Nav = styled.nav`
  color: var(--blue);
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
`;

const Header = styled.header`
  /* color: var(--tan); */
  color: var(--blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 4rem;
      line-height: 1;
      margin: 1.5rem 0 1rem 0;
    }

    h3 {
      /* color: var(--yellow); */
      color: var(--darkGrey);
      text-align: center;
      margin: 0;
      font-size: 1.5rem;
      font-family: quincy-cf, serif;
      font-weight: 400;
      font-style: normal;
      opacity: 0.7;
      line-height: 1.25;
      max-width: 75%;
    }

    h4 {
      margin-top: 0.5rem;
      margin-bottom: 0.25rem;
      padding: 0;
      color: var(--blue);
      font-size: 1.25rem;
      line-height: 1.15;
      letter-spacing: 0.5px;
    }
  }

  img {
    margin: 1rem 0;
    height: 100%;
    width: 100%;
    /* border: 8px solid var(--tan); */
    border: 8px solid var(--blue);
    border
  }
`;

const Footer = styled.footer`
  margin: 0 auto;

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
      font-size: 1.75rem;
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

const ExitPreview = styled.div`
  position: fixed;
  left: 25px;
  bottom: 25px;
  background: darkcyan;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 2.2px 4.3px 4.3px hsl(0deg 0% 0% / 0.43);

  a {
    color: white;
    font-size: 1rem;
  }
`;

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    author->,
    publishedAt,
    "slug": slug.current,
  }
`;

const ImageComponent = ({ value, isInline }) => {
  return (
    <img
      src={urlFor(value).url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",
      }}
    />
  );
};

const components = {
  types: {
    image: ImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  marks: {
    internalLink: ({ value, children }) => {
      return (
        <Link href={value?.path} passHref>
          <a>{children}</a>
        </Link>
      );
    },
  },
};

export default function Post({ data, preview }) {
  const router = useRouter();

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,
    enabled: preview && data.post?.slug,
  });

  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, subtitle, author, publishedAt, mainImage, body } = post;

  let formattedDate = format(new Date(publishedAt), "MMMM dd, yyyy");

  return (
    <Container>
      <Nav>
        <h1>
          <Link href="/" passHref>
            <a>jereme lentz</a>
          </Link>
        </h1>
        <Link href="/journal">
          <a>journal</a>
        </Link>
      </Nav>

      <Header>
        <div className="title">
          {title && <h2>{title}</h2>}
          {subtitle && <h3>{subtitle}</h3>}
          {publishedAt && <h4>{formattedDate}</h4>}
        </div>

        {mainImage && (
          <img src={urlFor(mainImage.image).url()} alt={mainImage.alt} />
        )}
      </Header>

      {body && <PortableText value={body} components={components} />}

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

      {preview && (
        <ExitPreview>
          <Link href="/api/exit-preview">Exit Preview</Link>
        </ExitPreview>
      )}
    </Container>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: { post },
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
