"use client";
import Input from "@/components/Input";
import Image from "next/image";
import React, { useCallback, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((prevVal) => (prevVal === "login" ? "register" : "login"));
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src={"/images/logo.png"} alt="logo" width={200} height={200} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "register" ? "Create an account" : "Sign In"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="username"
                  label="Username"
                  type="username"
                  value={username}
                  onChange={(event: any) => setUsername(event.taget.value)}
                />
              )}
              <Input
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(event: any) => setEmail(event.taget.value)}
              />

              <Input
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(event: any) => setPassword(event.taget.value)}
              />
            </div>
            <button className="bg-red-600 py-3 rounded-md mt-8 text-white w-full hover:bg-red-700 transition">
              Login
            </button>
            <p className="text-neutral-500 mt-12 text-sm flex justify-center">
              {variant === "login"
                ? "Already have an account?"
                : "New to Netflix?"}
              <span
                onClick={toggleVariant}
                className="text-white cursor-pointer hover:underline ml-1"
              >
                {variant === "login" ? "Sign in here" : "Create an account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
