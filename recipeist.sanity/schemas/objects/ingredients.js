import React from "react"
export default {
  name: "ingredientInstance",
  title: "Ingrediens med antall",
  type: "object",
  fields: [
    {
      name: "ingredient",
      type: "reference",
      title: "Ingrediens",
      to: [{ type: "ingredient" }]
    },
    { name: "quantity", type: "number", title: "Antall" }
  ],
  preview: {
    select: {
      title: "ingredient.name",
      quantity: "quantity",
      unit: "ingredient.unit",
      imageUrl: "ingredient.imageUrl"
    },
    prepare(selection) {
      const { title, quantity, unit, imageUrl } = selection
      return {
        title: title,
        subtitle: `${quantity} ${unit}`,
        media: <img src={imageUrl} />
      }
    }
  }
}
