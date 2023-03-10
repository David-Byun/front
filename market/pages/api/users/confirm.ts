import { client } from "../../../libs/client";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
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
  const { token } = req.body;
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
    include: {
      user: true,
    },
  });
  if (!foundToken) return res.status(404).end();
  req.session.user = {
    id: foundToken?.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    method: "POST",
    handler,
  })
);
