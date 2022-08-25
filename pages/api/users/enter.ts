import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../libs/client";
import withHandler from "../../../libs/withHandlers";
import { withApiSession } from "../../../libs/withSession";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;
  const user = email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            ...user,
          },
        },
      },
    },
  });

  return res.status(200).json({
    ok: true,
    payload,
  });
}
export default withApiSession(
  withHandler({ method: "POST", handler, isPrivate: false })
);
