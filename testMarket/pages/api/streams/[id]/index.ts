import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { userInfo } from "os";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;
  const stream = await client.stream.findUnique({
    where: {
      id: +id.toString(),
    },
    select: {
      id: true,
      createAt: true,
      updateAt: true,
      name: true,
      description: true,
      price: true,
      userId: true,
      cloudflareId: true,
      messages: {
        select: {
          id: true,
          message: true,
          user: {
            select: {
              avatar: true,
              id: true,
            },
          },
        },
      },
    },
  });
  const isOwner = stream?.userId === user?.id;
  /* if (stream && !isOwner) {
    stream.cloudflareKey = "xxxx";
    stream.cloudflareUrl = "xxxx";
  } */
  const streamOwner = await client.stream.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      messages: {
        select: {
          id: true,
          message: true,
          user: {
            select: {
              avatar: true,
              id: true,
            },
          },
        },
      },
    },
  });

  res.json({ ok: true, stream: isOwner ? streamOwner : stream });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
