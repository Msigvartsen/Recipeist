import { NowRequest, NowResponse, } from '@now/node'
import { client } from "../sanity"
import { translateText } from "../translate"
import { searchImages } from "../unsplash"

export default async (req: NowRequest, res: NowResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`REQUEST`, req.method, req.headers.host, req.url);

    const food = req.body;
    const isValidFood = food && food.name
    if (!isValidFood) {
        const error = "Invalid body";
        console.log("isValidFood", error)
        res.json({ status: 500, error, body: req.body })
        return;
    }

    const translation = await translateText(food.name, "en", "no");
    const { imageUrl, imageAltText, firstImageResult } = await searchImages(translation);

    const doc = {
        _type: 'ingredient',
        _id: food.id,
        name: food.name,
        imageUrl,
        imageAltText,
        translation,
        slug: { _type: "slug", current: food.slug },
        foodData: JSON.stringify(food),
    }

    const sanityResponse = await client.createOrReplace(doc);

    let message = "Doc successfully ";
    if (new Date(sanityResponse._createdAt) < new Date(sanityResponse._updatedAt)) {
        message += "updated";
    } else {
        message += "created";
    }

    console.log(message)

    res.json({ status: 200, message })
}