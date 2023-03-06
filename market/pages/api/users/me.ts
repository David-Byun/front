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
  const {
    session: { user },
  } = req;
  if (!user) return res.json({ ok: false });
  const foundTweet = await client.tweet.findMany({
    include: { user: { select: { email: true } } },
  });
  if (user) {
    res.json({
      ok: true,
      foundTweet,
    });
  }
}

export default withApiSession(withHandler({ method: "GET", handler }));
