import ExplainCard from "@/components/valuecard/ExplainCard";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const aboutAccordionData = [
  {
    title: "How to Use",
    description:
      "Install Auth.js with npm or yarn, configure your authentication provider, and set up API routes to handle login and sessions.",
  },
  {
    title: "Platforms",
    description:
      "Works with Next.js, Remix, and any Node.js environment that supports API routes, making it highly flexible.",
  },
  {
    title: "Free?",
    description:
      "Yes, Auth.js is fully open-source under the MIT license, making it free for personal and commercial use.",
  },
];

const tabsData = [
  {
    value: "Vue",
    label: "Vue",
    description:
      "Auth.js works seamlessly with Vue.js applications, giving you a flexible and secure authentication system. It integrates smoothly with Vue's reactive framework, making user login, session management, and provider integration simple and efficient.",
  },
  {
    value: "NextJs",
    label: "NextJs",
    description:
      "Auth.js provides tight integration with Next.js, allowing developers to easily handle authentication, sessions, and secure login flows. Whether using OAuth providers or email/password logins, it makes Next.js applications safe, scalable, and easy to maintain.",
  },
  {
    value: "ReactJs",
    label: "ReactJs",
    description:
      "Auth.js is fully compatible with React.js, enabling you to implement authentication quickly without extra boilerplate. You can manage users, sessions, and third-party logins effectively, keeping your React applications secure and developer-friendly.",
  },
  {
    value: "Laravel",
    label: "Laravel",
    description:
      "Auth.js can be used with Laravel applications to create a robust authentication system. It leverages Laravel’s features while providing flexibility for custom login flows, session management, and secure user authentication for modern web applications.",
  },
];

const AboutPage = () => {
  return (
    <div className="w-full space-y-6">
      <div className="flex md:flex-row flex-col gap-6 w-full justify-center ">
        {/* what is this? */}
        <div className="flex flex-col justify-center items-center gap-6 w-full ">
          <h1
            className="text-4xl md:text-5xl font-black  text-transparent
          bg-gradient-to-bl from-[#b333fd] to-[#4928da] bg-clip-text"
          >
            What Is Thiss
          </h1>
          <p className="md:text-lg  text-center text-slate-300 w-[75%]">
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
          <span className="text-lg text-slate-300">
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
      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-6 w-full ">
        {/* addordian */}
        <div className="order-2 md:order-1">
          <Accordion type="single" collapsible>
            {aboutAccordionData.map((item, index) => (
              <AccordionItem
                value={index + 1}
                key={index}
                className={"space-y-4"}
              >
                <AccordionTrigger
                  className={`font-bold text-xl hover:bg-[#64275d]/60 bg-[#582556]/60 items-center
            ${index % 2 == 1 ? "text-[#FF496D]" : `text-[#B970EC]`} px-4 py-2 `}
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent
                  className={`text-slate-300 px-4 
                border-l-4 text-lg mb-4 ${
                  index % 2 == 1 ? "border-[#FF496D]" : `border-[#B970EC]`
                }`}
                >
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* tabs */}
        <div className="order-1 md:order-2">
          <Tabs defaultValue="NextJs" className="w-full">
            <TabsList>
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`font-bold text-xl`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabsData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <p className="text-slate-300  text-lg">{tab.description}</p>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
