import client from "@libs/server/client";
import { withIronSessionApiRoute } from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.session.user);
  const profile = await client.user.findUnique({
    where: { id: req.session.user.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
  cookieName: "carrotsession",
  password: "2342342342342342sdfdsf342dsfdsfdsfsdfij23k4j23k4jkjk34",
});
