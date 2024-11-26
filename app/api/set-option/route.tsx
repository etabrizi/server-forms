import { NextResponse } from "next/server";
import { parse } from "querystring";

export async function POST(req: Request) {
  const body = await req.text();
  const formData = parse(body);
  const selectedOption = Array.isArray(formData.option) ? formData.option[0] : formData.option;

  // Validation logic
  if (!selectedOption) {
    const errorUrl = new URL("/?error=Please+select+a+valid+option", req.url);
    return NextResponse.redirect(errorUrl.toString());
  }

  // Use the custom domain environment variable or fallback to a default production domain
  const customDomain = process.env.CUSTOM_DOMAIN || 'https://server-form-example.netlify.app';

  // Construct the redirect URL using the custom domain
  const usernameUrl = new URL("/username", customDomain);  // Use customDomain here

  const response = NextResponse.redirect(usernameUrl.toString());
  response.cookies.set("selectedOption", selectedOption, { httpOnly: true });

  return response;
}
