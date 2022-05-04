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
                                    <p class="fa fa-map-marker"> 14 rue du docteur Coubronne</p> 
                                    <p>59510 Hem (15KM de Lille)</p>
                                </address>
                            </li>
                            <li>
                                <a class="fa fa-phone" href="tel:+3330320839999"> (33) 03 20 83 99 99</a>
                            </li>
                            <li>
                                <a class="fa fa-envelope" href="mailto:contact@aubergedutilleul.com"> contact@aubergedutilleul.com</a>
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
                                <a href="https://www.facebook.com/aubergedutilleul.hem" className="fa fa-facebook"> @aubergedutilleul.hem</a>
                                
                            </li>
                            <li>
                                <a href="https://www.tripadvisor.fr/Restaurant_Review-g661482-d5801243-Reviews-Auberge_du_tilleul-Hem_Nord_Hauts_de_France.html" className="fa fa-tripadvisor"> auberge_du_tilleul</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/auberge_du_tilleul/" className="fa fa-instagram"> auberge_du_tilleul</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;

