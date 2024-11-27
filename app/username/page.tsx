import { cookies } from "next/headers";
import Textbox from "../components/Textbox";
import Button from "../components/Button";

export default async function UsernamePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const { error } = await searchParams;
  const customDomain = process.env.CUSTOM_DOMAIN;
  const cookieStore = await cookies();
  const selectedOption =
    cookieStore.get("selectedOption")?.value || "No option selected";

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        You selected: <strong>{selectedOption}</strong>
      </p>
      <form method="POST" action={`${customDomain}/api/set-username`}>
        <Textbox id="userName" label="Enter your name" name="userName" />
        <Button text="Next" />
      </form>
    </div>
  );
}
