import { GrConfigure } from "react-icons/gr"
export default {
  name: "siteSettings",
  type: "document",
  title: "Innstillinger",
  icon: GrConfigure,
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "image", type: "image", title: "Image" },
    { name: "logo", type: "image", title: "Logo" }
  ]
}
