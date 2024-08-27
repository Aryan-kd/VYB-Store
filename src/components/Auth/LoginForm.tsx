"use client";
import React from "react";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassowrd] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    if (email.length < 4) {
      setErrorEmail("Email is not valid");
      return;
    }
    if (password.length < 4) {
      setErrorPassword("Password Must more than 4 character");
      return;
    }
    console.log({ email: email, password: password });
    setEmail("");
    setPassowrd("");
  };

  return (
    <form
      className="w-[95%] md:w-[70%] flex flex-col justify-center items-center gap-3 my-2"
      onSubmit={submitHandler}
    >
      <div className="w-full flex flex-col justify-start items-start">
        <label
          htmlFor="email-input"
          className="text-start text-lg font-bold ml-1"
        >
          Email
        </label>
        {errorEmail.length > 0 && (
          <p className="text-sm text-red-600 text-start">{errorEmail}</p>
        )}
        <input
          type="email"
          id="email-input"
          className="w-full h-[40px] outline-none focus:outline-none border border-black rounded-md px-3 py-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <label
          htmlFor="password-input"
          className="text-start text-lg font-bold ml-1"
        >
          Password
        </label>
        {errorPassword.length > 0 && (
          <p className="text-sm text-red-600 text-start">{errorPassword}</p>
        )}
        <input
          type="password"
          id="password-input"
          className="w-full h-[40px] outline-none focus:outline-none border border-black rounded-md px-3 py-1"
          value={password}
          onChange={(e) => setPassowrd(e.target.value)}
          placeholder="password"
        />
      </div>
      <div>
        <button
          className="w-fit px-5 py-2 rounded-3xl border border-black focus:outline-none text-lg font-bold"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
