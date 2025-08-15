"use client";
import Button from "@/components/button/Button";
import { inputStyles } from "@/context";
import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault;
    alert("Submitted !");
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-4 w-full"
      autoComplete="off"
    >
      <input
        type="text"
        name="name"
        placeholder="name"
        className={`${inputStyles}  md:min-w-[450px]`}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className={`${inputStyles}  md:min-w-[450px]`}
      />
      <textarea
        name="message"
        rows={4}
        placeholder="message"
        className={`${inputStyles} md:min-w-[450px]`}
      ></textarea>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactForm;
