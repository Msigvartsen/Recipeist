import { NowRequest, NowResponse, } from '@now/node'
import { searchImages } from "../unsplash"

export default async (req: NowRequest, res: NowResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`REQUEST`, req.method, req.headers.host, req.url);

    console.log("TEST PARAMS", req.query.q)

    const imageResult = await searchImages(req.query.q);

    res.json({ status: 200, imageResult })
}