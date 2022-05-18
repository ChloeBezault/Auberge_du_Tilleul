import { NavLink } from "react-router-dom";


function Emporte() {
    return (
        <main>
            <section className="WelcomeEmporte">
                <div>
                   <h2>Cocktail et plat à emporter</h2>
                    <p className="welcomeIntroduction">
                        Nous avons mis en place une gamme complète de formules cocktail dinatoires "haut de gamme" faciles à emporter. Elles sauront étonner vos convives par sa diversité, la qualité de ses produits et son originalité.
                        3 formules s'offrent à vous afin de convenir à chaque événement. Nous pouvons également vous proposer des plats, de l'entrée au dessert sur simple demande.
                    </p>
                </div>
                <div className="Menus">
                    <div className="Menu_1">
                        <h3>Menu a emporter</h3>
                        <p className="Bold">Prix par personne - 46€</p>
                        <p className="Bold">5 petits fours luxe:</p>
                        <p>
                            Religieuse au foie gras, oeuf de caille au plat, lotte au fenugrec, nougat de chêvre aux fruits confits, moelleux provençale à la crème de mûre et cécina
                        </p>
                        <p className="Bold">Entree froide au choix</p>
                        <p>Risotto frais au basilic, thon rouge, sauce vierge aux olives</p>
                        <p>OU</p>
                        <p>Foie gras de canard mi-cuit</p>
                        <p className="Bold">Plat au choix</p>
                        <p>Ballotine de pintade, sauce au poivre vert </p>
                        <p>OU</p>
                        <p>Dos de cabillaud rôti, crème de truffes</p>
                        <p className="Bold">Garniture :</p>
                        <p>Gratin dauphinois, tomate façon tatin, fagot d'asperge verte</p>
                        <p className="Bold">Fromage chaud au choix:</p>
                        <p>chêvre chaud sur pain d'épices ou bonbon de Maroilles + 5€</p>
                        <p className="Bold">Dessert au choix:</p>
                        <p>Entremet "framboisier des neiges"</p>
                        <p>ou</p>
                        <p>Entremet chocolat noir praliné </p>
                    </div>
                    <div className="Menu_2">
                        <h3>les pieces Aperitives froides</h3>
                        <p>Plateau de 50 canapés variés (10 sortes) - 70 €</p>
                        <p>Pain surprise fraicheur (48 piéces) - 35€</p>
                        <p>Brioche impériale au crabe ou saumon fumé (40 piéces) - 35 €</p>
                        <p>Plateau de 45 pieces cocktails «luxe» - 95 €</p>
                        <p className="Bold">Les pieces Aperitives Froides</p>
                        <p>Plateau de 40 petits fours - 80 €</p>
                        <p>Bonbon de maroilles - briochin escargot - tournedos de boeuf aux herbes</p>
                        <p>Arancini cepes et parmesan -foie gras sur pain d'épices</p>
                        <p>Quiche aux petits légumes - gambas en tempura - croque monsieur</p>
                        <p>Plateau de 10 mini burger - 28 €</p>
                        <p>Plateau de 10 Fish burger - 30 €</p>
                        <p>Plateau de 10 mini hot dog - 28 €</p>
                        <p>Foie gras à la coupe - 120 € /KG </p>
                        <p>Foie gras facon nougat - 130 € / KG</p>
                        <p className="Bold">Bouchée sucrées</p>
                        <p>Plateau de 50 mignardises variées - 70 €</p>
                        <p>Coffret de 20 macarons variés - 19 €</p>
                    </div>
                </div>
            </section>
            <section className="GalleryEmporte">
                <div className="ReserveEmporte">
                    <p>
                        Pensez également à notre service à domicile
                    </p>
                    <p>
                        des formules complètes à partir de 60€/pers (selon conditions)
                    </p>
                <div className="reserveEmporte">
                    <NavLink to="/contact">
                        Contactez-Nous
                    </NavLink>
                </div>
                </div>
                <div className="GalleryImagesEmporte">
                    <p> 
                        Traiteur Lille | Réception Lille | Salon de Réception | Organisateur | Plateau Repas | Prestation haut de gamme | Mariage | Séminaire 
                    </p>
                    <img 
                        src="/images/Emporte/ImageGallery.Jpg" 
                        alt="ImageTakeAway" 
                        className="ImageTakeAway">
                    </img>
                </div>
            </section>
        </main>

    );
}

export default Emporte;