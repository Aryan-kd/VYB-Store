import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
