import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { apiResolver } from "next/dist/server/api-utils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const token = await client.token.create({
    data: {
      payload: "123123",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "Anonymous",
            ...payload,
          },
        },
      },
    },
  });
  console.log(token);
  /* if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      }, 
    });
    if (user) console.log("found it");
    if (!user) {
      console.log("Did not find. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("found it");
    if (!user) {
      console.log("Did not find. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
  } */

  return res.status(200).end();
}

export default withHandler("POST", handler);
