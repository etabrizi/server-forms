import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const userName = formData.get("userName")?.toString() || "";

  if (!userName) {
    // Use custom domain here for the error redirect
    const customDomain = process.env.CUSTOM_DOMAIN || 'https://server-form-example.netlify.app';
    const errorUrl = new URL("/username?error=Please+enter+a+valid+name", customDomain);
    return NextResponse.redirect(errorUrl.toString());
  }

  // Use custom domain for success URL
  const customDomain = process.env.CUSTOM_DOMAIN || 'https://server-form-example.netlify.app';
  const successUrl = `${customDomain}/success`;

  const response = NextResponse.redirect(successUrl);
  response.cookies.set("userName", userName, { httpOnly: true });

  return response;
}
