import { NavLink } from "react-router-dom";
import Form from "./Form";



function Contact() {

    return (
        <main className="information">
            <section className="contact_info">
                <div className="contact_address">
                    <h3 className="contact_title">- Ou nous Trouver -</h3>
                    <p>14 Rue du Dr.Coubronne,</p>
                    <p>59510 Hem, France</p>
                    <p>Grand Parking</p>
                </div>
                <div className="contact_call">
                    <div className="contact_call_moreinfo">
                    <img src="/images/Img-contact/Img-call.png" alt="ImageCall" className="img-call" height="250"/>
                    <p>Pour plus d'informations,</p>
                    <p>n'hésitez pas à nous contacter :</p>
                    </div>
                    <div className="contact_call_fa">
                        <a class="contact_call_fa_item" href="tel:+3330320839999">
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
                <div className="contact_opening">
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

            <hr></hr>
                
            <section className="map">
                <div className="responsive-map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.7105436814313!2d3.1878081154352857!3d50.651066680770484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3280e9b594235%3A0x95ad09fecd26f6d9!2sAuberge%20du%20Tilleul%20Lille!5e0!3m2!1spt-PT!2spt!4v1651519302311!5m2!1spt-PT!2spt" width="1000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </main>

    );
}

export default Contact;