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

import "./App.css";
import ColorCard from "./ColorCard";
import { themes } from "./db";
import Theme from "./Theme";

function App() {
  return (
    <>
      <header>Theme Creator</header>
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} />
      ))}
    </>
  );
}

export default App;
