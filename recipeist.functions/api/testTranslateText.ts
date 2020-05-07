import { NowRequest, NowResponse, } from '@now/node'
import { translateText } from "../translate"

export default async (req: NowRequest, res: NowResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`REQUEST`, req.method, req.headers.host, req.url);

    const text = req.query.q;
    const to = req.query.to ? `${req.query.to}` : "en";
    const from = req.query.from || "no";

    console.log("TEST PARAMS", text, to, from)

    var translation = await translateText(text, to, from);

    res.json({ status: 200, translation })
}