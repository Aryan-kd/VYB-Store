import "next-auth";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    _id?: string;
    username?: string;
    email?: string;
    isCreator?: boolean;
    isVerified?: boolean;
  }

  interface Session {
    user: {
      _id?: string;
      username?: string;
      email?: string;
      isCreator?: boolean;
      isVerified?: boolean;
    } & DefaultSession["user"];
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      _id?: string;
      username?: string;
      email?: string;
      isCreator?: boolean;
      isVerified?: boolean;
    };
  }
}
