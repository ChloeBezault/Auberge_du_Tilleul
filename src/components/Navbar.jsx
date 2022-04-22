import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/le tilleul">Le Tilleul</NavLink>
          </li>
          <li>
            <NavLink to="/réceptions">Réceptions</NavLink>
          </li>
        </ul>
      </nav>
    );
  }