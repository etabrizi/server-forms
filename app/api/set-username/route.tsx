import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const userName = formData.get("userName")?.toString() || "";

  if (!userName) {
    const customDomain = process.env.CUSTOM_DOMAIN;
    const errorUrl = new URL("/username?error=Please+enter+a+valid+name", customDomain);
    return NextResponse.redirect(errorUrl.toString());
  }


  const customDomain = process.env.CUSTOM_DOMAIN;
  const successUrl = `${customDomain}/success`;

  const response = NextResponse.redirect(successUrl);
  response.cookies.set("userName", userName, { httpOnly: true });

  return response;
}
