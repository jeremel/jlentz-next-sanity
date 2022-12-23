export default {
  title: "External Link",
  name: "externalLink",
  type: "object",
  fields: [
    {
      title: "Link Text",
      name: "linkText",
      type: "string",
    },
    {
      title: "Link Address",
      name: "linkAddress",
      type: "string",
      description: "Be sure to include full address (https://....)",
      validation: (Rule) => Rule.required(),
    },
  ],
};
