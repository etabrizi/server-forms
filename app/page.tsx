export default async function Home({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const { error } = await searchParams;

  
  const customDomain = process.env.CUSTOM_DOMAIN;

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form method="POST" action={`${customDomain}/api/set-option`}>
        <fieldset>
          <legend>Select an option:</legend>
          <label>
            <input type="radio" name="option" value="option1" />
            Option 1
          </label>
          <br />
          <label>
            <input type="radio" name="option" value="option2" />
            Option 2
          </label>
          <br />
          <label>
            <input type="radio" name="option" value="option3" />
            Option 3
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
