import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="faster-links">
                <ul>
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
                        <NavLink to="/create">Réservations</NavLink>
                    </li>
                </ul>
            </div>
            <div className="contact-footer">
                <ul>
                    <li>
                        <address>
                            14 rue du docteur Coubronne 
                            59510 Hem (15KM de Lille)  
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
            <div className="social-media">
                <ul>
                    <li>
                        @aubergedutilleul.hem
                    </li>
                    <li>
                        auberge_du_tilleul
                    </li>
                </ul>
            </div>
        </footer>
    )

}

