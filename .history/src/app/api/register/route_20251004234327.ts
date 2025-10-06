// app/api/register/route.ts
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const res = await fetch("https://tinytales.trendline.marketing/api/auth/register", {
      method: "POST",
      body: formData,
    });

    const text = await res.text();
    const data = JSON.parse(text);

    return new Response(JSON.stringify(data), { status: res.status });
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to connect to API" }),
      { status: 500 }
    );
  }
}
