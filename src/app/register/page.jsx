"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useAuth } from "@/contexts/Login";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const url = "http://localhost:3001";

  const setRegister = async () => {
    try {
      const response = await axios.post(`${url}/user/add`, {
        name: nameInput,
        surname: surnameInput,
        email: emailInput,
        password: passwordInput,
      });
      const data = response.data;
      router.push("/login");
    } catch (error) {
      console.log("Error logging in. Please check your credentials.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
        <Button style={"dark"} click={setRegister}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default page;
