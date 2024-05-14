"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState } from "react";

const page = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const getEmailInput = (text) => {
    setEmailInput(text);
  };
  const getPasswordInput = (text) => {
    setPasswordInput(text);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col items-center bg-slate-900 w-8/12 rounded-xl p-4">
        <h1>Sign In</h1>
        <InputField
          label={"Email:"}
          type={"string"}
          value={emailInput}
          placeholder={"example@email.com"}
          setChange={getEmailInput}
        />
        <InputField
          label={"Surname:"}
          type={"string"}
          value={passwordInput}
          placeholder={"xxxxxxx"}
          setChange={getPasswordInput}
        />
        <Button style={"dark"} link={"/"}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default page;
