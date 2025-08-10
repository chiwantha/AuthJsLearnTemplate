import RegisterForm from "@/components/auth/registerform/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
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
        <RegisterForm />
        <div className="mt-2 text-sm">
          <span className="text-slate-300">Already Have Account ? </span>
          <Link href="/login" className="text-teal-400 hover:text-teal-200">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
