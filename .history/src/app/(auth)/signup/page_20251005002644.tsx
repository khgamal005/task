"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/app/api/auth"; // <-- your API helper

// ✅ Simple Zod validation schema
const schema = z.object({
  name: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Password must be at least 5 characters"),
  mobile: z.string().min(5, "Phone number is required"),
  mobile_country_code: z.string().min(1, "Country code is required"),
});

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError("");

    try {
      const res = await registerUser(data);

      if (res.status) {
        // ✅ Save token and go to verify page
        localStorage.setItem("token", res.data.token);
        router.push("/verify");
      } else {
        setError(res.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-center">Create Account</h1>

        <form onSubmit={(onSubmit)} className="space-y-3">
          {/* Full Name */}
          <input
            placeholder="Full Name"
            {...register("name")}
            className="border p-2 w-full rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          {/* Email */}
          <input
            placeholder="Email"
            type="email"
            {...register("email")}
            className="border p-2 w-full rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
            className="border p-2 w-full rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Phone */}
          <input
            placeholder="Phone Number"
            {...register("mobile")}
            className="border p-2 w-full rounded"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile.message}</p>
          )}

          {/* Country Code */}
          <input
            placeholder="Country Code"
            {...register("mobile_country_code")}
            className="border p-2 w-full rounded"
          />
          {errors.mobile_country_code && (
            <p className="text-red-500 text-sm">
              {errors.mobile_country_code.message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 w-full text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
