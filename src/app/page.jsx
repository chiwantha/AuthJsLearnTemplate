import FeatureCard from "@/components/valuecard/FeatureCard";
import ValueCard from "@/components/valuecard/ValueCard";
import Image from "next/image";

const features = [
  "SSR",
  "SSG",
  "SEO",
  "Automatic routing",
  "API routes support",
  "Hybrid rendering modes",
];

export default function Home() {
  return (
    <div className="w-full flex gap-6 flex-col">
      {/* image */}
      <div className="w-full min-h-[200px] mt-4 relative">
        <Image
          src={"https://authjs.dev/img/etc/logo-sm.webp"}
          alt="Auth.js Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full flex md:flex-row flex-col">
        {/* authjs description */}
        <div
          className="w-full p-4  flex flex-col justify-start
         items-end text-right space-y-4"
        >
          <h1
            className="text-7xl font-black tracking-tight text-transparent
          bg-gradient-to-bl from-[#fd335b] to-[#da285d] bg-clip-text"
          >
            AuthJs
          </h1>
          <p className=" text-red-300">
            Next.js with Auth.js enables you to build fast, SEO-friendly web
            apps with secure, flexible authentication out of the box
          </p>
          <div className="grid-cols-2 lg:grid-cols-3 grid gap-4 w-full">
            <ValueCard title="Users" value="10M" />
            <ValueCard title="Sessions" value="50K" />
            <div className="col-span-2 lg:col-span-1">
              <ValueCard title="Active Users" value="300" />
            </div>
          </div>
        </div>
        {/* nextjs content */}
        <div className="flex gap-4 items-start w-full p-4 flex-col justify-center">
          <div className="flex gap-2 flex-wrap">
            {features.map((feature, index) => (
              <FeatureCard key={index} text={feature} />
            ))}
          </div>
          <h1
            className="text-7xl mt-[-10px] font-black tracking-tight text-transparent
          bg-gradient-to-bl from-[#e2e2e2] to-[#a5a1e2] bg-clip-text"
          >
            NextJs
          </h1>
          <p className=" text-blue-300">
            Next.js is a React framework for fast, SEO-friendly websites with
            easy routing and server-side rendering.
          </p>
        </div>
      </div>
    </div>
  );
}
