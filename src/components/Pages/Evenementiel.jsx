import { NavLink } from "react-router-dom";


export default function Evenementiel() {

    const GalleryEvents= [
        {src:"/images/Evenements/01.jpg"},
        {src:"/images/Evenements/02.jpg"},
        {src:"/images/Evenements/03.jpg"},
        {src:"/images/Evenements/04.jpg"},
        {src:"/images/Evenements/05.jpg"},
        { src:"/images/Evenements/06.jpg"},
        { src:"/images/Evenements/07.jpg"},
        { src:"/images/Evenements/08.jpg"},
        {src:"/images/Evenements/09.jpg"},
        {src:"/images/Evenements/10.jpg"},
        {src:"/images/Evenements/11.jpg"},
        {src:"/images/Evenements/12.jpg"},
        { src:"/images/Evenements/13.jpg"},
        { src:"/images/Evenements/14.jpg"},
        { src:"/images/Evenements/15.jpg"},
        { src:"/images/Evenements/16.jpg"},
        { src:"/images/Evenements/17.jpg"},
        { src:"/images/Evenements/18.jpg"},
    ]


    return (
        <main>
            <section className="welcomeEvenements">
                <div className="filterWelcome">
                </div>
                <div className="welcomeIntroduction">
                    <p>
                        Soucieux de répondre au plus juste à l'attente de nos clients, et de vous simplifier l'organisation de vos événements, que ce soit dans vos locaux ou dans nos différents salons. 
                    </p>
                    <p>
                        Nous vous proposons des formules simples et claires, des forfaits adaptés à votre demande. 
                    </p>
                    <p>
                        Notre expérience professionnelle et notre savoir faire acquis depuis plus de 30 ans dans ce domaine nous permettent de vous garantir une qualité de prestation unique!
                    </p>
                </div>
            </section>
            <section className="SummaryEvents">
                <div className="TypeEvents">
                    <p> 
                        Séminaire | Conférence | Inauguration | Cocktail Dinatoire | Repas D'affaires | Lancement de produit | Départ en retraite | Journée d'étude | Plateau
                    </p>
                </div>
                <div className="summary">
                    <p>
                        " Parce que notre expérience de plus de 30 ans nous permets de vous garantir une solution clé en main.
                    </p>
                    <p>
                        Nous vous proposons des prestations pour tous vos événements professionnels, que se soit en terme de logistique, d'organisation, de restauration, nous serons là pour vous.
                    </p>
                    <p>
                        Nos partenaires sont à nos côtés pour faire de votre projet un moment unique.
                    </p>
                    <p>
                        Soirée entreprise, team building, lancement de produit, séminaire, congrès, arbre de noël, inauguration...
                    </p>
                    <p>
                        Dans nos salons ou dans tout autre lieu, nous saurons nous adapter et vous conseiller pour mener à bien votre réception."
                    </p>
                    <div className="ReserveEvents">
                        <NavLink to="/contact">
                        Demander un Devis
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="GalleryEvents">

                <div className="galleryContainer">
                    { GalleryEvents.map((item, i) => {
                    return (
                        <div key={i} className="galleryItem">
                            <img src={item.src} alt="ImagesEvents"/>
                        </div> 
                    )}
                    )}
                   
                </div>    


            </section>

        </main>
    );
}