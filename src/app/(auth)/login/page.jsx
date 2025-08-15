import LoginForm from "@/components/forms/loginform/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <div className="text-center flex-col gap-6 flex">
        <div className="mb-2">
          <h1
            className="text-4xl font-black uppercase
              text-[#FF204E] tracking-tight"
          >
            Next JS
          </h1>
        </div>
        <LoginForm />
        <div className="mt-2 text-sm">
          <span className="text-slate-300">Dont have as Account ? </span>
          <Link href="/register" className="text-teal-400 hover:text-teal-200">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
