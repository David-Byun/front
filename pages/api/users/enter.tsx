import client from "@libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, email } = req.body;
  const payLoad = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payLoad,
    },
    update: {},
    create: {
      name: "Anonymous",
      ...payLoad,
    },
  });
  console.log(user);
  return res.status(200).end();
}
