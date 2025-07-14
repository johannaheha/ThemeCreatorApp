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

import { useState } from "react";
import { themes as initialThemes } from "./db";
import ThemeForm from "./ThemeForm";
import Theme from "./Theme";
import "./App.css";

export default function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    setThemes([newTheme, ...themes]);
  }

  return (
    <>
      <header>Theme Creator</header>
      <ThemeForm handleAddTheme={handleAddTheme} />
      <ul>
        {themes.map((theme) => (
          <Theme key={theme.id} theme={theme} />
        ))}
      </ul>
    </>
  );
}
