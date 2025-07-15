// TASK 1
// Ein einzelnes Theme aus der db.js importieren –> themes[0]
// Namen des Themes in der Benutzeroberfläche anzeigen
// Komponente ColorCard erstellen zur Darstellung einer einzelnen Farbe
// Übergibt an jede ColorCard die Rolle und den Hexwert als Props
// Nutzt .map(), um alle Farben aus dem Theme dynamisch darzustellen
// Jede ColorCard zeigt: die Rolle (z.B. "primary"), den Farbwert (z.B. "#57886C"), die Farbe selbst (als Farbfeld über inline-style)
// Eine separate ColorCard.css erstellen für das Styling der Farbkarte
// Die Darstellung soll mobil-freundlich sein (iPhone SE – max 375px Breite)
// Wichtig: Kein hartkodiertes Layout – möglichst flexible Breiten verwenden

// TASK 2
// Importiert das gesamte Theme-Array aus db.js
// Durchläuft mit .map() alle Themes
// Für jedes Theme wird die Theme-Komponente gerendert
// Übergibt das Theme-Objekt als Prop an Theme.jsx
// Die Theme-Komponente ist zuständig für Anzeige und Umschaltung (Preview ↔ Detail)

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

//Task4
// Enhance the detail view component to include a delete button.
// In App.js, create a function handleDeleteTheme and implement the functionality to handle the delete action when the button is clicked.
// Ensure that deleting a theme updates the theme list appropriately.

//Task5
// ERL - Install use-local-storage-state with npm.
// ERL - Integrate the use-local-storage-state hook to manage theme state persistence.
// ERL - Inside the ColorCard component, create a local state for the color name.
// ERL - in const - Use the useEffect hook to fetch the color name from the color api and update the color name state.
// ERL - Enhance the color card component to display the color name fetched from the API.
// Test the persistence of theme state across app sessions.
// Test the fetching and display of color names to ensure accuracy.

// Task6
// ERL - Implement an edit button in the theme detail view.
// ERL - Create an edit form component {handleEditTheme} to allow users to modify theme details.
// ERL - Implement functionality to toggle {onToggle} the visibility of the edit form upon clicking the edit button.
// In App.js, integrate the edit functionality in a new function handleEditTheme.
// Test the edit functionality thoroughly to ensure accurate updating of theme details.

import { themes as initialThemes } from "./db";
import ThemeForm from "./ThemeForm";
import Theme from "./Theme";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  //ADD
  function handleAddTheme(newTheme) {
    setThemes([newTheme, ...themes]);
  }

  //DELETE
  function handleDeleteTheme(themeToRevomeId) {
    // console.log(themeId);
    const filteredThemes = themes.filter((theme) => {
      if (themeToRevomeId === theme.id) {
        return false;
      } else {
        return true;
      }
    });
    setThemes(filteredThemes);
  }

  //EDIT

  function handleEditTheme(themeToEditId, newName, newColors) {
   
    // console.log("hallo");
    const editedThemes = themes.map((theme) => {
      if (themeToEditId === theme.id) {
        return {
          id: theme.id,
          name: newName,
          colors: newColors,
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
      <ThemeForm handleAddTheme={handleAddTheme} />
      <ul>
        {themes.map((theme) => (
          <Theme
            key={theme.id}
            theme={theme}
            handleOnDelete={handleDeleteTheme}
            handleOnEdit={handleEditTheme}
          />
        ))}
      </ul>
    </>
  );
}
