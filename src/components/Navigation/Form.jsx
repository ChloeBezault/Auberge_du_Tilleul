import { useState } from "react";



export default function Form() {
    

    const [formData, setFormData] = useState({
        name:"",
        telephone:"",
        mobile:"",
        email:"",
        local:"",
        society:"",
        selectChooseCustomer:"particulier",
        selectPrivate:"valor-1",
        selectPro:"valor-8",
        comment:""
    });

    const [isPro, setPro] = useState(false);

    function selectPro(event) {

       if (event.target.value === "professionnel") {
        setPro(!isPro);
       }

    }

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]:value,
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
    }
        

    return (           
        
        <div className="container-f">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="fname">
                        Nom/Prénoms:
                    </label>
                    <input
                    type="text" 
                    name="name" 
                    id="fname"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nom"
                    />
                </div>
                <div className="row">                          
                    <label htmlFor="telephone">
                        Telephone:
                    </label>                           
                    <input
                    type="text" 
                    name="telephone" 
                    id="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Telephone"
                    minLength="9"
                    maxLength="14"
                    />                      
                </div>
                <div className="row">
                    <label htmlFor="mobile">
                        Portable:
                    </label>
                    <input
                    type="text" 
                    name="mobile"
                    id="mobile" 
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Portable"
                    minLength="9"
                    maxLength="14"
                    /> 
                </div>
                <div className="row">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                    type="email" 
                    name="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@"
                    />        
                </div>
                <div className="row">
                    <label htmlFor="local">
                        Adresse:
                    </label>
                    <input
                    type="text" 
                    name="local" 
                    id="local"
                    value={formData.local}
                    onChange={handleChange}
                    placeholder="Adresse"
                    />     
                </div>
                <div className="row">
                    <label htmlFor="society">
                        Sociétè:
                    </label>
                    <input
                    type="text" 
                    name="society" 
                    id="society"
                    value={formData.society}
                    onChange={handleChange}
                    placeholder="Si vous êtes un professionel"
                    />
                </div>
                <div className="row">
                    <label htmlFor="selectChoose2">
                        Je suis:  
                    </label>             
                    <select id="selectChoose2" value={formData.selectChooseCustomer} name="selectChooseCustomer" onChange={selectPro}>
                    <option value="particulier">Un Particulier</option>
                    <option value="professionnel">Un Professionnel</option>
                    </select>     
                </div>
                <div className={ isPro ? "none" : "row"}>
                    <label htmlFor="selectPrivate">
                        Je suis intéressé par:  
                    </label>   
                    <select id="selectPrivate" value={formData.selectPrivate} name="selectPrivate" onChange={handleChange}>
                        <option value="valor-1">Je souhaite recevoir la plaquette cocktails et repas</option>
                        <option value="valor-2">Repas en nos salons</option>
                        <option value="valor-3">Cocktails dans nos salons</option>
                        <option value="valor-4">Cocktails éxterieurs</option>
                        <option value="valor-5">Repas éxterieurs</option>
                        <option value="valor-6">Prestation Traiteur</option>
                        <option value="valor-7">Autres</option>
                    </select>
                </div>      
                <div className={ isPro ? "row" : "none"}>
                    <label htmlFor="selectPro">
                        Je suis intéressé par: 
                    </label>            
                    <select id="selectPro" value={formData.selectPro} name="selectPro" onChange={handleChange}>
                        <option value="valor-8">Journée d'étude</option>
                        <option value="valor-9">Séminaire</option>
                        <option value="valor-10">Lancement de produit</option>
                        <option value="valor-11">Arbre de Noel</option>
                        <option value="valor-12">Repas de fin d'année</option>
                        <option value="valor-13">Congrès</option>
                        <option value="valor-14">Autres</option>
                    </select>
                </div>
                <div className="row">
                    <label htmlFor="comment">
                        Message:
                    </label>
                    <textarea 
                    name="comment"
                    id="comment" 
                    value={formData.comment}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="btn_submit_form" type="submit">Envoyer</button>
                </div>
            </form>
        </div>
        

    );
}

