import { NavLink } from "react-router-dom";



function Contact() {

    const handleSubmit = () => {
        
    };


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
                    <img src="/images/Img-contact/Img-call.png" alt="" className="img-call" height={"300"}/>
                    <p>Pour plus d'informations,</p>
                    <p>n'hésitez pas à nous contacter</p>
                    <p><a class="fa fa-phone" href="tel:+3330320839999"> (33) 03 20 83 99 99</a></p>
                    <a class="fa fa-envelope" href="mailto:contact@aubergedutilleul.com"> contact@aubergedutilleul.com</a>
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
            
                <div className="container-f">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="row">
                            <div className="col-25">
                                <label for="fname">
                                    Nom/Prénoms:
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                type="text" 
                                name="name" 
                                required
                                placeholder="Nom"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Telephone:
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                type="text" 
                                name="telefone" 
                                placeholder="Telephone"
                                minLength="9"
                                maxLength="14"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Portable:
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                type="text" 
                                name="mobile" 
                                required
                                placeholder="Portable"
                                minLength="9"
                                maxLength="14"
                                />
                            </div>  
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Email:
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                type="email" 
                                name="email" 
                                required
                                placeholder="email@"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Adresse:
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                type="text" 
                                name="" 
                                placeholder="Adresse"
                                />
                            </div>      
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Sociétè:
                                </label>
                            </div>
                            <div className="col-75">
                                <input
                                type="text" 
                                name="" 
                                placeholder="Si vous êtes un professionel"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Je suis:  
                                </label>
                            </div>  
                            <div className="col-75">                  
                                <select name="select">
                                <option value="particulier">Un Particulier</option>
                                <option value="professionnel">Un Professionnel</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Je suis intéressé par:  
                                </label> 
                            </div>  
                            <div className="col-75">                  
                                <select name="select">
                                <option value="valor-1">Je souhaite recevoir la plaquette cocktails et repas</option>
                                <option value="valor-2">Repas en nos salons</option>
                                <option value="valor-3">Cocktails dans nos salons</option>
                                <option value="valor-4">Cocktails éxterieurs</option>
                                <option value="valor-5">Repas éxterieurs</option>
                                <option value="valor-6">Prestation Traiteur</option>
                                <option value="valor-7">Autres</option>
                                </select>
                            </div>      
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Je suis intéressé par: 
                                </label> 
                            </div>  
                            <div className="col-75">              
                                <select name="select">
                                <option value="valor-8">Journée d'étude</option>
                                <option value="valor-9">Séminaire</option>
                                <option value="valor-10">Lancement de produit</option>
                                <option value="valor-11">Arbre de Noel</option>
                                <option value="valor-12">Repas de fin d'année</option>
                                <option value="valor-13">Congrès</option>
                                <option value="valor-14">Autres</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>
                                    Message:
                                </label>
                            </div>
                            <div className="col-75">
                                <textarea 
                                name="comment" 
                                form="usrform">
                                </textarea>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn_submit_form" type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>


            </section>

            <hr></hr>
                
            <section className="map">
                <iframe className="map_path" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.7105436814313!2d3.1878081154352857!3d50.651066680770484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3280e9b594235%3A0x95ad09fecd26f6d9!2sAuberge%20du%20Tilleul%20Lille!5e0!3m2!1spt-PT!2spt!4v1651519302311!5m2!1spt-PT!2spt" width="1000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </main>

    );
}

export default Contact;