import { FcHome } from "react-icons/fc";

export default {
  name: "homepage",
  title: "Home Page",
  type: "document",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
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
  icon: FcHome,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      description: "Will also be used as for the og:title property",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
      group: "seo",
      description: "Will also be used as for the og:title property",
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
    {
      name: "metaType",
      title: "Meta Type",
      type: "string",
      options: {
        list: [
          {
            title: "Website",
            value: "website",
          },
          {
            title: "Article",
            value: "article",
          },
        ],
      },
      group: "seo",
      description:
        "Will be used for the og:type property. Use 'Article' for Blog posts and 'Website' for all other pages.",
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
