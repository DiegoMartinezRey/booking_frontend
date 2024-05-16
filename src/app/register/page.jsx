"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Panel from "@/components/Panel";
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

  const url = process.env.NEXT_PUBLIC_API_URL;

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
      <Panel>
        <h1>Sign Up</h1>
        <div className="flex flex-col gap-3 items-end">
          <div className="flex gap-2 flex-wrap">
            <h2>Name:</h2>
            <InputField
              type={"string"}
              value={nameInput}
              placeholder={"Juan"}
              onChange={getNameInput}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <h2>Surname:</h2>
            <InputField
              type={"string"}
              value={surnameInput}
              placeholder={"Perez"}
              onChange={getSurnameInput}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <h2>Email:</h2>
            <InputField
              type={"email"}
              value={emailInput}
              placeholder={"example@email.com"}
              onChange={getEmailInput}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <h2>Password:</h2>
            <InputField
              type={"password"}
              value={passwordInput}
              placeholder={"xxxxxx"}
              onChange={getPasswordInput}
            />
          </div>
        </div>
        <Button style={"dark"} click={setRegister}>
          Register
        </Button>
      </Panel>
    </div>
  );
};

export default page;
