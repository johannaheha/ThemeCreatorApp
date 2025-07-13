//TASK1
// Komponente ColorCard erstellen zur Darstellung einer einzelnen Farbe:
//      Set up a React CC component for displaying a single color card
//      Display hex values and roles on each color card
//      Style color cards to accurately represent the colors
// CSS importieren
//


import "./ColorCard.css";

export default function ColorCard({ role, value }) {
  return (
    <li className="color-card">
      <div className="color-info">
        <h2>{role}</h2>
        <h3>{value}</h3>
      </div>
      <div className="color-swatch" style={{ backgroundColor: value }}></div>
    </li>
  );
}
