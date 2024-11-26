import { cookies } from "next/headers";

export default async function UsernamePage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { error } = await searchParams;
  
  const cookieStore = await cookies(); // Await cookies() to resolve the Promise
  const selectedOption = cookieStore.get("selectedOption")?.value || "No option selected";

  return (
    <div>
      <h1>Username Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>You selected: <strong>{selectedOption}</strong></p>
      <form method="POST" action="/api/set-username">
        <label>
          Enter your name:
          <input type="text" name="userName"  />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}