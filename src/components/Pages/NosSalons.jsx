import { NavLink } from "react-router-dom";


export default function NosSalons() {
    return (
        <main>
            <section className="Salon">
                <h2>Salon Monet</h2>
                <div className="VideoSalon">
                    <iframe 
                        width="1000" 
                        height="400" 
                        src="https://www.youtube.com/embed/3OIOMVDYJTg" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="Introduction">
                    <p>
                        Le salon Monet ou le restaurant est un choix parfait pour vos repas de famille bénéficiant d'une belle lumière,
                        de sa brique et de sa charpente authentique. Le salon pourra recevoir jusqu'à 40 personnes.
                    </p>
                </div>
                <hr className="GoldStroke"/>  
            </section>
            <section className="Salon">
                <h2>Salon Picasso</h2>
                <div className="VideoSalon">
                    <iframe 
                        width="1000" 
                        height="400" 
                        src="https://www.youtube.com/embed/rjpdmTx-irU" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="Introduction">
                    <p>
                        Le salon Picasso, est situé à HEM, à 10 minutes de Lille. Idéal pour vos repas en famille ou d'affaires à l'écart des regards indiscrets,
                        vous serez plongé dans une ambiance sobre et détendue. Jusqu'à 20 personnes assises.
                    </p>
                </div>
                <hr className="GoldStroke"/>  
            </section>
            <section className="Salon">
                <h2>Salon Gauguin</h2>
                <div className="VideoSalon">
                    <iframe 
                        loop
                        width="1000" 
                        height="400" 
                        src="https://www.youtube.com/embed/PxuDg8HMfp8" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="Introduction">
                    <p>
                        Poutres et briques apparentes en font une ambiance chaleureuse et conviviale.
                        Sa terrasse aménagée fait le bonheur des amateurs de l'oisiveté autour d'un cocktail entre amis.
                        L'hiver sa cheminée donnera une ambiance des plus authentique et réchauffera les coeurs de vos convives.
                        Un grand parking est à votre disposition juste en face de l'établissement.
                        Plus de 200 m² pour accueillir de 30 à 150 personnes selon le choix de votre réception.
                    </p>
                </div>
            </section>
            <section className="MapVirtualHalls">
                <h3>Notre équipe vous invite à faire une visite Virtuelle de Nos Salons</h3>
                <div className="respMapVirtual">
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1652610557038!6m8!1m7!1sCAoSLEFGMVFpcE1PNFg5clhUQk5jNjZGNHVpZHVpUTRYMHNKZ3R5cm04QWdJRk1q!2m2!1d50.65115318063766!2d3.19006460739115!3f88.91!4f-0.9500000000000028!5f0.4000000000000002" width="1000"
                    height="500" 
                    allowFullScreen="" 
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="map-virtualVisit"
                >
                </iframe>
                </div>
            </section>
           
        </main>

    );
}