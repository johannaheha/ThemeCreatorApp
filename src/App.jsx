import { themes as initialThemes } from "./db";
import Theme from "./Theme";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import Form from "./Form";

export default function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  //ADD
  function handleAddTheme(newTheme) {
    newTheme.id = crypto.randomUUID();
    setThemes([newTheme, ...themes]);
  }

  //DELETE
  function handleOnDelete(idToRemove) {
    const filteredThemes = themes.filter((theme) => idToRemove !== theme.id);
    setThemes(filteredThemes);
  }

  //EDIT

  function handleOnEdit(idToEdit, editTheme) {
    const editedThemes = themes.map((theme) => {
      if (idToEdit === theme.id) {
        return {
          ...editTheme,
          id: theme.id,
        };
      } else {
        return theme;
      }
    });
    setThemes(editedThemes);
  }

  return (
    <>
      <header>Theme Creator</header>
      <Form onThemeSubmit={handleAddTheme} isEdit={false} />
      <ul>
        {themes.map((theme) => (
          <Theme
            key={theme.id}
            theme={theme}
            handleOnDelete={handleOnDelete}
            handleOnEdit={handleOnEdit}
          />
        ))}
      </ul>
    </>
  );
}
