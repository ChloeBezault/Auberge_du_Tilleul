import { NavLink } from "react-router-dom";
import Form from "./Form";
import Map from "../SameWebsite/Map";
import { useEffect, useState } from "react";


function Contact() {

    const SlideContact = [

        {   
            src:"/images/Img-contact/Img-call.png" , 
            alt: "Image-call"
        },
        {   
            src:"/images/Img-contact/Img-reserved.png" , 
            alt: "Image-reserved"
        },
    ];

    const [ presentImage, setPresentImage ] = useState(0);
    const length = SlideContact.length;

    const nextImage = () => {
        setPresentImage(presentImage === length -1 ? 0 : presentImage + 1 )
    }


    useEffect(() => {
        const Play = setInterval(nextImage, 3000);
        return () => clearInterval(Play);
    },[nextImage]);


    if (!Array.isArray(SlideContact) || SlideContact.length <= 0) {
        return null;
    }

    return (
        <main className="information">
            <section className="contactInfo">
                <div className="Contacts">
                    <h3 className="contact_title">- Ou nous Trouver -</h3>
                    <p>14 Rue du Dr.Coubronne,</p>
                    <p>59510 Hem, France</p>
                    <p>Grand Parking</p>
                </div>
                <div className="contact_call">
                    { SlideContact.map((slide, i) => {
                    return(
                        <div key={i} className={ i === presentImage ? "moreInfo" : "lessInfo"}>
                        <img src={slide.src} alt={slide.alt} className="img-call" height="250"/>
                        </div>
                    )}
                    )}
                    <div className="contact_call_fa">
                        <p>Pour plus d'informations,</p>
                        <p>n'hésitez pas à nous contacter :</p>
                        <p>Mr Bezault Serge / Mr Six Christian</p>
                        <a className="contact_call_fa_item" href="tel:+3330320839999">
                        <img id="telefoneBr" src="/images/icones_tel/telefPr.png" height="15" alt="iconeTelephone"/> (33) 03 20 83 99 99 
                        </a>   
                    </div>
                    <div className="contact_call_fa">
                        <a class="contact_call_fa_item" href="mailto:contact@aubergedutilleul.com"> 
                        <img id="emailBr" src="/images/icones_tel/emailPr.png" height="17" alt="iconeEmail"/>
                        contact@aubergedutilleul.com
                        </a>
                    </div>                                  
                </div>
                <div className="Contacts">
                    <h3 className="contact_title">- Horaires -</h3>
                    <p>Lundi-jeudi : 9h30 - 17h</p>
                    <p>Vendredi : 9h30 - 18h</p>
                    <p>Samedi : 9h30 - 23h</p>
                    <p>Dimanche : 9h30 - 17h</p>
                </div>
            </section>

            <section className="Quiz">
                <div className="Quiz_description">
                    <p>Je souhaite demander un Devis ?</p>
                    <p>Remplissez ci-dessus ce court formulaire, nous vous répondrons dans les plus brefs délais.</p>   
                </div>
                <Form />
            </section>
            <hr className="GoldSpace"/>
                <Map />
        </main>

    );
}

export default Contact;