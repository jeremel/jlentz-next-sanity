import { FcAreaChart } from "react-icons/fc";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: FcAreaChart,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
