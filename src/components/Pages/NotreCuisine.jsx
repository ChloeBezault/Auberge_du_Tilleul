import { NavLink } from "react-router-dom";


function NotreCuisine() {

    const GalleryCuisine= [
        {src:"/images/Img-NotreCuisine/1.jpg", id:"1"},
        {src:"/images/Img-NotreCuisine/2.jpg", id:"2"},
        {src:"/images/Img-NotreCuisine/3.jpg", id:"3"},
        {src:"/images/Img-NotreCuisine/4.jpg", id:"4"},
        {src:"/images/Img-NotreCuisine/5.jpg", id:"5"},
        {src:"/images/Img-NotreCuisine/6.jpeg", id:"6"},
        {src:"/images/Img-NotreCuisine/7.jpg", id:"7"},
        { src:"/images/Img-NotreCuisine/8.jpg", id:"8"},
        { src:"/images/Img-NotreCuisine/9.jpg", id:"9"},
        { src:"/images/Img-NotreCuisine/10.jpg", id:"10"},
        {src:"/images/Img-NotreCuisine/11.jpeg", id:"11"},
        {src:"/images/Img-NotreCuisine/12.jpg", id:"12"},
        {src:"/images/Img-NotreCuisine/13.jpg", id:"13"},
        {src:"/images/Img-NotreCuisine/14.jpg", id:"14"},
        { src:"/images/Img-NotreCuisine/15.jpg", id:"15"},
        { src:"/images/Img-NotreCuisine/16.jpg", id:"16"},
        { src:"/images/Img-NotreCuisine/17.jpg", id:"17"},
        { src:"/images/Img-NotreCuisine/18.jpg", id:"18"},
        { src:"/images/Img-NotreCuisine/19.jpg", id:"19"},
        { src:"/images/Img-NotreCuisine/20.jpg", id:"20"},
        { src:"/images/Img-NotreCuisine/21.jpg", id:"21"},
        { src:"/images/Img-NotreCuisine/22.jpg", id:"22"},
        { src:"/images/Img-NotreCuisine/23.jpg", id:"23"},
        { src:"/images/Img-NotreCuisine/24.jpg", id:"24"},
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
                            <img src={item.src} id={item.id} alt="ImagesFood"/>
                        </div> 
                    )}
                    )}
                   
                </div>    
            </section>
        </main>
    );
}

export default NotreCuisine;