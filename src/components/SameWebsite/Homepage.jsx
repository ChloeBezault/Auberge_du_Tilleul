import { NavLink } from "react-router-dom";
import WelcomeCarrosel from "./WelcomeCarrosel";
import Map from "../SameWebsite/Map";

export default function Homepage() {
    

    const CarroselFeedback = [
        {

        },
    ];

    const CarroselBrands = [
        {

        },
    ];
    

    return(

        <main className="homepage">          
            <WelcomeCarrosel />
            <hr className="blankSpace"/>    

            <section className="presentation-halls">
                <h2 className="visit">-Visitez nos Salons-</h2>   
                <div className="Cards">
                    <ul>
                        <li>
                            <img 
                                srcset="" 
                                src="/images/Img-Cards/Card1.jpg" 
                                alt="MonetHall" 
                                className="Monet-hall"
                                
                            />
                            <h3>Salon Monet</h3>
                        </li>
                        <li>
                            <img 
                                srcset=""
                                src="/images/Img-Cards/Card2.jpg" 
                                alt="PicassoHall" 
                                className="Picasso-hall"
                                
                            />
                            <h3>Salon Picasso</h3>
                        </li>
                        <li>
                            <img 
                                srcset=""
                                src="/images/Img-Cards/Card3.jpg" 
                                alt="GauguinHall" 
                                className="Gauguin-hall"
                                
                            />
                            <h3>Salon Gauguin</h3>
                        </li>  
                    </ul>
                </div>
                <div className="cards-description">
                    <p>
                        Le tilleul vous propose un ensemble de salons de style différent pouvant accueillir de 10 à 200 personnes assises.
                    </p>
                    <p>
                        Contemporain ou classique chaque espace se révèle chaleureux et conviviale terrasse.
                    </p>
                    <p>
                        Un accès facile par la voie rapide à quelques minutes de Lille.
                    </p>
                    <p>
                        Grand parking.
                    </p>
                </div>
                <div className="btn-reservations">
                    <a className="btn-reserve" href="/Components/header/ContactRéservations.jsx">
                        <span>Réservations</span>
                    </a>
                </div>
            </section>

            <section className="About-auberge">
                <div>
                    <img src="/images/team.jpg" alt="" className="team-auberge"/>
                    <span>Plus Qu'un Traiteur</span>
                </div>
                <div>
                    <p>
                    “ Toujours soucieux de vous aider dans l'aboutissement de votre projet, l'equipe du tilleul saura être à vos côtés afin de rendre ce moment unique et inoubliable!
                    Nos clients le savent et peuvent compter sur notre disponibilité et nos conseils avisés…”
                    </p>
                </div>
                <div className="reservations">
                    <a href="/Components/header/ContactRéservations.jsx">
                        <span>Contactez-nous</span>
                    </a>  
                </div>
            </section>

            <section className="customers-feedback">
                <div className="customer-opinion">
                    <h4>Ce que nos clients disent de nous...</h4>
                    <p className="feedback">
                        « Un grand merci à l'équipe de l'Auberge du Tilleul, un accueil au petit soin, une prestation sur-mesure, un repas de haute qualité, une décoration spéciale fêtes dans une très belle salle. De quoi combler nos convives. A très bientôt »
                    </p>
                    <p className="client">
                        Ludo Masson
                    </p>

                </div>
                <div className="recommendation">
                    <img srcSet="" src="/images/Img-recommendation/zankyou.png" alt="" className="zankyou" />
                    <img srcSet="" src="/images/Img-recommendation/tripadvisor.png" alt="" className="tripadvisor" />
                </div>
                <div className="brands">
                    <h5>Ils nous font Confiance</h5>
                    <img srcSet="" src="/images/Img-brands/Abrimmo.png" alt="" className="brands-carrousel" />
                </div>
                <hr className="GoldStroke"/> 
            </section>
            <hr className="blankSpace"/>
            <Map />
               
        </main>      
    )
}