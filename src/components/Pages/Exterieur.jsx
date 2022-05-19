import { NavLink } from "react-router-dom";


function Exterieur() {
    
                
    const GalleryExterieur= [
        {src:"/images/ReceptionsExt/01.jpg", id:"e1"},
        {src:"/images/ReceptionsExt/02.jpg", id:"e2"},
        {src:"/images/ReceptionsExt/03.jpg", id:"e3"},
        {src:"/images/ReceptionsExt/04.jpg", id:"e4"},
        {src:"/images/ReceptionsExt/05.jpg", id:"e5"},
        { src:"/images/ReceptionsExt/06.jpg", id:"e6"},
        { src:"/images/ReceptionsExt/07.jpg", id:"e7"},
        { src:"/images/ReceptionsExt/08.jpg", id:"e8"},
        {src:"/images/ReceptionsExt/09.jpg", id:"e9"},
        {src:"/images/ReceptionsExt/10.jpg", id:"e10"},
        {src:"/images/ReceptionsExt/11.jpg", id:"e11"},
        {src:"/images/ReceptionsExt/12.jpg", id:"e12"},
        { src:"/images/ReceptionsExt/13.jpg", id:"e13"},
        { src:"/images/ReceptionsExt/14.jpg", id:"e14"},
        { src:"/images/ReceptionsExt/15.jpg", id:"e15"},
        { src:"/images/ReceptionsExt/16.jpg", id:"e16"},
        { src:"/images/ReceptionsExt/17.jpg", id:"e17"},
        { src:"/images/ReceptionsExt/18.jpg", id:"e19"},
        { src:"/images/ReceptionsExt/19.jpg", id:"e20"},
        { src:"/images/ReceptionsExt/20.jpg", id:"e21"},
        { src:"/images/ReceptionsExt/21.jpg", id:"e22"},
    ]


    return (
        <main>
            <section className="welcomeExterieur">
                <div className="filterWelcome">
                </div>
                <div className="IntroductionExterieur">
                    <p>
                        Vous possédez un domaine, une maison de famille ou tous autres lieux auxquels vous tenez, sachez que nous sommes depuis toujours et nous aimons le rappeler, spécialisés dans les réceptions extérieures. 
                    </p>
                </div>
            </section>
            <section className="SummaryExterieur">
                <div className="EventsExterieur">
                    <p> 
                        Evenements Familiaux | Cocktail Dinatoire | Mariages | Communions | Baptêmes | Départ en retraite
                    </p>
                </div>
                <div className="AboutExterieur">
                    <p>
                        Vous souhaitez organiser une réception chez vous, prés de Lille ou dans la métropole Lilloise,
                        L'auberge du tilleul, indépendamment des propres salles de réception, organise des réceptions à domicile.
                        Pour les mariages, communions, baptêmes ou tous autres evenements familiaux, recevez chez vous en toute liberté
                        L'auberge du tilleul organise avec vous, votre évènement à Lille ou dans sa région.
                        Prenez le temps de regarder quelques photos d'événements organisés in situ par l'auberge du tilleul.
                    </p>
                    <div className="ReserveExterieur">
                        <NavLink to="/contact">
                        En savoir plus
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="GalleryExterieur">

                <div className="galleryContainer">
                    { GalleryExterieur.map((item, i) => {
                    return (
                        <div key={i} className="galleryItem">
                            <img src={item.src} id={item.id} alt="ImagesReceptionsExterieur"/>
                        </div> 
                    )}
                    )}
                   
                </div>    


            </section>

        </main>
        

    );
}

export default Exterieur;