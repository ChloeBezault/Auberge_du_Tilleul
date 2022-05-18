import { NavLink } from "react-router-dom";


export default function Evenementiel() {

    const GalleryEvents= [
        {src:"/images/Evenements/01.jpg", id:"1"},
        {src:"/images/Evenements/02.jpg", id:"4"},
        {src:"/images/Evenements/03.jpg", id:"5"},
        {src:"/images/Evenements/04.jpg", id:"6"},
        {src:"/images/Evenements/05.jpg", id:"7"},
        { src:"/images/Evenements/06.jpg", id:"8"},
        { src:"/images/Evenements/07.jpg", id:"9"},
        { src:"/images/Evenements/08.jpg", id:"10"},
        {src:"/images/Evenements/09.jpg", id:"11"},
        {src:"/images/Evenements/10.jpg", id:"12"},
        {src:"/images/Evenements/11.jpg", id:"13"},
        {src:"/images/Evenements/12.jpg", id:"14"},
        { src:"/images/Evenements/13.jpg", id:"15"},
        { src:"/images/Evenements/14.jpg", id:"16"},
        { src:"/images/Evenements/15.jpg", id:"17"},
        { src:"/images/Evenements/16.jpg", id:"18"},
        { src:"/images/Evenements/17.jpg", id:"19"},
        { src:"/images/Evenements/18.jpg", id:"20"},
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
                </div>
            </section>
            <section className="GalleryEvents">

                <div className="galleryContainer">
                    { GalleryEvents.map((item, i) => {
                    return (
                        <div key={i} className="galleryItem">
                            <img src={item.src} id={item.id} alt="ImagesEvents"/>
                        </div> 
                    )}
                    )}
                   
                </div>    


            </section>

        </main>
    );
}