import mail from "@sendgrid/mail";
import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
mail.setApiKey(process.env.SENDGRID_KEY!);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          //@ts-ignore
          where: {
            ...user,
          },
          //@ts-ignore
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  if (phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}`,
    });
    console.log(message); */
  } else if (email) {
    /* const email = await mail.send({
      from: "byundavid@naver.com",
      to: "byundavid@naver.com",
      subject: "Your Carrot Market Verification Email",
      text: `Your token is ${payload}`,
      html: `<strong> Your token is ${payload}</strong>`,
    });
    console.log(email); */
  }
  return res.json({
    ok: true,
  });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
