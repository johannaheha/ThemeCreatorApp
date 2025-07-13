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

import "./App.css";
import ColorCard from "./ColorCard";
import { themes } from "./db";

function App() {
  const theme = themes[0];

  return (
    <>
      <header>Theme Creator</header>
      <h1>{theme.name}</h1>
      <ul>
        {theme.colors.map((color) => (
          <ColorCard key={color.role} role={color.role} value={color.value} />
        ))}
      </ul>
    </>
  );
}

export default App;
