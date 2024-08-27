"use client";
import React from "react";

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassowrd] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [isCreator, setIsCreator] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorFullName, setErrorFullName] = React.useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    setErrorFullName("");
    setErrorEmail("");
    setErrorPassword("");
    if (fullName.length < 4) {
      setErrorFullName("Must more than 4 character");
      return;
    }
    if (email.length < 4) {
      setErrorEmail("Email is not valid");
      return;
    }
    if (password.length < 4) {
      setErrorPassword("Password Must more than 4 character");
      return;
    }
    console.log({
      fullName: fullName,
      email: email,
      password: password,
      isCreator: isCreator,
    });
    setEmail("");
    setPassowrd("");
    setIsCreator(false);
    setFullName("");
  };

  return (
    <div className="w-[95%] md:w-[70%] flex flex-col justify-center items-center gap-3 my-2">
      <div className="w-full flex flex-col justify-start items-start">
        <label
          htmlFor="full-name-input"
          className="text-start text-lg font-bold ml-1"
        >
          Full Name
        </label>
        {errorFullName.length > 0 && (
          <p className="text-sm text-red-600 text-start">{errorFullName}</p>
        )}
        <input
          type="text"
          id="full-name-input"
          className="w-full h-[40px] outline-none focus:outline-none border border-black rounded-md px-3 py-1"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="John Doe"
        />
      </div>
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
      <div className="flex justify-between items-center gap-3 w-full">
        <p className="text-lg font-bold w-[50%]">Are You A Creator?</p>
        <div className="flex justify-around items-center w-[40%]">
          <button
            onClick={() => setIsCreator(true)}
            className={`px-auto py-1 w-[70px] rounded-xl border border-black text-lg font-semibold ${
              isCreator ? "bg-green-800 text-white" : ""
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => setIsCreator(false)}
            className={`px-auto py-1 w-[70px] rounded-xl border border-black text-lg font-semibold ${
              isCreator ? "" : "bg-green-800 text-white"
            }`}
          >
            No
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={submitHandler}
          className="w-fit px-5 py-2 rounded-3xl border border-black focus:outline-none text-lg font-bold"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
