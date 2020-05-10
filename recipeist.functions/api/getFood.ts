import { NowRequest, NowResponse } from "@now/node"
import fetch from "node-fetch"

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  console.log(`REQUEST`, req.method, req.headers.host, req.url)

  const api = "foods"
  const foodUrl = `https://www.matvaretabellen.no/api/${api}?language=no&version=73`
  const foodResponse = await fetch(foodUrl)
  if (foodResponse.status !== 200) {
    const error = foodResponse.statusText
    console.log("foodResponse", error)
    res.json({ status: foodResponse.status, error })
    return
  }

  const foodData = (await foodResponse.json()) || {}
  if (!foodData.foods) {
    const error = "No food found"
    console.log("foodData", error)
    res.json({ status: 404, error })
    return
  }

  let foods = foodData.foods
  let message = `Found ${foods.length} foods. `

  if (req.query.next) {
    foods = foods.slice(1000, 2000)
    message +=
      "Returning hits from 1000 to 2000 to avoit hitting Zeit's 6mb limit"
  } else {
    foods = foods.slice(0, 1000)
    message += "Returning first 1000 hits to avoit hitting Zeit's 6mb limit"
  }

  console.log(message)

  res.json({ status: 200, foods })
}
