import Radio from "./components/Radio";

interface RadioOption {
  label: string;
  value: string;
}

async function fetchRadioOptions() {
  const res = await fetch(`${process.env.CUSTOM_DOMAIN}/api/radio-options`);
  const options = await res.json();
  return options;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const { error } = await searchParams;

  const customDomain = process.env.CUSTOM_DOMAIN;

  const options = await fetchRadioOptions();

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form method="POST" action={`${customDomain}/api/set-option`}>
        <fieldset>
          <legend>Select your profession:</legend>
          {options.length > 0 ? (
            options.map(({ label, value }: RadioOption) => (
              <div key={value}>
                <Radio value={value} label={label} name="option" />
              </div>
            ))
          ) : (
            <p>Loading options...</p>
          )}
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
