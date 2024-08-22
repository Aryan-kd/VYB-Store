"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
    isCreator: false,
  });

  const btnCss = {
    default:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",
    outline:
      "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
  };

  const onSignUp = async (e: any) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/sign-up", user);

      console.log(response);
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    setUser({
      username: "",
      email: "",
      password: "",
      isCreator: false,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing......" : ""}</h1>
      <h1>Register Page</h1>
      <hr />

      <div className="flex flex-col items-center justify-center py-2">
        <label htmlFor="username">Username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg MB-4 focus:outline-none focus:border-gray-600"
          id="username"
          type="text"
          value={user.username}
          placeholder="Aryan"
          onChange={(e) =>
            setUser({
              ...user,
              username: e.target.value,
            })
          }
        />
      </div>

      <div className="flex flex-col items-center justify-center py-2">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg MB-4 focus:outline-none focus:border-gray-600"
          id="email"
          type="email"
          value={user.email}
          placeholder="user@mail.com"
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
      </div>

      <div className="flex flex-col items-center justify-center py-2">
        <label htmlFor="password">Password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg MB-4 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          placeholder="Aryan"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
      </div>

      <div className="flex flex-col items-center justify-center py-2">
        <h1>Are You a creator</h1>
        <div className="w-full flex justify-around items-center">
          <button
            onClick={() => setUser({ ...user, isCreator: true })}
            className={user.isCreator ? btnCss.default : btnCss.outline}
          >
            Yes
          </button>
          <button
            onClick={() => setUser({ ...user, isCreator: false })}
            className={user.isCreator ? btnCss.outline : btnCss.default}
          >
            No
          </button>
        </div>
      </div>

      <div>
        <button onClick={onSignUp} className={btnCss.default}>
          Sign Up
        </button>
      </div>

      <hr />
      <div className="flex flex-col justify-center items-center my-3 p-3">
        <p>Already a user</p>
        <Link href={"/sign-in"} className={btnCss.outline}>
          Login
        </Link>
      </div>
    </div>
  );
}
