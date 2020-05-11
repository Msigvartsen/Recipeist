import { NowRequest, NowResponse } from "@now/node"
import { client } from "../sanity"
import { translateText } from "../translate"
import { searchImages } from "../unsplash"
import { getSynonym } from "../synonym"

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  console.log(`REQUEST`, req.method, req.headers.host, req.url)

  const food = req.body
  const isValidFood = food && food.name
  if (!isValidFood) {
    const error = "Invalid body"
    console.log("isValidFood", error)
    res.json({ status: 500, error, body: req.body })
    return
  }

  const translation = await translateText(food.name, "en", "no")
  const { imageUrl, imageAltText, firstImageResult } = await searchImages(
    translation
  )

  const synonymResponse = await getSynonym(food.name)
  const synonyms =
    synonymResponse.synonymLists &&
    synonymResponse.synonymLists.some(x => x.length > 0)
      ? synonymResponse.synonymLists.reduce((a, b) => [...a, ...b], [])
      : []

  const doc = {
    _type: "ingredient",
    _id: food.id,
    name: food.name,
    unit: food.Portion.ref.split(" ")[0],
    portion: parseInt(food.Portion.value.split(" ")[0]),
    groupId: food.groupId,
    imageUrl,
    imageAltText,
    translation,
    synonyms,
    slug: { _type: "slug", current: food.slug },
    foodData: JSON.stringify(food)
  }

  const sanityResponse = await client.createOrReplace(doc)

  const isUpdate =
    new Date(sanityResponse._createdAt) < new Date(sanityResponse._updatedAt)

  let message = `Doc [${food.name}] successfully ${
    isUpdate ? "updated" : "created"
  }`

  console.log(message)

  res.json({ status: 200, message })
}
