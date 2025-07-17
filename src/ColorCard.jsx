import "./ColorCard.css";

export default function ColorCard({ role, value, name }) {
  return (
    <li className="color-card">
      <div className="color-info">
        <h2>{role}</h2>
        <h2>{name}</h2>
        <h3>{value}</h3>
      </div>
      <div className="color-swatch" style={{ backgroundColor: value }}></div>
    </li>
  );
}
