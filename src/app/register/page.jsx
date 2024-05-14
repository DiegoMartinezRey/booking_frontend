"use client";
import InputField from "@/components/InputField";
import { useState } from "react";

const page = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const getNameInput = (text) => {
    setNameInput(text);
  };
  const getSurnameInput = (text) => {
    setSurnameInput(text);
  };
  const getEmailInput = (text) => {
    setEmailInput(text);
  };
  const getPasswordInput = (text) => {
    setPasswordInput(text);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col items-center bg-slate-900 w-8/12 rounded-xl p-4">
        <h1>Sign Up</h1>
        <InputField
          label={"Name:"}
          type={"string"}
          value={nameInput}
          placeholder={"Juan"}
          setChange={getNameInput}
        />
        <InputField
          label={"Surname:"}
          type={"string"}
          value={surnameInput}
          placeholder={"Perez"}
          setChange={getSurnameInput}
        />
        <InputField
          label={"Email:"}
          type={"string"}
          value={emailInput}
          placeholder={"example@email.com"}
          setChange={getEmailInput}
        />
        <InputField
          label={"Password:"}
          type={"string"}
          value={passwordInput}
          placeholder={"xxxxxx"}
          setChange={getPasswordInput}
        />
        <button>Register</button>
      </div>
    </div>
  );
};

export default page;
