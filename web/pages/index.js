import { useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { groq } from "next-sanity";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

import Module from "../components/Module";

// gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  overflow: hidden;
  background: var(--tan);
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

const homePageQuery = groq`
  *[_type == "homepage"][0]{
    _id,
    title,
    metaTitle,
    metaDescription,
    // modules,
    modules[]{
       _type == "homeHeader" => {
       ...,
        },
      _type == "projects" => {
       ...,
         projectArray[]->,
        },
      _type == "homeContact" => {
       ...,
        },
     }
  }
`;

export default function Home({ data, preview }) {
  const router = useRouter();
  const containerRef = useRef();

  const { data: homepage } = usePreviewSubscription(homePageQuery, {
    params: data.homepage,
    initialData: data.homepage,
    enabled: preview && data.homepage,
  });

  if (!router.isFallback && !data.homepage) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, metaTitle, metaDescription, modules } = homepage;

  // console.log(modules);

  return (
    <Container ref={containerRef}>
      <Head>
        {title && <title>{title}</title>}
        <meta
          name="description"
          content="Jereme Lentz is a South Jersey based creative website designer and developer who builds modern, creative marketing and eCommerce websites for businesses that are ready to step up their digital presence"
        />
        <link rel="icon" href="/jl-logo.png" />
      </Head>

      {/* Where the module components defined in Sanity are rendered */}
      <Module modules={modules} />

      {preview && (
        <ExitPreview>
          <Link href="/api/exit-preview">Exit Preview</Link>
        </ExitPreview>
      )}
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  let homepage = await getClient(preview).fetch(homePageQuery);

  return {
    props: {
      preview,
      // data: homepage || null,
      data: { homepage },
    },
    revalidate: 60,
  };
}
