import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [ OpenMenu , setOpenMenu ] = useState(false);


  function OpenClose() {
    
    setOpenMenu(!OpenMenu)
    
  }


    return (
      <header>  
        <h1 className="TitleSite">
        <NavLink to="/" title="auberge-du-tilleul">
          <img src="/images/logo-auberge.svg" alt="Auberge-du-tilleul" className="logo"/>
        </NavLink> 
        </h1> 
        <nav> 
          <ul className={ "menu " + (OpenMenu ? "show" : "")}> 
            <li className="menu-item">
              <NavLink to="/leTilleul" title="leTilleul">
                Le Tilleul
                <i className="fas fa-angle-down"></i>
              </NavLink>
              <ul className="menu-sublist ">
                <li className="item-sublist">
                <NavLink to="/food" title="food">Notre Cuisine</NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/halls" title="halls">Nos Salons</NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/BusinessLunch" title="business-lunch">Repas D'affaires</NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/TakeAway" title="take-away">Emporté</NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <NavLink to="/receptions" title="receptions">
                Réceptions
                <i className="fas fa-angle-down" onClick={() => {
                OpenClose(!OpenMenu)}}></i>
              </NavLink>
              <ul className="menu-sublist">
                <li className="item-sublist">
                <NavLink to="/inside" title="inside">Chez Nous</NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/outside" title="outside">Á L'extérieur</NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <NavLink to="/forProfessionals" title="forProfessionals">
                Dédié aux Professionnel
                <i className="fas fa-angle-down"></i>
              </NavLink>
              <ul className="menu-sublist">
                <li className="item-sublist">
                <NavLink to="/events" title="events">Evénementiel</NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/locations" title="locations">Lieux</NavLink>
                </li>
              </ul>  
            </li>
            <li className="menu-item">
              <NavLink to="/portfolio" title="portfolio">Portfolio</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/contact" title="contact-reserve">Contact/Réservations</NavLink>
            </li>
          </ul>
          <button  
            aria-label="Ouvrir Menu"
            type="button"
            className="btn-hamburguer"
            onClick={() => {
              OpenClose(!OpenMenu)}}
          >
          </button>
        </nav> 
      </header>

  );
}

