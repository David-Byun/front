import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../../libs/client";
import withHandler from "../../../../libs/withHandlers";
import { withApiSession } from "../../../../libs/withSession";

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
    query: { id },
  } = req;
  const otherTweet = await client.tweet.findUnique({
    where: {
      id: +id.toString(),
    },
    include: { user: { select: { email: true } } },
  });
  const isLiked = Boolean(
    await client.like.findFirst({
      where: {
        tweetId: otherTweet?.id,
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );
  res.json({
    ok: true,
    otherTweet,
    isLiked,
  });
}

export default withApiSession(withHandler({ method: "GET", handler }));
