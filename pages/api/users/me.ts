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
  const foundTweet = await client.tweet.findMany({
    where: {
      userId: user?.id,
    },
    include: { user: { select: { email: true } } },
  });
  res.json({
    ok: true,
    foundTweet,
  });
}

export default withApiSession(withHandler({ method: "GET", handler }));
