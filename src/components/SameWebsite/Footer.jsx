import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* Column 1 - links Faster */}
                    <div className="footer-col"> 
                        <h4>Regarder aussi:</h4>
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
                </div>
                <div className="row">
                    {/* Column 1 - contact-footer */}
                    <div className="footer-col">
                        <h4>Contacts</h4>
                        <ul className="list-footer">
                            <li>
                                <address>
                                    <p>14 rue du docteur Coubronne</p> 
                                    <p>59510 Hem (15KM de Lille)</p>
                                </address>
                            </li>
                            <li>
                                <a class="contact-list" href="tel:+3330320839999">03.20.83.99.99</a>
                            </li>
                            <li>
                                <a class="contacts-email-list" href="mailto:contact@aubergedutilleul.com">contact@aubergedutilleul.com</a>
                            </li>
                        </ul>     
                    </div>          
                </div>
                <div className="row">
                    {/* Column 1 - social-media */}
                    <div className="footer-col">
                        <h4>Rejoignez-nous sur:</h4>
                        <ul className="list-footer-socials">
                            <li>
                                @aubergedutilleul.hem
                            </li>
                            <li>
                                auberge_du_tilleul
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;

