import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";


function WelcomeCarrosel() {


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
            subtitles:"Prêt pour  dégustés notre cuisine moderne, généreuse et originale ?"
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



    const [ presentImage, setPresentImage ] = useState(0);
    const length = CarroselWelcome.length;

    const nextImage = () => {
        setPresentImage(presentImage === length -1 ? 0 : presentImage + 1 )
    }

    const prevImage = () => {
        setPresentImage(presentImage === 0 ? length -1 : presentImage -1 )
    }
    
    useEffect(() => {
        const Play = setInterval(nextImage, 4500);
        return () => clearInterval(Play);
    }, [nextImage]);


    if (!Array.isArray(CarroselWelcome) || CarroselWelcome.length <= 0) {
        return null;
    }



    return(
        <section className="welcome_Home">
            <div className="welcome_Carrosel">
                <button className="left-arrow" onClick={prevImage}>
                    <FaArrowAltCircleLeft/>
                </button>
                <button className="right-arrow" onClick={nextImage} >
                    <FaArrowAltCircleRight/>
                </button>
                { CarroselWelcome.map((slide, i) => {
                return(

                    <figure key={i} className={i === presentImage ? "slideActive" : "slide"}>
                        <picture>
                            <source media="(max-width:800px)" srcSet={slide.srcSet}/>
                            <img src={slide.src} alt={slide.alt} className="images-welcome"/>
                        </picture>                       
                        <figcaption className="subtitles">
                            {slide.subtitles} 
                        </figcaption>
                    </figure>
                )}
                )}


            </div>
        </section>
        

    );
}

export default WelcomeCarrosel;