export async function GET() {
  const options = [
    { value: "UX designer", label: "UX designer" },
    { value: "UI Developer", label: "UI Developer" },
    { value: "Neither", label: "Neither" },
  ];

  return new Response(JSON.stringify(options), { status: 200 });
}
