import { NavLink } from "react-router-dom";


function RepasDaffaires() {

    const GalleryRepas= [
        {src:"/images/repasDaffaires/toast.jpg", alt:"Image toast"},
        {src:"/images/repasDaffaires/meal.jpg", alt:"Image meal"},
        {src:"/images/repasDaffaires/cooking.jpg", alt:"Image Cooking"},
        {src:"/images/repasDaffaires/preparationFood.jpg", alt:"Image Food"},
    ]

    return (
        <main className="RepasDaffaires">
            <section className="RepasApresentation">
                <h2 className="Repas_tittle">
                    Formule Repas D'affaires
                </h2>
                <div className="Repas_introduction">
                    <p>Formules tout compris, 7/7 jours, midi et soir, à partir de 10 personnes!</p>
                </div>
            </section>
            <section className="ClickMe">
                <p> Choisissez votre menu à l'avance pour ne pas perdre de temps, nous nous occupons de tout le reste!</p>
                <p> Salon Privé | Repas tout compris | Boissons </p>
                <div className="EnSavoirPlus">
                    <NavLink to="/contact">
                    En savoir Plus
                    </NavLink>
                </div>
            </section>
            <section className="ImagesRepas">
                <div className="galleryRepas">
                    { GalleryRepas.map((item, i) => {
                    return (
                        <div key={i} className="galleryItemsRepas">
                            <img src={item.src} alt={item.alt} className="ImagesRepas"/>
                        </div> 
                    )}
                    )}

                </div>
            </section>
        </main>

    );
}

export default RepasDaffaires;