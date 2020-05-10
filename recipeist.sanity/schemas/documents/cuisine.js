import { FaFish } from "react-icons/fa"
export default {
  name: "cuisine",
  type: "document",
  icon: FaFish,
  title: "Kusine 🤨",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "image", type: "image", title: "Image" }
  ]
}
