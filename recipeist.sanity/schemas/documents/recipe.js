export default {
  name: "recipe",
  title: "Oppskrift",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Tittel" },
    {
      name: "ingredients",
      type: "array",
      title: "Ingredienser",
      of: [{ type: "ingredientWithQuantity" }]
    },
    { name: "mainIntro", type: "text", title: "Oppsummering" },
    { name: "image", type: "mainImage", title: "Hovedbilde" },
    {
      name: "mainbody",
      type: "array",
      title: "Brødtekst 🍞😁",
      of: [{ type: "block" }]
    },
    {
      name: "cuisinetype",
      type: "array",
      title: "Cuisinetype",
      of: [{ type: "reference", to: [{ type: "cuisine" }] }]
    },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title" } }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
}
