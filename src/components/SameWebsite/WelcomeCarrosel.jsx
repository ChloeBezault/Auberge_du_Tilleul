import { useState } from "react";


export default function WelcomeCarrosel() {


    const CarroselWelcome = [

        {   
            srcSet:"/images/Images-Carrosel/Img1-S.jpg",
            src:"/images/Images-Carrosel/Img1-L.jpg" , 
            alt: "Image-restaurant", 
            subtitles:"Prêt pour un repas raffiné, dans une ambiance décontractée et chaleureuse ?"
        },

        {   
            srcSet:"/images/Images-Carrosel/Img2-S.jpg",
            src:"/images/Images-Carrosel/Img2-L.jpg" , 
            alt: "Image-mariage", 
            subtitles:"L'Auberge du tilleul s'adapte à vos demandes pour vous offrir un événement d'éxception."
        },

        { 
            srcSet:"/images/Images-Carrosel/Img3-S.jpeg",
            src:"/images/Images-Carrosel/Img3-L.jpeg" , 
            alt: "Image-food", 
            subtitles:"Prêt pour  dégustés notre cuisine moderne,généreuse et originale ?"
        },

        {   
            srcSet:"/images/Images-Carrosel/Img4-S.jpg",
            src:"/images/Images-Carrosel/Img4-L.jpg" , 
            alt: "Image-business", 
            subtitles:"Nous vous proposons des prestations pour tous vos événement professionels !" 
        },

        { 
            srcSet:"/images/Images-Carrosel/Img5-S.jpg",
            src:"/images/Images-Carrosel/Img5-L.jpg" , 
            alt: "Image-cocktail", 
            subtitles:"Dans nos salons ou dans tout autre lieu, nous serons là pour vous!"
        },
    ];

    return(
        <section className="welcome_Home">
            <div className="welcome_Carrosel">
                
                { CarroselWelcome.map((item, i) => {
                return(

                    <figure key={i} className="imgs-carrosel">
                        <picture>
                            <source media="(max-width:800px)" srcSet={item.srcSet}/>
                            <img src={item.src} alt={item.alt} className="img-hall"/>
                        </picture>                       
                        <figcaption className="subtitles">
                            {item.subtitles} 
                        </figcaption>
                    </figure>
                )}
                )}


            </div>
        </section>
        

    );
}