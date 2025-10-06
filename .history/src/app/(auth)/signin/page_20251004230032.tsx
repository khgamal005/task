import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Form from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <main>
      <div className="py-44 md:py-40 bg-gray-50 flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-black mb-4">
            Sign in to your account
          </h2>

          <Form />

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <GoogleSignInButton />

          {/* Register link */}
          <p className="mt-2 flex items-center justify-center text-accent text-sm">
            <span>Don’t have an account?</span>
            <Link
              href="/signup"
              className={`${buttonVariants({
                variant: "link",
                size: "sm",
              })} !text-black`}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
