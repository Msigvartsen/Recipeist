import React from "react"
import { TiThLargeOutline } from "react-icons/ti"
export default {
  name: "ingredientGroup",
  title: "Ingrediensgruppe",
  type: "document",
  icon: TiThLargeOutline,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn"
    },
    {
      name: "parentId",
      type: "string",
      title: "Hovedkategori id"
    },
    {
      name: "imageUrl",
      type: "string",
      title: "Bilde-URL"
    },
    {
      name: "imageAltText",
      type: "string",
      title: "Bildebeskrivelse"
    },
    {
      name: "translation",
      type: "string",
      title: "Oversettelse"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug"
    }
  ],
  preview: {
    select: {
      title: "name",
      imageUrl: "imageUrl"
    },
    prepare(selection) {
      const { title, imageUrl } = selection
      let result = { title }
      if (imageUrl) result.media = <img src={imageUrl} />
      return result
    }
  }
}
