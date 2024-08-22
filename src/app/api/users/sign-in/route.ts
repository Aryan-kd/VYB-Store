import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  dbConnect();
  try {
    const { email, password } = await request.json();

    let user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User doesn't exists",
          success: false,
        },
        { status: 400 }
      );
    }

    // Check password
    const isPass = await bcrypt.compare(password, user.password);
    if (!isPass) {
      return NextResponse.json(
        {
          error: "Wrong Password",
          success: false,
        },
        { status: 400 }
      );
    }

    // create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      username: user.username,
    };

    const token = await jwt.sign(tokenData, process.env.NEXTAUTH_SECRET!, {
      expiresIn: "1d",
    });

    const response = await NextResponse.json(
      {
        message: "Login Successfully",
        success: true,
      },
      { status: 200 }
    );

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      { status: 400 }
    );
  }
}
