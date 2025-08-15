"use client";
import Button from "@/components/button/Button";
import { inputStyles } from "@/context";

import React from "react";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      autoComplete="off"
    >
      <input
        type="text"
        name="username"
        placeholder="username"
        className={inputStyles}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className={inputStyles}
      />
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;
