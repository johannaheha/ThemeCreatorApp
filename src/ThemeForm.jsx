// TASK3
// Create a React component for the theme form. --> themeForm.jsx
// Design the form layout with appropriate input fields for title and colors. -->Textfeld+4Farbfelder
// Use uncontrolled inputs and give the input fields a defaultValue. --> defaultValue kein useState
// Make the name input required. --> required im input-text-feld!
// Inside App.js, create a new state called themes --> const [themes, setThemes] = useState(...)
// and paste the themes from the db.js as the initial value. --> import { themes as initialThemes }
// Create a function called handleAddTheme with a newTheme parameter which adds it at the top of the theme array state.
// pass the handleAddTheme function to the theme form component. --> <ThemeForm handleAddTheme={handleAddTheme} />
// Test the form to ensure it successfully adds themes with titles and colors.

export default function ThemeForm({ handleAddTheme }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const randomID = crypto.randomUUID();

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

    const newTheme = {
      id: randomID,
      name: form.title.value,
      colors: [
        { role: "primary", name: primaryName, value: form.primary.value },
        { role: "secondary", name: secondaryName, value: form.secondary.value },
        { role: "surface", name: surfaceName, value: form.surface.value },
        {
          role: "surface-on",
          name: surfaceOnName,
          value: form.surfaceOn.value,
        },
      ],
    };
    handleAddTheme(newTheme);
    form.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" defaultValue="" required />
      <input name="primary" type="color" defaultValue="#ff0000" />
      <input name="secondary" type="color" defaultValue="#00ff00" />
      <input name="surface" type="color" defaultValue="#0000ff" />
      <input name="surfaceOn" type="color" defaultValue="#000000" />
      <button type="submit">Add Theme</button>
    </form>
  );
}
