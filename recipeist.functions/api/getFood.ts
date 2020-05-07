import { NowRequest, NowResponse, } from '@now/node'
import fetch from "node-fetch"

export default async (req: NowRequest, res: NowResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`REQUEST`, req.method, req.headers.host, req.url);

    const api = "foods";
    const foodUrl = `https://www.matvaretabellen.no/api/${api}?language=no&version=73`;
    const foodResponse = await fetch(foodUrl);
    if (foodResponse.status !== 200) {
        const error = foodResponse.statusText;
        console.log("foodResponse", error)
        res.json({ status: foodResponse.status, error })
        return;
    }

    const foodData = await foodResponse.json() || {};
    if (!foodData.foods) {
        const error = "No food found";
        console.log("foodData", error)
        res.json({ status: 404, error })
        return;
    }

    console.log(`Found ${foodData.foods.length} foods. Returning 1000 of them to avoit hitting Zeit's 6mb limit`)

    res.json({ status: 200, foods: foodData.foods.slice(0, 1000) })
}