import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}
const cookieOptions = {
  cookieName: "session",
  password: "sfdfjdkfjdkfjdkfjk34324324djsfkjdsfkdfjkjk34",
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
