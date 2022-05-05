import { NavLink } from "react-router-dom";


export default function Header() {
    return (
      <header>
        <nav>
          <ul className="navigation-nav">
            <li className="menu-item">
              <NavLink to="/" title="auberge-du-tilleul">
              <img src="/images/logo-auberge.svg" alt="Auberge-du-tilleul" className="logo"/>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/leTilleul" title="leTilleul">Le Tilleul</NavLink>
              <div className="menu-sublist">
                <ul>
                  <li>
                  <NavLink to="/food" title="food">Notre Cuisine</NavLink>
                  </li>
                  <li>
                  <NavLink to="/halls" title="halls">Nos Salons</NavLink>
                  </li>
                  <li>
                  <NavLink to="/BusinessLunch" title="business-lunch">Repas D'affaires</NavLink>
                  </li>
                  <li>
                  <NavLink to="/TakeAway" title="take-away">Emporté</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <NavLink to="/receptions" title="receptions">Réceptions</NavLink>
              <div className="menu-sublist">
                <ul>
                  <li>
                  <NavLink to="/inside" title="inside">Chez Nous</NavLink>
                  </li>
                  <li>
                  <NavLink to="/outside" title="outside">Á L'extérieur</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <NavLink to="/forProfessionals" title="forProfessionals">Dédié aux Professionnels</NavLink>
              <div className="menu-sublist">
                <ul>
                  <li>
                  <NavLink to="/events" title="events">Evénementiel</NavLink>
                  </li>
                  <li>
                  <NavLink to="/locations" title="locations">Lieux</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/portfolio" title="portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" title="contact-reserve">Contact/Réservations</NavLink>
            </li>
          </ul>
        </nav>    
      </header>
    );
  }