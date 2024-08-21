import { resend } from "@/lib/resendMail";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  eamil: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: eamil,
      subject: "VYB Store Verfication Code",
      react: VerificationEmail({
        username: username,
        otp: verifyCode,
      }),
    });

    return { success: true, message: "Verofication Email Sent Successfully" };
  } catch (error) {
    console.error("Error sending Verfication Email");
    console.error(error);
    return { success: false, message: "Failed To Send Verification Email" };
  }
}
