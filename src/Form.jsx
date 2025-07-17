import fetchClosestColorNames from "./FetchClosestColorNames.js";
import "./Form.css";

export default function Form({
  onSubmit,
  themeName = "",
  primaryColor = "#ff0000",
  secondaryColor = "#00ff00",
  surfaceColor = "#0000ff",
  surfaceOnColor = "#000000",
  isEdit = true,
}) {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const primaryName = await fetchClosestColorNames(form.primary.value);
    const secondaryName = await fetchClosestColorNames(form.secondary.value);
    const surfaceName = await fetchClosestColorNames(form.surface.value);
    const surfaceOnName = await fetchClosestColorNames(form.surfaceOn.value);

    const name = form.title.value;
    const colors = [
      { role: "primary", name: primaryName, value: form.primary.value },
      { role: "secondary", name: secondaryName, value: form.secondary.value },
      { role: "surface", name: surfaceName, value: form.surface.value },
      {
        role: "surface-on",
        name: surfaceOnName,
        value: form.surfaceOn.value,
      },
    ];
    const newTheme = { name, colors };
    onSubmit(newTheme);
    form.reset();
  }
  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h3>{isEdit? "Edit Theme" : "Create a Theme"}</h3>
      <input
        className="theme-title-input"
        name="title"
        type="text"
        defaultValue={themeName}
        required
      />
      <div className="color-fields">
        <input name="primary" type="color" defaultValue={primaryColor} />
        <input name="secondary" type="color" defaultValue={secondaryColor} />
        <input name="surface" type="color" defaultValue={surfaceColor} />
        <input name="surfaceOn" type="color" defaultValue={surfaceOnColor} />
      </div>
      <button className="submit-button" type="submit">
        {isEdit ? "Save Theme" : "Add Theme"}
      </button>
    </form>
  );
}
