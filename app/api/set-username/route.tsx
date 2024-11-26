import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const userName = formData.get("userName")?.toString() || "";

  if (!userName) {
    const errorUrl = new URL("/username?error=Please+enter+a+valid+name", req.url);
    return NextResponse.redirect(errorUrl.toString());
  }

  const url = new URL(req.url);
  const successUrl = `${url.origin}/success`;
  const response = NextResponse.redirect(successUrl);
  response.cookies.set("userName", userName, { httpOnly: true });

  return response;
}