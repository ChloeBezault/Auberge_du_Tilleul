import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [ OpenMenu , setOpenMenu ] = useState(false);

  const [ SubMenuTilleul, setSubMenuTilleul ] = useState(true);
  const [ SubMenuReceptions, setSubMenuReceptions ] = useState(false);
  const [ SubMenuPro, setSubMenuPro ] = useState(false);

  

  function OpenClose() {
    console.log(OpenMenu)
    setOpenMenu(!OpenMenu)
    
  }

  function OpenCloseTilleul() {
    console.log(SubMenuTilleul)
    setSubMenuTilleul(!SubMenuTilleul)

  }

  function OpenCloseReceptions() {
    
    setSubMenuReceptions(!SubMenuReceptions)

  }

  function OpenClosePro() {
    
    setSubMenuPro(!SubMenuPro)

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
              <button  
                aria-label="Ouvrir SubMenu"
                type="button"
                className="btn-SubMenu"
                onClick={() => {
                  OpenCloseTilleul(!SubMenuTilleul)}}
              >
                Le Tilleul
                <i className="fas fa-angle-down"></i>
              </button>
              <ul className={"menu-sublist" + (SubMenuTilleul ? " unhide" : "")}>
                <li className="item-sublist">
                <NavLink to="/food" title="food" onClick={() => {
                  OpenClose()}}>
                  Notre Cuisine
                </NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/halls" title="halls" onClick={() => {
                  OpenClose()}}> 
                  Nos Salons
                </NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/BusinessLunch" title="business-lunch" onClick={() => {
                  OpenClose()}}>
                  Repas D'affaires
                </NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/TakeAway" title="take-away" onClick={() => {
                  OpenClose()}}>
                  Emporté
                </NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <button  
                aria-label="Ouvrir SubMenu"
                type="button"
                className="btn-SubMenu"
                onClick={() => {
                  OpenCloseReceptions(!SubMenuReceptions)}}
              >
                Réceptions
                <i className="fas fa-angle-down"></i>
              </button>
              <ul className={"menu-sublist" + (SubMenuReceptions ? " unhide" : "")}>
                <li className="item-sublist">
                <NavLink to="/inside" title="inside" onClick={() => {
                  OpenClose()}}>
                    Chez Nous
                </NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/outside" title="outside" onClick={() => {
                  OpenClose()}}>
                  Á L'extérieur
                </NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <button  
                aria-label="Ouvrir SubMenu"
                type="button"
                className="btn-SubMenu"
                onClick={() => {
                  OpenClosePro(!SubMenuPro)}}
              >
                Dédié aux Professionnel
                <i className="fas fa-angle-down"></i>
              </button>
              <ul className={"menu-sublist" + (SubMenuPro ? " unhide" : "")}>
                <li className="item-sublist">
                <NavLink to="/events" title="events" onClick={() => {
                  OpenClose()}}>
                  Evénementiel
                </NavLink>
                </li>
                <li className="item-sublist">
                <NavLink to="/locations" title="locations" onClick={() => {
                  OpenClose()}}>
                  Lieux
                </NavLink>
                </li>
              </ul>  
            </li>
            <li className="menu-item">
              <NavLink to="/portfolio" title="portfolio" onClick={() => {
                OpenClose()}}>
                Portfolio
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/contact" title="contact-reserve" onClick={() => {
                OpenClose()}}>
                Contact/Réservations
              </NavLink>
            </li>
          </ul>
          <button  
            aria-label="Ouvrir Menu"
            type="button"
            className="btn-hamburguer"
            onClick={() => {
              OpenClose()}}
          >
          </button>
        </nav> 
      </header>

  );
}

