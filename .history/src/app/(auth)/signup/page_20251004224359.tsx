import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Form from "./_components/RegisterForm";

export default function RegisterPage() {
  return (
    <main>
      <div className="py-44 md:py-40 bg-gray-50 flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-black mb-4">
            Create Account
          </h2>

          <Form />

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>


          {/* Login link */}
          <p className="mt-2 flex items-center justify-center text-accent text-sm">
            <span>Already have an account?</span>
            <Link
              href="/login"
              className={`${buttonVariants({
                variant: "link",
                size: "sm",
              })} !text-black`}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
