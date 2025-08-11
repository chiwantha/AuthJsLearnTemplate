import ExplainCard from "@/components/valuecard/ExplainCard";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Providers",
    description: "Support for OAuth, Email, and custom logins.",
    link: "https://authjs.dev/reference/core/providers",
  },
  {
    title: "Sessions",
    description: "Secure session handling with cookies or JWT.",
    link: "https://authjs.dev/guides/basics/session-management",
  },
  {
    title: "JWT",
    description: "Built-in JSON Web Token authentication.",
    link: "https://authjs.dev/guides/basics/role-based-access-control",
  },
  {
    title: "Security",
    description: "CSRF protection and encrypted tokens.",
    link: "https://authjs.dev/guides/security",
  },
  {
    title: "Database",
    description: "Store users in any supported database.",
    link: "https://authjs.dev/guides/providers/credentials",
  },
  {
    title: "Flexibility",
    description: "Easily customize authentication flow.",
    link: "https://authjs.dev",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col gap-6 w-full justify-center">
        {/* what is this? */}

        <div className="flex flex-col justify-center items-center gap-6 w-full md:w-[80%]">
          <h1
            className="text-4xl md:text-5xl font-black  text-transparent
          bg-gradient-to-bl from-[#b333fd] to-[#4928da] bg-clip-text"
          >
            What Is This
          </h1>
          <p className="md:text-lg text-[16px] text-center text-slate-300 w-[75%]">
            This is a demo application showcasing the capabilities of Auth.js.
            It demonstrates how to implement authentication in a Next.js
            application using various providers.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            {features.map((feature, index) => (
              <ExplainCard
                key={index}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
          <span className="text-[16px] text-slate-300">
            Learn More About{" "}
            <Link
              href="https://authjs.dev"
              target="_blank"
              className="text-blue-500 font-bold "
            >
              Auth.js
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
