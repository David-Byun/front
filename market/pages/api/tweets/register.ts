import { NextApiRequest, NextApiResponse } from "next";
import { useReducer } from "react";
import { client } from "../../../libs/client";
import withHandler from "../../../libs/withHandlers";
import { withApiSession } from "../../../libs/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { tweet } = req.body;
  const { user } = req.session;
  const registerTweet = await client.tweet.create({
    data: {
      tweet,
      user: { connect: { id: user?.id } },
    },
    include: {
      user: true,
    },
  });
  res.json({
    ok: true,
    registerTweet,
  });
}

export default withApiSession(withHandler({ method: "POST", handler }));
