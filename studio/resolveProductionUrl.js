// ./studio/resolveProductionUrl.js

// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "08401-sanity-08215";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://your-nextjs-site.com`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);

  switch (doc._type) {
    case "post":
      previewUrl.searchParams.append(`slug`, `journal/${doc?.slug?.current}`);
      break;
    default:
      previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);
  }

  return previewUrl.toString();
}
