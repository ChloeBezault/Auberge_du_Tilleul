import { NavLink } from "react-router-dom";



export default function Contact() {
    return (
        <main>
            <section className="infos-contacts">
                <div className="adress">
                    <h3>- Ou nous Trouver -</h3>
                    <p>14 Rue du Dr.Coubronne,</p>
                    <p>59510 Hem, France</p>
                    <br></br>
                    <p>Grand Parking</p>
                </div>
                <div className="contacts">
                    <img src="/images/Img-contact/Img-call.png" alt="" className="img-call" height={"300"}/>
                    <p>Pour plus d'informations, n'hésitez pas à nous contacter</p>
                    <a class="fa fa-phone" href="tel:+3330320839999"> (33) 03 20 83 99 99</a>
                    <a class="fa fa-envelope" href="mailto:contact@aubergedutilleul.com"> contact@aubergedutilleul.com</a>
                </div>
                <div className="opening-time">
                    <h3>- Horaires -</h3>
                    <p>Lundi-jeudi : 9h30 - 17h</p>
                    <p>Vendredi : 9h30 - 18h</p>
                    <p>Samedi : 9h30 - 23h</p>
                    <p>Dimanche : 9h30 - 17h</p>
                </div>
            </section>
            <section className="Form">
                <h4>Je souhaite demander un Devis ?</h4>
                <p>Remplissez ci-dessus ce court formulaire, nous vous répondrons dans les plus brefs délais.</p>
                <br></br>
                
                <form action="mailto:contact@aubergedutilleul.com" method="post" enctype="text/plain">

                    Nom/Prénoms:
                    <input type={"text"} name={"name"}></input>
                    Telephone:

                    Portable:

                    Email:

                    Adresse:

                    Sociétè:

                    Intéréssé par:

                    Message:


                </form>



            </section>
                
            <section className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.7105436814313!2d3.1878081154352857!3d50.651066680770484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3280e9b594235%3A0x95ad09fecd26f6d9!2sAuberge%20du%20Tilleul%20Lille!5e0!3m2!1spt-PT!2spt!4v1651519302311!5m2!1spt-PT!2spt" width="1000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </main>

    );
}