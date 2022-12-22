import { FcShipped } from "react-icons/fc";

export default {
  name: "project",
  title: "Project List",
  type: "document",
  icon: FcShipped,
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "webAddress",
      title: "Website Address",
      type: "string",
      description: "Provide the full URL for the website",
    },
    {
      name: "services",
      title: "Services Provided",
      type: "string",
    },
    {
      name: "stack",
      title: "Tech Stack",
      type: "string",
    },
    {
      name: "previewImage",
      title: "Preview Image",
      type: "asset",
      description:
        "The image that will be displayed on the home page when the project is hovered over",
    },
    {
      name: "completionDate",
      title: "Completion Date",
      type: "datetime",
    },
    {
      name: "completed",
      title: "Year Completed",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "previewImage.image",
    },
  },
};
