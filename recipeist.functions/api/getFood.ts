import { NowRequest, NowResponse, } from '@now/node'
import fetch from "node-fetch"

export default async (req: NowRequest, res: NowResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`REQUEST`, req.method, req.headers.host, req.url);

    const api = "foods";
    const foodUrl = `https://www.matvaretabellen.no/api/${api}?language=no&version=73`;
    const foodResponse = await fetch(foodUrl);
    if (foodResponse.status !== 200) {
        res.json({ status: foodResponse.status, error: foodResponse.statusText })
        return;
    }

    const foodData = await foodResponse.json() || {};
    if (!foodData.foods) {
        res.json({ status: 404, error: "No food found" })
        return;
    }

    res.json({ status: 200, message: "Here's the first 10 foods", foods: foodData.foods.slice(0, 10) })
    return;
}