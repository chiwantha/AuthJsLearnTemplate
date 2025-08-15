"use client";
import Button from "@/components/button/Button";
import { inputStyles } from "@/context";
import React from "react";

const RegisterForm = () => {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      autoComplete="off"
      action={() => alert("Form submitted")}
    >
      <input
        type="text"
        name="username"
        placeholder="username"
        className={inputStyles}
      />
      <input
        type="email"
        name="email"
        placeholder="youremail@mail.com"
        className={inputStyles}
        autoComplete="off"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className={inputStyles}
      />
      <Button type="submit">Join</Button>
    </form>
  );
};

export default RegisterForm;
