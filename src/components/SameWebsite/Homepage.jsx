import { NavLink, link} from "react-router-dom";
import WelcomeCarrosel from "./WelcomeCarrosel";
import Map from "../SameWebsite/Map";
import CarroselFeedback from "./CarroselFeedback";

export default function Homepage() {
    

    

    return(

        <main className="homepage">          
            <WelcomeCarrosel />
            <hr className="blankSpace"/>    

            <section className="presentation-halls">
                <h2 className="titleVisitHalls">-Visitez nos Salons-</h2>   
                <div className="Container_Cards">
                    <div className="CardsHalls">
                        <div className="Card">
                            <NavLink to="/halls">
                                <img 
                                    src="/images/Img-Cards/Card1.jpg" 
                                    alt="MonetHall" 
                                    className="Monet-hall"
                                />
                                <h2>Salon Monet</h2>
                            </NavLink>   
                        </div>
                        <div className="Card">  
                            <NavLink to="/halls">            
                                <img 
                                    src="/images/Img-Cards/Card2.jpg" 
                                    alt="PicassoHall" 
                                    className="Picasso-hall"
                                />
                                <h2>Salon Picasso</h2>
                            </NavLink>
                        </div>
                        <div className="Card">
                            <NavLink to="/halls">
                                <img 
                                    src="/images/Img-Cards/Card3.jpg" 
                                    alt="GauguinHall" 
                                    className="Gauguin-hall"
                                />
                                <h2>Salon Gauguin</h2>
                            </NavLink>
                        </div>  
                    </div>
                </div>
                <div className="summaryCards">
                    <p>
                        Le tilleul vous propose un ensemble de salons de style différent pouvant accueillir de 10 à 200 personnes assises.Contemporain ou classique chaque espace se révèle chaleureux et conviviale terrasse.Un accès facile par la voie rapide à quelques minutes de Lille.
                    </p>
                    <p>
                        Grand parking.
                    </p>
                </div>
                <div className="reservations">
                    <NavLink to="/contact">
                    Je souhaite réserver un Salon
                    </NavLink>
                </div>
            </section>

            <section className="AboutAuberge">
                <div className="Image_team">
                    <img src="/images/team.jpg" alt="ImageTeam" className="team-auberge"/>
                </div>
                <div className="Text_About">
                    <h3>Plus Qu'un Traiteur</h3>
                    <p>
                    “ Toujours soucieux de vous aider dans l'aboutissement de votre projet, l'equipe du tilleul saura être à vos côtés afin de rendre ce moment unique et inoubliable!
                    Nos clients le savent et peuvent compter sur notre disponibilité et nos conseils avisés…”
                    </p>
                    <div className="ContactezNous">
                        <NavLink to="/contact">
                        Contactez-Nous
                        </NavLink>  
                    </div>
                </div>
            </section>

            <section className="customers-feedback">
                <CarroselFeedback />
                <div className="recommendation">
                    <div className="ZankYou">
                        <a className="contact_call_fa_item" href="https://www.zankyou.fr/f/auberge-du-tilleul-36561">
                        <img src="/images/Img-recommendation/zankyou.png" alt="ImageZankYou" className="zankyou" />
                        </a>
                    </div>
                    <div className="tripAdvisor">
                        <a className="contact_call_fa_item" href="https://www.tripadvisor.com.br/Restaurant_Review-g661482-d5801243-Reviews-Auberge_du_tilleul-Hem_Nord_Hauts_de_France.html">
                        <img src="/images/Img-recommendation/tripadvisor.png" alt="ImageTrip" className="tripadvisor" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="Carrosel_Brands">
                <div className="brands">
                    <h5>Ils nous font Confiance</h5>
                    <img src="/images/Img-brands/Abrimmo.png" alt="ImageBrands" className="brands-carrousel" />
                </div>
                <hr className="GoldStroke"/> 
            </section>
            <hr className="blankSpace"/>
            <Map />
        </main>      
    )
}