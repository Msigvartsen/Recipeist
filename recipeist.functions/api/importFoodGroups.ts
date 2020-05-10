import { client } from "../sanity"
import { NowRequest, NowResponse } from "@now/node"
import fetch from "node-fetch"
import { translateText } from "../translate"
import { searchImages } from "../unsplash"

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  console.log(`REQUEST`, req.method, req.headers.host, req.url)

  const api = "data"
  const foodUrl = `https://www.matvaretabellen.no/api/${api}?language=no&version=73`
  const foodResponse = await fetch(foodUrl)
  if (foodResponse.status !== 200) {
    const error = foodResponse.statusText
    console.log("foodResponse", error)
    res.json({ status: foodResponse.status, error })
    return
  }

  const foodData = (await foodResponse.json()) || {}
  if (!foodData.foodgroups) {
    const error = "No foodgroups found"
    console.log("foodData", error)
    res.json({ status: 404, error })
    return
  }

  console.log(`Found ${foodData.foodgroups.length} foodgroups`)

  for (const food of foodData.foodgroups) {
    const translation = await translateText(food.name, "en", "no")
    const { imageUrl, imageAltText } = await searchImages(translation)

    const doc = {
      _type: "ingredientGroup",
      _id: food.id,
      name: food.name,
      parentId: food.parentId,
      imageUrl,
      imageAltText,
      translation,
      slug: { _type: "slug", current: food.slug }
    }

    const sanityResponse = await client.createOrReplace(doc)

    const isUpdate =
      new Date(sanityResponse._createdAt) < new Date(sanityResponse._updatedAt)

    console.log(
      `Doc [${food.name}] successfully ${isUpdate ? "updated" : "created"}`
    )
    await sleep(10000) // unsplash shuts down too many attempts
  }

  res.json({ status: 200, foodGroups: foodData.foodgroups })
}

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
