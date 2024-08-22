import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { saltRounds } from "@/constants/constants";

export async function POST(request: NextRequest) {
  dbConnect();
  try {
    const { username, email, password, isCreator } = await request.json();

    let user = await UserModel.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }

    // hashed Password
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // verification code
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    user = new UserModel({
      username,
      email,
      password: hashPassword,
      isCreator,
      verifyCode,
      isVerified: false,
    });
    await user.save();

    return NextResponse.json(
      {
        message: "User Registered Successfully",
        success: true,
        user,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
  }
}
