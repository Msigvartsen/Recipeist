export default {
  name: "mainImage",
  type: "image",
  title: "Bilde",
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Bildetekst",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "alt",
      type: "string",
      title: "Alt text",
      description: "Alt text for SEO purposes",
      options: {
        isHighlighted: true
      }
    }
  ]
}
