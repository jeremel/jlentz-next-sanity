export default {
  name: "projects",
  title: "Projects Component",
  type: "document",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Header Title",
      type: "string",
      description: "The header text of the component",
    },
    {
      name: "subtitle",
      title: "Header Subtitle",
      type: "string",
      description: "Text that will appear below the header title",
    },
    {
      name: "projectArray",
      title: "Projects",
      description: "The list of projects that will appear in the component",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "project",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
