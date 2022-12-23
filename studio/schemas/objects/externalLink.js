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
    {
      title: "Link Type",
      name: "linkType",
      type: "string",
      description: "Leave blank or select 'Web' for web links",
      options: {
        list: [
          { title: "Web", value: "" },
          { title: "Email", value: "mailto:" },
          { title: "Phone", value: "tel:" },
        ],
        layout: "dropdown",
      },
    },
  ],
};
