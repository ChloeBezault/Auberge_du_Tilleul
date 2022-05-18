import { NavLink } from "react-router-dom";


function ChezNous() {

    const GalleryChezNous = [
        {src:"/images/ChezNous/01.jpg", id:"1"},
        {src:"/images/ChezNous/02.jpg", id:"4"},
        {src:"/images/ChezNous/03.jpg", id:"5"},
        {src:"/images/ChezNous/04.jpg", id:"6"},
        {src:"/images/ChezNous/05.jpg", id:"7"},
        {src:"/images/ChezNous/06.jpg", id:"8"},
        {src:"/images/ChezNous/07.jpg", id:"9"},
        {src:"/images/ChezNous/08.jpg", id:"10"},
        {src:"/images/ChezNous/09.jpg", id:"11"},
        {src:"/images/ChezNous/10.jpg", id:"12"},
        {src:"/images/ChezNous/11.jpg", id:"13"},
        {src:"/images/ChezNous/12.jpg", id:"14"},
        { src:"/images/ChezNous/13.jpg", id:"15"},
        { src:"/images/ChezNous/14.jpg", id:"16"},
        { src:"/images/ChezNous/15.jpg", id:"17"},
        { src:"/images/ChezNous/16.jpg", id:"18"},
        { src:"/images/ChezNous/17.jpg", id:"19"},
        { src:"/images/ChezNous/18.jpg", id:"20"},
    ]


    return (
        <main>
            <section className="welcomeChezNous">
                <div className="filterWelcome">
                </div>
                <div className="IntroductionChezNous">
                    <h2>
                        Chacune de nos réceptions est étudiée pour vous satisfaire.
                    </h2>
                </div>
            </section>
            <section className="ChezNous">
                <div className="ChezNousEvents">
                    <p> 
                        Cocktails | Repas D'affaires | Mariages | Communions | Baptêmes | Brunch
                    </p>
                </div>
                <div className="summaryChez">
                    <p>
                        Notre expérience et notre régularité dans ce domaine font de nous un traiteur reconnu.
                    </p>
                    <p>
                        Située à Hem, à quelques minutes de Lille entre ville et campagne, prête à intervenir chez vous, toute notre équipe se tient à votre service pour rendre votre événement inoubliable.
                    </p>
                    <p>
                        Nous tenons à rester à votre écoute, notre disponibilité est indispensable à la réalisation d'une réception réussie.
                    </p>
                    
                    <div className="ReserveEvents">
                        <NavLink to="/contact">
                        Contactez-Nous
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="GalleryChezNous">

                <div className="galleryContainer">
                    { GalleryChezNous.map((item, i) => {
                    return (
                        <div key={i} className="galleryItem">
                            <img src={item.src} id={item.id} alt="ImagesTilleul"/>
                        </div> 
                    )}
                    )}
                   
                </div>    


            </section>

        </main>

    );
}

export default ChezNous;