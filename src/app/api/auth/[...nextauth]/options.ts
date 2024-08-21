import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });

          if (user === null) {
            throw new Error("Email Not Found");
          }

          if (!user.isVerified) {
            throw new Error("User Not verified");
          }

          const isPass = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isPass) {
            return user;
          } else {
            throw new Error("Password is Incorrect");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.username = user.username;
        token.email = user.email;
        token.isVerified = user.isVerified;
        token.isCreator = user.isCreator;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token.user._id;
        session.user.email = token.user.email;
        session.user.username = token.user.username;
        session.user.isVerified = token.user.isVerified;
        session.user.isCreator = token.user.isCreator;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
