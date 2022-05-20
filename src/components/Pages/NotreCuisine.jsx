import { NavLink } from "react-router-dom";


function NotreCuisine() {

    const GalleryCuisine= [
        {src:"/images/Img-NotreCuisine/1.jpg"},
        {src:"/images/Img-NotreCuisine/2.jpg"},
        {src:"/images/Img-NotreCuisine/3.jpg"},
        {src:"/images/Img-NotreCuisine/4.jpg"},
        {src:"/images/Img-NotreCuisine/5.jpg"},
        {src:"/images/Img-NotreCuisine/6.jpeg"},
        {src:"/images/Img-NotreCuisine/7.jpg"},
        { src:"/images/Img-NotreCuisine/8.jpg"},
        { src:"/images/Img-NotreCuisine/9.jpg"},
        { src:"/images/Img-NotreCuisine/10.jpg"},
        {src:"/images/Img-NotreCuisine/11.jpeg"},
        {src:"/images/Img-NotreCuisine/12.jpg"},
        {src:"/images/Img-NotreCuisine/13.jpg"},
        {src:"/images/Img-NotreCuisine/14.jpg"},
        { src:"/images/Img-NotreCuisine/15.jpg"},
        { src:"/images/Img-NotreCuisine/16.jpg"},
        { src:"/images/Img-NotreCuisine/17.jpg"},
        { src:"/images/Img-NotreCuisine/18.jpg"},
        { src:"/images/Img-NotreCuisine/19.jpg"},
        { src:"/images/Img-NotreCuisine/20.jpg"},
        { src:"/images/Img-NotreCuisine/21.jpg"},
        { src:"/images/Img-NotreCuisine/22.jpg"},
        { src:"/images/Img-NotreCuisine/23.jpg"},
        { src:"/images/Img-NotreCuisine/24.jpg"},
    ]

    
    return (
        <main className="notreCuisine">
            <section className="CuisineApresentation">
                <h2 className="cuisine_tittle">
                    Notre Cuisine
                </h2>
                <div className="cuisine_introduction">
                    <p>Notre Chef et son équipe proposent une cuisine de saison élaborée à partir de produits frais sélectionnés pour leur qualité.</p>
                    <p>Depuis 30 ans nous nous efforçons d'imaginer une cuisine moderne, généreuse et originale.</p>
                    <p>Nous nous adaptons pour que vos événements soient au plus près de vos attentes.</p>
                </div>
            </section>
            <section className="notreCuisine_Album">
                
                <div className="galleryContainer">
                    { GalleryCuisine.map((item, i) => {
                    return (
                        <div key={i} className="galleryItem">
                            <img src={item.src} alt="ImagesFood"/>
                        </div> 
                    )}
                    )}
                   
                </div>    
            </section>
        </main>
    );
}

export default NotreCuisine;