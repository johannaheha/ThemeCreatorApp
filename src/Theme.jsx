// TASK 2
// Create separate React components for preview and detail view of themes.
// Create a React component called Theme.
// Inside the Theme component, implement a toggle functionality between preview and detail view for themes.
// Iterate over the list of given color themes and create a Theme component for each.
// Ensure that toggling between views updates the display accordingly.
// Test toggling functionality with different themes to ensure it works as expected.
// * * * * * * * * * * * * * * * * * * *
// Themes importieren
// Erwartet ein Theme-Objekt als Prop, z.B. { name: "Athena", colors: [...] }
// useState -> Lokaler State, um zwischen Vorschau- und Detailansicht umzuschalten
// Klick-Handler, der beim Klicken auf den Kopfbereich die Ansicht toggelt
// Wenn isOpen false ist: Nur Theme-Name + kleine Farbkästchen anzeigen
// Wenn isOpen true ist: Theme-Name + große ColorCards anzeigen
// Wenn geöffnet: Pfeil nach oben
// Wenn geschlossen: Pfeil nach unten
// Theme.css, weil alle Styles für Theme-Komponente ausgelagert werden sollen
// WICHTIG: Diese Komponente wird mehrfach von App.jsx gerendert – für jedes Theme im Array.

import "./Theme.css";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import ColorCard from "./ColorCard";
import EditForm from "./EditForm";

export default function Theme({ theme, handleOnDelete, handleOnEdit }) {
  const [viewState, setViewState] = useState("preview");
  //preview, detail, edit

  function onToggle() {
    if (viewState === "preview") {
      setViewState("detail");
    } else if (viewState === "detail") {
      setViewState("preview");
    } else if (viewState === "edit") {
      setViewState("preview");
    }
  }
  function onDelete() {
    handleOnDelete(theme.id);
  }

  function onEdit() {
    setViewState("edit");
  }

  function onSubmit(newName, newColors) {
    handleOnEdit(theme.id, newName, newColors);
    setViewState("preview");
  }

  return (
    <li className="theme-card">
      {viewState === "detail" && ( // Detailansicht
        <>
          <div className="theme-header" onClick={onToggle}>
            <h2>{theme.name}</h2>
            <IconChevronDown />
          </div>
          <button type="button" onClick={onDelete}>
            Delete
          </button>
          <button type="button" onClick={onEdit}>
            Edit
          </button>
          <ul className="theme-detail">
            {theme.colors.map((color) => (
              <ColorCard
                key={color.role}
                role={color.role}
                value={color.value}
                name={color.name}
              />
            ))}
          </ul>
        </>
      )}

      {viewState === "preview" && (
        // Vorschauansicht
        <>
          <div className="theme-header" onClick={onToggle}>
            <h2>{theme.name}</h2>
            <IconChevronUp />
          </div>
          <ul className="theme-preview">
            {theme.colors.map((color) => (
              <li
                key={color.role}
                className="preview-swatch"
                style={{ backgroundColor: color.value }}
              ></li>
            ))}
          </ul>
        </>
      )}

      {viewState === "edit" && (
        //Bearbeitungsansicht
        <>
          <div className="theme-header" onClick={onToggle}>
            <h2>{theme.name}</h2>
            <h3>Edit Theme</h3>
            <IconChevronUp />
          </div>
          <EditForm
            handleEditTheme={onSubmit}
            themeName={theme.name}
            primaryColor={theme.colors[0].value}
            secondaryColor={theme.colors[1].value}
            surfaceColor={theme.colors[2].value}
            surfaceOnColor={theme.colors[3].value}
          />
        </>
      )}
    </li>
  );
}
