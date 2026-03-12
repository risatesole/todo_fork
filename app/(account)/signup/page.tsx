"use client";

import { useState, useEffect } from "react";

import env from "@/config/environment";
import TextField from "@/components/textfield";
import AuthenticationService from "@/services/authentication";

import { useRouter } from "next/navigation";

async function handleSignup(
  auth: AuthenticationService,
  router: any,
  name: string,
  password: string,
  confirmPassword: string,
) {
  if (!name) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const result = await auth.signup(name);

    if (result.success === false) {
      throw new Error("signup failed");
    }

    router.push("/tasks");
  } catch (error) {
    alert("Signup failed");
  }
}

export default function Page() {
  const auth = new AuthenticationService("local");
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // This function runs once when the component mounts (page loads)
    const checkbrowserToken = auth.getBrowserStorgedToken();
    if (checkbrowserToken) {
      router.push("/tasks"); // redirect to tasks
    }
  }, []);

  return (
    <div>
      <h1>{env.APPNAME}</h1>
      <p>SignUp page</p>

      <TextField
        labelText="Name"
        placeholderText="Enter your name"
        onValueChange={setName}
      />

      <TextField
        labelText="Email"
        placeholderText="EnterYourEmail"
        onValueChange={setEmail}
      />

      <TextField
        labelText="Password"
        placeholderText="Enter your password"
        onValueChange={setPassword}
        fieldType="password"
      />

      <TextField
        labelText="Confirm Password"
        placeholderText="Confirm your password"
        onValueChange={setConfirmPassword}
        fieldType="password"
      />

      <button
        onClick={() =>
          handleSignup(auth, router, name, password, confirmPassword)
        }
      >
        Sign Up
      </button>
    </div>
  );
}
