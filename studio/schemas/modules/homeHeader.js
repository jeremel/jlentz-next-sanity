export default {
  name: "homeHeader",
  title: "Homepage Header Component",
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
      name: "body",
      title: "Header Content",
      type: "blockContent",
      description: "This is where the header text goes",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
