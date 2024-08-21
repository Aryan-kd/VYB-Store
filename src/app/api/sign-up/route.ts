import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

// Can be changed according to your need
import { saltRounds } from "@/constants/constants";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password, isCreator } = await request.json();

    // Checking if user with username is verified or not
    const verifiedUsername = await UserModel.findOne({
      username: username,
      isVerified: true,
    });

    if (verifiedUsername) {
      return Response.json(
        {
          success: false,
          message: "User with Username Already Exist",
        },
        { status: 400 }
      );
    }

    // Existing user with email exists
    const existingUserEmail = await UserModel.findOne({
      email: email,
    });

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    if (existingUserEmail) {
      if (existingUserEmail.isVerified) {
        return Response.json(
          {
            success: false,
            message: "Email Id Already Exists",
          },
          { status: 400 }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        existingUserEmail.password = hashedPassword;
        existingUserEmail.verifyCode = verifyCode;

        await existingUserEmail.save();
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new UserModel({
        username: username,
        email: email,
        password: hashedPassword,
        isCreator: isCreator,
        isVerified: false,
        verifyCode: verifyCode,
      });

      await newUser.save();
    }

    // Send Verification Email
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode
    );

    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "User Registered Successfully, Please Verfiy your account",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in Resgistering user");
    console.error(error);
    return Response.json(
      {
        success: true,
        message: "Error Registering User",
      },
      {
        status: 400,
      }
    );
  }
}
