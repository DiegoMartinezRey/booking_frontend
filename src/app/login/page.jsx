"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Panel from "@/components/Panel";
import { useAuth } from "@/contexts/Login";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const url = process.env.NEXT_PUBLIC_API_URL;

  const setLogin = async () => {
    try {
      const response = await axios.post(`${url}/user/login`, {
        email: emailInput,
        password: passwordInput,
      });
      const data = response.data;
      console.log(data);
      login({
        token: data.token,
        id: data.id,
        name: data.name,
        surname: data.surname,
        role: data.role,
      });
      router.push("/");
    } catch (error) {
      console.log("Error logging in. Please check your credentials.");
      console.log(error);
    } finally {
      setLoading(false);
    }
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
        <h1>Sign In</h1>
        <div className="flex flex-col gap-3 items-end">
          <div className="flex gap-2">
            <h2>Email:</h2>
            <InputField
              type={"email"}
              value={emailInput}
              placeholder={"example@email.com"}
              onChange={getEmailInput}
            />
          </div>
          <div className="flex gap-2">
            <h2>Password:</h2>
            <InputField
              type={"password"}
              value={passwordInput}
              placeholder={"xxxxxxx"}
              onChange={getPasswordInput}
            />
          </div>
        </div>
        <Button style={"light"} click={setLogin}>
          Login
        </Button>
      </Panel>
    </div>
  );
};

export default Login;
