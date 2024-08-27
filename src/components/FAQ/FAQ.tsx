"use client";
import React from "react";
import Question from "./Question";

const FAQ = () => {
  let items = [
    {
      question: "How does the VYB store work?",
      answer:
        "VYB Store is an infuencer marketplace. You can monetize your travel itinerary.",
    },
    {
      question: "How do I get started with the VYB Store?",
      answer:
        "Getting started with VYB Store is super easy! Simply sign up for an account, create your store, and start sharing your store link in your Instagram bio with the audience.",
    },
    {
      question: `What does "Zero Cost" mean?`,
      answer:
        "Zero cost means vybing with us is completely free. You don't have to pay a single rupee to build your store and monetize your audience.",
    },
    {
      question: "How do I track my earnings on VYB Store?",
      answer:
        "We provide you with detailed analytics to track your earnings and performance. You can see how many purchases your links have generated, as well as your total earnings.",
    },
    {
      question: "What kind of products can I sell on VYB Store?",
      answer:
        "You can sell a variety of products on VBY Store, including physical merchandise, digital downloads, and even services like travel itineraries and plenty more.",
    },
    {
      question: "How do I withdraw my earnings?",
      answer:
        "We offer various payout options, including bank transfers. In the earning section under your profile click the withdraw button to withdraw your earnings. Withdrawal will be available every 14 days.",
    },
    {
      question: "How can I get support if I have any questions or issues??",
      answer:
        "If you have any questions or issues, you can reach out to VYB Store's customer support team via email at support@vybstore.com. We're here to help you succeed!",
    },
    {
      question: "Do I need technical skills to use the platform?",
      answer:
        "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    {
      question: "This email is already in use?",
      answer: `You did email login first time. So, you probably need to connect Google. You can do email login and go to profile section and press "Connect Google". Next time you should be able to do Google login seamlessly. in case you've forgotten the password, press "Reset Password"`,
    },
    {
      question: "We didn't find any account with those login credentials?",
      answer: `You did google Sign in for the first time, so now "Reset Password" on login page. You will receive magic link on the email. Use that link to change your password. Happy Vybing!`,
    },
  ];
  return (
    <section className="w-full h-fit">
      <div className="w-[90vw] h-full mx-auto flex flex-col justify-center items-center py-10 gap-3">
        <h1 className="font-extrabold text-3xl text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-lg font-semibold text-center">{`Quick answers to questions you may have. Can't find what you're looking for?`}</p>
        <p className="text-lg font-semibold text-green-500 text-center">
          Check out our full documentation
        </p>
        <div className="w-full flex-col flex justify-start items-center gap-2">
          {items.map((item, index) => (
            <Question
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
