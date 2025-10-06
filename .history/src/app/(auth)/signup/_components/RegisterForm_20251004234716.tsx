"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { registerSchema, RegisterSchema } from "../../../../../validations/auth";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      country_code: "",
    },
  });

  const onSubmit = async (values: RegisterSchema) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("password_confirmation", values.password);
      formData.append("phone", values.phone);
      formData.append("country_code", values.country_code);

      const res = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      type RegisterResponse = {
        data?: {
          token?: string;
        };
        message?: string;
      };
      let data: RegisterResponse;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid response format from server");
      }

      console.log("Register response:", data);

      if (res.ok && data?.data?.token) {
        localStorage.setItem("token", data.data.token);
        router.push("/verify");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err: unknown) {
      console.error("Error:", err);
      if (err instanceof Error) {
        alert(err.message || "Something went wrong");
      } else {
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-md mx-auto"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="e.g. 01012345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country Code */}
        <FormField
          control={form.control}
          name="country_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country Code</FormLabel>
              <FormControl>
                <Input placeholder="+20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
}
