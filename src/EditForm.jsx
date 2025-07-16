import fetchClosestColorNames from "./FetchClosestColorNames.js";

export default function EditForm({
  themeName,
  handleEditTheme,
  primaryColor,
  secondaryColor,
  surfaceColor,
  surfaceOnColor,
}) {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const primaryName = await fetchClosestColorNames(form.primary.value);
    const secondaryName = await fetchClosestColorNames(form.secondary.value);
    const surfaceName = await fetchClosestColorNames(form.surface.value);
    const surfaceOnName = await fetchClosestColorNames(form.surfaceOn.value);

    const newName = form.title.value;
    const newColors = [
      { role: "primary", name: primaryName, value: form.primary.value },
      { role: "secondary", name: secondaryName, value: form.secondary.value },
      { role: "surface", name: surfaceName, value: form.surface.value },
      {
        role: "surface-on",
        name: surfaceOnName,
        value: form.surfaceOn.value,
      },
    ];

    handleEditTheme(newName, newColors);
    form.reset();
  }
  return (
    <form className="edit-theme-form" onSubmit={handleSubmit}>
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
      <button type="submit">Save Theme</button>
    </form>
  );
}
