export default {
  name: "homeContact",
  title: "Homepage Contact Component",
  type: "document",
  __experimental_actions: ["create", "update", "delete", "publish"],
  fields: [
    {
      name: "title",
      title: "Contact Title",
      type: "string",
      description: "The header text of the Contact component",
    },
    {
      name: "body",
      title: "Contact Content",
      type: "blockContent",
      description: "This is where the Contact component text goes",
    },
    {
      name: "contactLinks",
      title: "Contact Links",
      type: "array",
      of: [
        {
          type: "externalLink",
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Homepage Contact Component",
      };
    },
  },
};
