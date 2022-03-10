import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { apiResolver } from "next/dist/server/api-utils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.json({ ok: true });
}

export default withHandler("POST", handler);
