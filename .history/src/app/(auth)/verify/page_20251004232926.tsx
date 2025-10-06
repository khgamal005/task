"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function VerifyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<VerifySchem>({
    resolver: zodResolver(verifySchema),
    defaultValues: { code: "" },
  });

  const onSubmit = async (values: VerifySchema) => {
    setLoading(true);
    try {
      // ✅ Simulate verification check
      if (values.code === "123456") {
        alert("Account verified successfully!");
        router.push("/login");
      } else {
        form.setError("code", { message: "Invalid verification code" });
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Verify Your Account
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Verifying..." : "Verify"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
