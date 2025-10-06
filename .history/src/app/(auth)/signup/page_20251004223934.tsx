import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import Form from "./_components/Form";
import GoogleSignInButton from "./_components/GoogleSignInButton";

async function RegisterPage() {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  return (
    <main>
      <div className="py-44 md:py-40 bg-gray-50 element-center">
        <div className="container element-center">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-black mb-4">
              {translations.auth.register.title ?? "Create Account"}
            </h2>

            <Form translations={translations} />

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <GoogleSignInButton callbackUrl={`/${locale}`} />

            {/* Login link */}
            <p className="mt-2 flex items-center justify-center text-accent text-sm">
              <span>{translations.auth.register.authPrompt?.message ?? "Already have an account?"}</span>
              <Link
                href={`/${locale}/${Routes.AUTH}/${Pages.Login}`}
                className={`${buttonVariants({
                  variant: "link",
                  size: "sm",
                })} !text-black`}
              >
                {translations.auth.register.authPrompt?.loginLinkText ?? "Sign in"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
