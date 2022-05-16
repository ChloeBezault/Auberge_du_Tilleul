import React, { useEffect, useState } from "react";


function CarroselFeedback() {


    const CarroselCustomers = [

        {  
            Feedback:"Un grand merci à l'équipe de l'Auberge du Tilleul, un accueil au petit soin, une prestation sur-mesure, un repas de haute qualité, une décoration spéciale fêtes dans une très belle salle. De quoi combler nos convives. A très bientôt",
            NameCustomer:"Ludo Masson"
          
        },

        {   
            Feedback:"Nous avons passé un sublime moment. Le service est impeccable. Nous avons été 'chouchoutes' comme si nous étions reçus par un membre de la famille. La salle est magnifique. Le repas était excellent. En allant à l Auberge du tilleul , nous avons atteint notre objectif : ravir nos invités. MERCI",
            NameCustomer:"Marie Christine Six"
        },

        { 
            Feedback:"Très bon accueil et prestation au top à l'anniversaire de ma belle fille. Repas goûteux. Je reviendrai avec mon épouse...",
            NameCustomer:"Patrick Brinkhuysen"
        },

        {   
            Feedback:"Nous avons passé un excellent moment à l'auberge du Tilleul à Hem samedi dernier à l'occasion de son noces d'or de mes grands parents : mets d'exception servis avec professionnalisme et le sourire, le tout dans un cadre chaleureux et intime. Pas une fausse note. Bravo et MERCI",
            NameCustomer:"Matthieu Guaquiere"
        },

        { 
            Feedback:"Restaurant très sympathique disposant d'une grande salle pour des rassemblements entre amis. Cuisine variée et raffinée. Personnel accueillant et sympathique.A recommander.",
            NameCustomer:"Eric Bouzy"
        },
    ];



    const [ presentFeedback, setPresentFeedback ] = useState(0);
    const length = CarroselCustomers.length;

    const nextFeedback = () => {
        setPresentFeedback(presentFeedback === length -1 ? 0 : presentFeedback + 1 )
    }

    const prevFeedback = () => {
        setPresentFeedback(presentFeedback === 0 ? length -1 : presentFeedback -1 )
    }
    
    useEffect(() => {
        const AutoPlay = setInterval(nextFeedback, 6000);
        return () => clearInterval(AutoPlay);
    }, [nextFeedback]);


    if (!Array.isArray(CarroselCustomers) || CarroselCustomers.length <= 0) {
        return null;
    }



    return(
            <div className="customer-opinion">
                <h4 className="titleOpinion">Ce que nos clients disent de nous...</h4>
                
                    { CarroselCustomers.map((slide, i) => {
                    return(
                        <div key={i} className={i === presentFeedback ? "opinion" : "opinionActive"}>
                            <p className="feedback">
                                {slide.Feedback}
                            </p>
                            <p className="client">
                                {slide.NameCustomer}
                            </p>
                        </div>
                    )}
                )}
            </div>
    );
}

export default CarroselFeedback;