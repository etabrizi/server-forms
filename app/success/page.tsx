import { cookies } from "next/headers";

export default async function SuccessPage() {
  const cookieStore = await cookies();
  const selectedOption = cookieStore.get("selectedOption")?.value || "No option selected";
  const userName = cookieStore.get("userName")?.value || "Anonymous";

  return (
    <div>
      <h1>Success!</h1>
      <p>Welcome, {userName}!</p>
      <p>You selected: {selectedOption}</p>
    </div>
  );
}
