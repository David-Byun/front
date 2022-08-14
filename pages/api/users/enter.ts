import { NextApiRequest, NextApiResponse } from "next";
import { userInfo } from "os";
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
  const { name, password } = req.body;
  /* const user = await client.user.upsert({
    where: {
      ...(name && password ? { name } : {}),
    },
    create: {
      name,
      password,
    },
    update: {},
  }); */
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...(name && password ? { name } : {}),
          },
          create: {
            name,
            password,
          },
        },
      },
    },
  });

  return res.status(200).json({
    ok: true,
  });
}
export default withApiSession(
  withHandler({ method: "POST", handler, isPrivate: false })
);
// if (name && password) {
//   user = await client.user.findUnique({
//     where: {
//       name,
//     },
//   });
//   if (user) console.log("found it.");
//   if (!user) {
//     console.log("Did not find. Will create");
//     user = await client.user.create({
//       data: {
//         name,
//         password,
//       },
//     });
//   }
//   console.log(user);
