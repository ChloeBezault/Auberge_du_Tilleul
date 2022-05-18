import { NavLink } from "react-router-dom";


function GalleryBrands() {

    const CarroselBrands = [

        {  src:"/images/Img-brands/Abrimmo.png", alt: "Brand Abrimmo" },
        {  src:"/images/Img-brands/Auchan.png", alt: "Brand Auchan" },
        {  src:"/images/Img-brands/boulanger.png", alt: "Brand Boulanger" },
        {  src:"/images/Img-brands/decathlon.png", alt: "Brand Decathlon" },
        {  src:"/images/Img-brands/edf.png", alt: "Brand edf" },
        {  src:"/images/Img-brands/engie.png", alt: "Brand engie" },
        {  src:"/images/Img-brands/euratech.png", alt: "Brand euratech" },
        {  src:"/images/Img-brands/kone.png", alt: "Brand Kone" },
        {  src:"/images/Img-brands/mercedes.png", alt: "Brand Mercedes" },
        {  src:"/images/Img-brands/mp.png", alt: "Brand mp" },
        {  src:"/images/Img-brands/Oney.png", alt: "Brand Oney" },
        {  src:"/images/Img-brands/pocheco.png", alt: "Brand pocheco" },
        {  src:"/images/Img-brands/Porsche.png", alt: "Brand Porsche" },
        {  src:"/images/Img-brands/spie.png", alt: "Brand Spie" },
        {  src:"/images/Img-brands/Vilogia.png", alt: "Brand Vilogia" }
    ];



    return(
        <section className="Gallery">
            <h5>Ils nous font Confiance</h5>
            <div className="GalleryBrands">
                {CarroselBrands.map((item,i) => {
                return(
                    <div key={i} className="imagesBrands">
                        <img src={item.src} alt={item.alt} />
                    </div>
                )}
                )}
            </div> 
        </section>

   
    );
}

export default GalleryBrands;