import { FcLandscape } from "react-icons/fc";

export default {
  name: "post",
  title: "Blog Posts",
  type: "document",
  icon: FcLandscape,
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
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
    },
    {
      name: "subtitle",
      title: "Subtitle",
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
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      group: "main",
    },
    // {
    //   name: "mainImage",
    //   title: "Main image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: "mainImage",
      title: "Main Image",
      type: "asset",
      group: "main",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      group: "main",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "main",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
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
      author: "author.name",
      media: "mainImage.image",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
