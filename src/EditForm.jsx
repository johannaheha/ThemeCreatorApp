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

    async function fetchClosestColorNames(hex) {
      const url = `https://www.thecolorapi.com/id?hex=${hex.substring(1)}`;
      console.log(hex);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return null;
        }
        const json = await response.json();
        console.log(json);
        return json.name.value;
      } catch (error) {
        console.error(error.message);
        return null;
      }
    }
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
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" defaultValue={themeName} required />
      <input name="primary" type="color" defaultValue={primaryColor} />
      <input name="secondary" type="color" defaultValue={secondaryColor} />
      <input name="surface" type="color" defaultValue={surfaceColor} />
      <input name="surfaceOn" type="color" defaultValue={surfaceOnColor} />
      <button type="submit">Save Theme</button>
    </form>
  );
}
