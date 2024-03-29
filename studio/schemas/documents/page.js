import { FcPackage } from "react-icons/fc";

export default {
  name: "page",
  title: "Pages",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  icon: FcPackage,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "main",
    },
    {
      name: "modules",
      title: "Page Modules",
      type: "array",
      of: [
        {
          type: "homeHeader",
        },
        {
          type: "projects",
        },
        {
          type: "homeContact",
        },
      ],
      group: "main",
    },
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      options: {
        source: "title",
      },
      group: "seo",
      description: "Will also be used for the og:title property",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
      group: "seo",
      description: "Will also be used for the og:title property",
    },
    {
      name: "metaURL",
      title: "Meta URL",
      type: "slug",
      options: {
        source: "slug",
      },
      group: "seo",
      description: "Will be used for the og:url property",
    },
    {
      name: "metaImage",
      title: "Meta Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "seo",
      description: "Will be used for the og:img property",
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug",
      //   media: "mainImage.image",
    },
  },
};
