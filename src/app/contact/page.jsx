import ContactForm from "@/components/forms/contactform/ContactForm";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* details */}
      <div
        className="min-w-[300px] md:min-w-[450px]
       space-y-4 flex justify-center flex-col items-center"
      >
        <h1
          className="text-5xl font-black uppercase
              text-[#FF204E] tracking-tight text-center"
        >
          Support
        </h1>
        <Separator className={`bg-slate-50/20`} />
        <p className="w-[300px] md:w-[450px] text-center text-slate-300 text-[18px]">
          Whether you have a question about our services, need assistance, or
          just want to say hello, we’re here to help. Fill out the form below
          and our team will get back to you as soon as possible
        </p>
        <Separator className={`bg-slate-50/20`} />
        <div className="flex gap-4 items-center text-6xl font-bold">
          <FaReact className="text-cyan-400" />
          <TbBrandNextjs className="text-gray-400" />
          <FaNodeJs className="text-yellow-400" />
        </div>
      </div>
      {/* contact form */}
      <div className="rounded-lg">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
