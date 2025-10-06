// app/api/register/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Forward the request to the real backend API
    const res = await fetch("https://tinytales.trendline.marketing/api/auth/register", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
