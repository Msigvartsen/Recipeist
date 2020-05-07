import { NowRequest, NowResponse, } from '@now/node'

export default async (req: NowRequest, res: NowResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`REQUEST`, req.method, req.headers.host, req.url);

    res.json({ status: 200, message: "TEST" })
}