import { NowRequest, NowResponse } from "@now/node"
import { getSynonym } from "../synonym"

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  console.log(`REQUEST`, req.method, req.headers.host, req.url)

  console.log("TEST PARAMS", req.query.q)

  const synonymLists = await getSynonym(req.query.q)

  res.json({ status: 200, synonymLists })
}
