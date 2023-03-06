import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../../libs/client";
import withHandler from "../../../../libs/withHandlers";
import { withApiSession } from "../../../../libs/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;
  const existTweet = await client.tweet.findUnique({
    where: {
      id: +id.toString(),
    },
  });
  if (req.method === "POST") {
    const existLike = await client.like.findFirst({
      where: {
        tweetId: +id.toString(),
        userId: user?.id,
      },
    });
    if (existLike) {
      await client.like.delete({
        where: {
          id: existLike.id,
        },
      });
    } else {
      await client.like.create({
        data: {
          user: {
            connect: {
              id: user?.id,
            },
          },
          tweet: {
            connect: {
              id: +id.toString(),
            },
          },
        },
      });
    }
    res.json({ ok: true });
  }
}

export default withApiSession(withHandler({ method: "POST", handler }));
