import { NavLink } from "react-router-dom";


function Lieux() {

    const GalleryLieux = [
        {src:"/images/Lieux/01.jpg"},
        {src:"/images/Lieux/02.jpg"},
        {src:"/images/Lieux/03.jpg"},
        {src:"/images/Lieux/04.jpg"},
        {src:"/images/Lieux/05.jpg"},
        {src:"/images/Lieux/06.jpg"},
    ]


    return (
        <main>
            <section className="welcomeLieux">
                <div className="filterWelcome">
                </div>
                <div className="IntroductionLieux">
                    <p>
                        L'auberge du tilleul tient bien d'autres lieux à votre disposition, n'hésitez pas à nous contacter pour plus de renseignements.
                        
                    </p>
                </div>
            </section>
            <section className="Lieux">
                <div className="LieuxEvents">
                    <p> 
                        Cocktails | Repas D'affaires | Mariages | Communions | Baptêmes | Brunch
                    </p>
                </div>
                <div className="AboutLieux">
                    <p>
                    Zéphyr, Clos Barthélemy, Château de Rebreuve, Gayant expo, La condition publique, Ensait, Maison de la photographie, Palais des beaux-arts, Zenith, La chaufferie, Kinépolis, Château d'Arondeau...
                    </p>  
                    <div className="ReserveLieux">
                        <NavLink to="/contact">
                        Devis sur Demande
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="GalleryLieux">

                <div className="galleryContainer">
                    { GalleryLieux.map((item, i) => {

                    return (
                        <div key={i} className="galleryItem">
                            <img src={item.src} alt="ImagesLocations"/>
                        </div> 
                    )}
                    )}
                   
                </div>    


            </section>

        </main>

    );
}

export default Lieux;