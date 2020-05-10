import React from "react"
import { GiBananaPeeled } from "react-icons/gi"
export default {
  name: "ingredient",
  title: "Ingrediens",
  type: "document",
  icon: GiBananaPeeled,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn"
    },
    {
      name: "unit",
      type: "string",
      title: "Enhet"
    },
    {
      name: "portion",
      type: "number",
      title: "Porsjon (denne kan umulig stemme 🤔)"
    },
    {
      name: "groupId",
      type: "string",
      title: "Gruppenummer"
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
      title: "Slug",
      options: {
        source: "name"
      }
    },
    {
      name: "foodData",
      type: "text",
      title: "Data fra Matvaretabellen",
      readOnly: true
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
