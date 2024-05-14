"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useAuth } from "@/contexts/Login";
import { useEffect, useState } from "react";

const page = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { login } = useAuth();

  useEffect(() => {}, []);

  const setLogin = async () => {};

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
          type={"string"}
          value={nameInput}
          placeholder={"Juan"}
          onChange={getNameInput}
        />
        <InputField
          type={"string"}
          value={surnameInput}
          placeholder={"Perez"}
          onChange={getSurnameInput}
        />
        <InputField
          type={"string"}
          value={emailInput}
          placeholder={"example@email.com"}
          onChange={getEmailInput}
        />
        <InputField
          type={"string"}
          value={passwordInput}
          placeholder={"xxxxxx"}
          onChange={getPasswordInput}
        />
        <Button style={"dark"} link={"/"}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default page;
