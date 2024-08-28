"use client";
import React, { useEffect } from "react";
import LoginForm from "@/components/Auth/LoginForm";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-[90vw] md:w-[50vw] h-full border-2 shadow-2xl rounded-xl p-2 flex flex-col justify-start items-center gap-1">
        <h1 className="text-2xl font-extrabold">Login</h1>
        <div>
          <button
            className="py-2 px-4 border-2 rounded-3xl font-bold"
            onClick={() => signIn("google")}
          >
            Google Login
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="border border-gray-300 w-[40%]"></span>
          <p className="mx-2 w-fit text-center text-gray-300 font-semibold">
            OR
          </p>
          <span className="border border-gray-300 w-[40%]"></span>
        </div>
        <LoginForm />
        <div className="w-full flex justify-center items-center">
          <span className="border border-gray-300 w-[30%]"></span>
          <p className="mx-2 w-fit text-center text-gray-300 font-semibold">
            {`Don't Have Account`}
          </p>
          <span className="border border-gray-300 w-[30%]"></span>
        </div>
        <div className="text-lg font-bold py-2 px-5 border focus:outline-none border-black rounded-3xl">
          <Link href={"/sign-up"}>Sign Up</Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
