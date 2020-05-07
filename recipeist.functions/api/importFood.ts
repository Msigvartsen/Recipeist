import { NowRequest, NowResponse, } from '@now/node'
import { client } from "../sanity"

export default async (req: NowRequest, res: NowResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`REQUEST`, req.method, req.headers.host, req.url);

    const food = req.body;

    const isValidFood = food && food.name
    if (!isValidFood) {
        res.json({ status: 500, error: "invalid body", body: req.body })
    }

    console.log("food is valid: ", food.name)

    const doc = {
        _type: 'ingredient',
        _id: food.id,
        name: food.name,
        slug: { _type: "slug", current: food.slug },
        foodData: JSON.stringify(food),
    }

    const sanityResponse = await client.createOrReplace(doc);

    let message = "doc successfully ";
    if (new Date(sanityResponse._createdAt) < new Date(sanityResponse._updatedAt)) {
        message += "updated";
    } else {
        message += "created";
    }

    res.json({ status: 200, message })
}