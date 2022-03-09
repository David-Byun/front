import { NextApiRequest, NextApiResponse } from "next";
import { apiResolver } from "next/dist/server/api-utils";
import client from "../../../libs/server/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  console.log(req.body);
  res.json({ ok: true });
}
