import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/leTilleul">Le Tilleul</NavLink>
          </li>
          <li>
            <NavLink to="/receptions">Réceptions</NavLink>
          </li>
          <li>
            <NavLink to="/forProfessionals">Dédié aux Professionnels</NavLink>
          </li>
          <li>
            <NavLink to="/">Auberge du tilleul</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact/Réservations</NavLink>
          </li>
          <li>
            <NavLink to="/language">En</NavLink>
          </li>
        </ul>
      </nav>
    );
  }