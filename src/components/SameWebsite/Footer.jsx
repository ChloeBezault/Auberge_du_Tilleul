import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="container_f">
                <div className="row_f">
                    <div className="col_footer"> 
                        <h4 className="footer_heading">Regarder aussi :</h4>
                        <ul className="list-footer">
                            <li>
                                <NavLink to="/NosSalons">Nos Salons</NavLink>
                            </li>
                            <li>
                                <NavLink to="/RepasDaffaires">Repas D'affaires</NavLink>
                            </li>
                            <li>
                                <NavLink to="/chezNous">Réceptions Tilleul</NavLink>
                            </li>
                            <li>
                                <NavLink to="/exterieur">Réceptions à l'extérieur</NavLink>
                            </li>
                            <li>
                                <NavLink to="/evenementiel">Evénementiel</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Réservations</NavLink>
                            </li>
                        </ul>
                    </div>      
                    <div className="col_footer">
                        <h4 className="footer_heading">Contacts :</h4>
                        <ul className="list-footer">
                            <li>
                                <address>
                                    <p className="adress"> 14 rue du docteur Coubronne</p> 
                                    <p>59510 Hem (15KM de Lille)</p>
                                </address>
                            </li>
                            <li>
                                <a className="telephone" href="tel:+3330320839999" title="telephoneAuberge">
                                <img border="0" alt="logoFacebook" src="/images/icones_tel/telefBr.png" height="13"/>
                                (33) 03 20 83 99 99
                                </a>
                            </li>
                            <li>
                                <a className="email" href="mailto:contact@aubergedutilleul.com" title="emailAuberge">
                                <img border="0" alt="logoFacebook" src="/images/icones_tel/emailBr.png" height="16"/>
                                contact@aubergedutilleul.com
                                </a>
                            </li>
                        </ul>     
                    </div>          
                    <div className="col_footer">
                        <h4 className="footer_heading">Rejoignez-nous sur :</h4>
                        <ul className="list-footer-socials">
                            <li>
                                <a href="https://www.facebook.com/aubergedutilleul.hem" title="item-facebook"> 
                                <img border="0" alt="logoFacebook" src="/images/ico_socials/facebook.png" height="28"/>
                                @aubergedutilleul
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tripadvisor.fr/Restaurant_Review-g661482-d5801243-Reviews-Auberge_du_tilleul-Hem_Nord_Hauts_de_France.html" title="item-tripadvisor"> 
                                <img border="0" alt="logoTripadvisor" src="/images/ico_socials/tripadvisor.png" height="28"/>
                                auberge_du_tilleul
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/auberge_du_tilleul/" title="item-instagram"> 
                                <img border="0" alt="logoInstagram" src="/images/ico_socials/instagram.png" height="27"/>
                                auberge_du_tilleul
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;

