"use client";
import Input from "@/components/Input";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useReducer, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((prevVal) => (prevVal === "login" ? "register" : "login"));
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  }, [email, password, , router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        username,
        password,
      });
      login();
    } catch (e) {
      console.log(e);
    }
  }, [email, username, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src={"/images/logo.png"} alt="logo" width={200} height={200} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "register" ? "Register" : "Sign In"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="username"
                  label="Username"
                  type="username"
                  value={username}
                  onChange={(event: any) => setUsername(event.target.value)}
                />
              )}
              <Input
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(event: any) => setEmail(event.target.value)}
              />

              <Input
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />
            </div>
            <button
              onClick={variant === "register" ? register : login}
              className="bg-red-600 py-3 rounded-md mt-8 text-white w-full hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer transition hover:opacity-80 hover:scale-105">
                <FcGoogle size={30} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer transition hover:opacity-80 hover:scale-105">
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12 text-sm flex justify-center">
              {variant === "login"
                ? "New to Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white cursor-pointer hover:underline ml-1"
              >
                {variant === "login" ? "Create an account" : "Sign in here"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
