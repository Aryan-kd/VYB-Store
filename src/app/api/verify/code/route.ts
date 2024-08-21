import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, code } = await request.json();

    const user = await UserModel.findOne({
      username: username,
    });

    if (user === null) {
      return Response.json(
        {
          success: false,
          message: "User Not Found",
        },
        { status: 404 }
      );
    }

    const isCode = user.verifyCode === code;
    if (!isCode) {
      return Response.json(
        {
          success: false,
          message: "Wrong Code, Please provide correct code",
        },
        { status: 400 }
      );
    }

    user.isVerified = true;
    await user.save();

    return Response.json(
      {
        success: true,
        message: "User is verified",
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error(err);

    return Response.json(
      {
        success: false,
        message: "Error while Verifying",
      },
      { status: 500 }
    );
  }
}
