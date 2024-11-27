import Radio from "./components/Radio";
import Fieldset from "./components/Fieldset";
import Button from "./components/Button";

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
        <Fieldset legend="Select your profession:">
          {options.length > 0 ? (
            options.map(({ label, value }: RadioOption) => (
              <div key={value}>
                <Radio value={value} label={label} name="option" />
              </div>
            ))
          ) : (
            <p>Loading options...</p>
          )}
        </Fieldset>
        <Button text="Next" />
      </form>
    </div>
  );
}
