import "./Theme.css";
import { IconChevronUp, IconChevronDown, IconX } from "@tabler/icons-react";
import { useState } from "react";
import ColorCard from "./ColorCard";
import Form from "./Form";

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

  function onThemeSubmit(newTheme) {
    handleOnEdit(theme.id, newTheme);
    setViewState("preview");
  }

  return (
    <li className="theme-card">
      {viewState === "detail" && ( // Detailansicht
        <>
          <div className="theme-header">
            <h2>{theme.name}</h2>
            <IconChevronDown
              className="theme-header-chevron"
              onClick={onToggle}
            />
          </div>
          <div className="buttons">
            <button className="delete-button" type="button" onClick={onDelete}>
              Delete
            </button>
            <button type="button" onClick={onEdit}>
              Edit
            </button>
          </div>
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
          <div className="theme-header">
            <h2>{theme.name}</h2>
            <IconChevronUp
              className="theme-header-chevron"
              onClick={onToggle}
            />
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
          <div className="theme-header">
            <h2>{theme.name}</h2>

            <IconX className="theme-header-chevron" onClick={onToggle} />
          </div>
          <Form
            isEdit={true}
            onThemeSubmit={onThemeSubmit}
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
