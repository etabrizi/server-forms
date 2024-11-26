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
  const usernameUrl = new URL("/username", req.url);
  const response = NextResponse.redirect(usernameUrl.toString());
  response.cookies.set("selectedOption", selectedOption, { httpOnly: true });

  return response;
}
