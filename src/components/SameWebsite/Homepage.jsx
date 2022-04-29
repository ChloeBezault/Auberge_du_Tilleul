import { NavLink } from "react-router-dom";



export default function Homepage() {
    function showSlide() {}

    const CarroselHome = [
        { 
            src:"/images/Images-Carrosel/ImgCarrousel-1.jpg" , 
            alt: "Img-restaurant", 
            subtitles:"Prêt pour un repas raffiné, dans une ambiance décontractée et chaleureuse ?"
        },

        { 
            src:"/images/Images-Carrosel/ImgCarrousel-2.jpg" , 
            alt: "Img-mariage", 
            subtitles:"L'Auberge du tilleul s'adapte à vos demandes pour vous offrir un événement d'éxception."
        },

        { 
            src:"/images/Images-Carrosel/ImgCarrousel-3.jpeg" , 
            alt: "Img-food", 
            subtitles:"Prêt pour  dégustés notre cuisine moderne,généreuse et originale ?"
        },

        { 
            src:"/images/Images-Carrosel/ImgCarrousel-4.jpg" , 
            alt: "Img-business", 
            subtitles:"Nous vous proposons des prestations pour tous vos événement professionels !" 
        },

        { 
            src:"/images/Images-Carrosel/ImgCarrousel-5.jpg" , 
            alt: "Img-cocktail", 
            subtitles:"Dans nos salons ou dans tout autre lieu, nous serons là pour vous!"
        },
    ];


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
            <section className="welcome-carrosel">
                <figure className="imgs-carrousel">
                    <img srcset="" src="/images/Images-Carrosel/ImgCarrosel-3.jpeg" alt="" className="Imgages-carrousel"/>
                        <input type="radio" name="slide" id="slide1" checked />
                        <input type="radio" name="slide" id="slide2" checked/>
                        <input type="radio" name="slide" id="slide3" checked/>
                        <input type="radio" name="slide" id="slide4" checked/>
                        <input type="radio" name="slide" id="slide5" checked/>
                    <figcaption className="subtitles">
                        Prêt pour un repas raffiné, dans une ambiance décontractée et chaleureuse ? 
                    </figcaption>
                </figure>
            </section>

            <section className="presentation-halls">
                <h1>Auberge du Tilleul</h1>
                <h2>-Visitez nos Salons-</h2>   
                <div className="Cards">
                    <ul>
                        <li>
                            <img 
                                srcset="" 
                                src="/images/Img-Cards/Card1.jpg" 
                                alt="" 
                                className="Monet-hall"
            
                            />
                            <h3>Salon Monet</h3>
                        </li>
                        <li>
                            <img 
                                srcset=""
                                src="/images/Img-Cards/Card2.jpg" 
                                alt="" 
                                className="Picasso-hall"
                                
                            />
                            <h3>Salon Picasso</h3>
                        </li>
                        <li>
                            <img 
                                srcset=""
                                src="/images/Img-Cards/Card3.jpg" 
                                alt="" 
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
                    <img srcset="" src="/images/Img-recommendation/zankyou.png" alt="" className="zankyou" />
                    <img srcset="" src="/images/Img-recommendation/tripadvisor.png" alt="" className="tripadvisor" />
                </div>
                <div className="brands">
                    <h5>Ils nous font Confiance</h5>
                    <img srcset="" src="/images/Img-brands/Abrimmo.png" alt="" className="brands-carrousel" />
                </div>

                
            </section>

            <section className="map-responsive">
                
            </section>
               
           
                       
        </main>      
    )
}